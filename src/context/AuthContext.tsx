import React, { createContext, useContext, useEffect, useState } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (user: any) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {

    const checkStoredAuth = async () => {
      const storedAuth = await AsyncStorage.getItem('isAuthenticated');
      if (storedAuth === 'true') {
        setIsAuthenticated(true);
      }
    };

    checkStoredAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const authStatus = !!user;
      setIsAuthenticated(authStatus); // Verifica se o usuário está autenticado
      AsyncStorage.setItem('isAuthenticated', authStatus.toString()); // AsyncStorage para armazenar o estado de autenticação
    });

    return () => unsubscribe(); // Limpeza do listener ao desmontar o componente
  }, []);

  const login = (user: any) => {
    setIsAuthenticated(true);
    AsyncStorage.setItem('isAuthenticated', 'true'); // AsyncStorage para armazenar o estado de autenticação
  };

  const logout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
    AsyncStorage.removeItem('isAuthenticated'); // AsyncStorage para remover o estado de autenticação
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};


