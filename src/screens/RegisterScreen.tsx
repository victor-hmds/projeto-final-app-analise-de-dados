import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login'); // Redireciona para o login após o registro
    } catch (error) {
      setErrorMessage(error.message);
    }
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
      <Button title="Criar Conta" onPress={handleRegister} />
      {errorMessage ? <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text> : null}
    </View>
  );
};

export default RegisterScreen;
