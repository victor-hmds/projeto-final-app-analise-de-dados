import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Verifica se o usuário está autenticado
    });

    return () => unsubscribe(); // Limpeza do listener ao desmontar o componente
  }, []);

  const login = (user: any) => {
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
