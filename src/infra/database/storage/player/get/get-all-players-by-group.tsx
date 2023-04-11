import { IPlayer } from '@domain/models/IPayers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '../../storage-config';
import { IGroup } from '@domain/models/IGroup';

export const getAllPlayersByGroupInternal = async (group: IGroup['title']) => {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

    const players: IPlayer[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
};
