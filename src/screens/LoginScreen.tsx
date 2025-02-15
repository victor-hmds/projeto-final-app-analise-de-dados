import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useAuth } from "../context/AuthContext";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo-rio-on.png';

// Tela de login para autenticação do usuário
const LoginScreen = ({ navigation }: { navigation: any }) => {
  // Estados para armazenar e-mail, senha e mensagens de erro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Hook para acessar o contexto de autenticação
  const { login } = useAuth();

  // Função para autenticar o usuário no Firebase
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      login(auth.currentUser); // Atualiza o estado global de autenticação
    } catch (error) {
      setErrorMessage('Credenciais inválidas'); // Define uma mensagem genérica para erros de login
    }
  };

  // Função para navegar até a tela de registro
  const handleNewUser = () => {
    try {
      // Redireciona para a tela de login após o registro bem-sucedido
      navigation.navigate('Registro'); 
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
        keyboardType="email-address" // Define o teclado adequado para e-mails
        autoCapitalize="none" // Impede a capitalização automática
      />

      {/* Campo de entrada para senha */}
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
      />

      {/* Botão de login */}
      <Button title="Entrar" onPress={handleLogin} color="#FD832F"/>

      {/* Link para criação de conta */}
      <Text style={styles.btnText} onPress={handleNewUser}>
        Criar uma conta
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
    paddingHorizontal: 10 // Adiciona padding interno para melhorar a digitação
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

export default LoginScreen;
