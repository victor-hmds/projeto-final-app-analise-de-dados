import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useLinkTo, useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();

  const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      login(auth.currentUser); // Atualiza o estado de autenticação
    } catch (error) {
      setErrorMessage('Credenciais inválidas');
    }
  };

  const handleNewUser = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={{ height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 8 }}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text
        style={{
          color: 'blue',
          marginTop: 16,
          textAlign: 'center',
          textDecorationLine: 'underline',
        }}
        onPress={() => navigation.navigate('Register')} // Navegação para a tela de Registro
      >
        Criar uma conta
      </Text>
      {errorMessage ? <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text> : null}
    </View>
  );
};

export default LoginScreen;