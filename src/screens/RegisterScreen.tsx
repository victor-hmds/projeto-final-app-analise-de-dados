import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import logo from '../../assets/logo-rio-on.png';

// Definição do componente de registro
// Recebe a propriedade `navigation` para permitir a navegação entre telas
const RegisterScreen = ({ navigation }: { navigation: any }) => {
  
  // Estados para armazenar os valores de e-mail, senha e mensagens de erro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Função para lidar com o registro do usuário no Firebase Authentication
  const handleRegister = async () => {
    try {
      // Tenta criar um novo usuário com e-mail e senha
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Redireciona para a tela de login após o registro bem-sucedido
      navigation.navigate('Login'); 
    } 
    catch (error) {
      // Verifica se o erro é uma instância de Error para evitar possíveis problemas
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Ocorreu um erro inesperado');
      }
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Cabeçalho com logotipo */}
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
      </View>
    
      {/* Campo de entrada para e-mail */}
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        keyboardType="email-address" // Define o teclado apropriado para e-mails
        autoCapitalize="none" // Evita capitalização automática
      />

      {/* Campo de entrada para senha */}
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
      />

      {/* Botão para criar conta */}
      <Button title="Criar Conta" onPress={handleRegister} color="#FD832F"/>

      {/* Link para a tela de login */}
      <Text style={styles.btnText} onPress={() => navigation.navigate('Login')}>
        Login
      </Text>
      
      {/* Exibição da mensagem de erro, se houver */}
      {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f00cc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f00cc',
    padding: 24,
    marginBottom: 10    
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    backgroundColor: '#F3F1F1',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5,
    paddingHorizontal: 10 // Adiciona padding interno para melhor experiência
  },
  text: {
    color: 'red',
    marginTop: 10 
  },
  btnText : {
    color: 'white',
    marginTop: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  image: {
    width: 200,
    height: 75
  }
});

export default RegisterScreen;
