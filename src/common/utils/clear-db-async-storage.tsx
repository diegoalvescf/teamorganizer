import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearDbAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log('Erro ao limpar o AsyncStorage:', error);
  }
};
