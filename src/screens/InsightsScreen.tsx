import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, ActivityIndicator, StyleSheet, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importando AsyncStorage
import { useAuth } from '../context/AuthContext';


const InsightsScreen = () => {
  const [username, setUsername] = useState(''); // Estado para armazenar o nome do usuário
  const [data, setData] = useState<any[]>([]); // Estado para armazenar os dados da API (repos do GitHub)
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento (spinner)

  const { logout } = useAuth();

  // Função para buscar os dados da API
  const fetchData = async () => {
    if (!username.trim()) {
      Alert.alert("Erro", "Digite um nome de usuário válido!"); // Exibe alerta caso o campo de username esteja vazio
      return;
    }

    setLoading(true); // Define o estado de carregamento como verdadeiro (mostra o spinner)
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`); // Faz a requisição para a API do GitHub
      setData(response.data); // Atualiza o estado de dados com a resposta da API

      // Armazenando os dados recebidos no AsyncStorage para persistência
      await AsyncStorage.setItem(`repos_${username}`, JSON.stringify(response.data));
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar os repositórios. Verifique o nome de usuário.");
      console.error("Erro ao buscar dados:", error); // Loga o erro no console
    } finally {
      setLoading(false); // Define o estado de carregamento como falso (oculta o spinner)
    }
  };

  // Função para carregar os dados do AsyncStorage quando a tela for montada ou quando o username mudar
  const loadDataFromStorage = async () => {
    const storedData = await AsyncStorage.getItem(`repos_${username}`); // Recupera os dados do AsyncStorage com a chave `repos_{username}
    if (storedData) {
      setData(JSON.parse(storedData)); // Se os dados existirem, atualiza o estado `data` com os dados armazenados
    }
  };

  useEffect(() => {
    if (username) {
      loadDataFromStorage(); // Carrega os dados do AsyncStorage quando o nome de usuário mudar
    }
  }, [username]); // O efeito será executado sempre que o username mudar

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Repositórios do GitHub</Text>{/* Título da tela */}

      {/* Campo de entrada para o nome de usuário */}
      <TextInput
        style={styles.input}
        placeholder="Digite o username do GitHub"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* Botão para buscar os repositórios */}
      <Button title="Buscar" onPress={fetchData} color="#FD832F"/>

      {/* Indicador de carregamento (spinner) que aparece enquanto os dados estão sendo carregados */}
      {loading && <ActivityIndicator size="large" color="#FD832F" />}

      {/* Lista de repositórios */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.repoName}>{item.name}</Text>
            <Text style={styles.repoDesc}>{item.description || "Sem descrição"}</Text>
            <Text style={styles.repoURL}>{item.html_url || "Sem URL"}</Text>
          </View>
        )}
      />

      {/* Botão de logout (não implementado ainda) */}
      <Button title="Sair" onPress={logout} color="#FD832F"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    // Cor de fundo da tela
    flex: 1,
    padding: 16, 
    backgroundColor: "#2f00cc"
  },
  title: { 
    // Estilo do título
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 10, 
    textAlign: "center", 
    color: "white" 
  },
  input: { 
    // Estilo do campo de entrada
    width: "100%", 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 5, 
    marginBottom: 10,
    backgroundColor: "#F3F1F1"
  },
  item: { 
    // Estilo para cada item da lista de repositórios
    backgroundColor: '#F3F1F1',
    borderRadius: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16, 
  },
  repoName: { 
    // Estilo para o nome do repositório
    fontSize: 18, 
    fontWeight: "bold", 
    color: "blue",
    alignSelf: "center" 
  },
  repoDesc: { 
    // Estilo para a descrição do repositório
    marginBottom: 5,
    fontSize: 14, 
    color: "black" 
  },
  repoURL: {
    // Estilo para a URL do repositório
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    marginTop: 5 
  }
});

export default InsightsScreen;