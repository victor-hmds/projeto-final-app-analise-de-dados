import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import InsightsScreen from './src/screens/InsightsScreen';

// Criando o Stack Navigator para gerenciar a navegação entre telas
const Stack = createNativeStackNavigator();

// Componente responsável por definir a navegação baseada no estado de autenticação
const AppNavigator = () => {
  // Obtém o estado de autenticação do contexto
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        // Se o usuário estiver autenticado, ele é levado para a tela "Meus Insights"
        <Stack.Screen name="Meus Insights" component={InsightsScreen} />
      ) : (
        // Se não estiver autenticado, ele vê as telas de Login e Registro
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registro" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

// Componente principal do aplicativo
const App = () => {
  return (
    // Provedor de autenticação que disponibiliza o contexto para o app inteiro
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
