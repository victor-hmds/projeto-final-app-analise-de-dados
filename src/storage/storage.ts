import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para salvar um dado no AsyncStorage
export const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value); // Salva a chave e o valor no armazenamento local
    console.log(`Dados salvos: ${key} - ${value}`);
  } catch (error) {
    console.error("Erro ao salvar os dados", error);
  }
};

// Função para recuperar um dado do AsyncStorage
export const getData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key); // Obtém o valor salvo
    return value; // Retorna o valor (ou null se não existir)
  } catch (error) {
    console.error("Erro ao recuperar os dados", error);
    return null;
  }
};

// Função para remover um dado do AsyncStorage
export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key); // Remove a chave do armazenamento
    console.log(`Dados removidos: ${key}`);
  } catch (error) {
    console.error("Erro ao remover os dados", error);
  }
};