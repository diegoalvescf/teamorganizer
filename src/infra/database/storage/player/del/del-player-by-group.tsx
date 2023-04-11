import { IPlayer } from '@domain/models/IPayers';
import { getAllPlayersByGroupInternal } from '../get/get-all-players-by-group';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '../../storage-config';
import { IGroup } from '@domain/models/IGroup';

export const delPlayerByGroupInternal = async (
  playerId: IPlayer['id'],
  group: IGroup['title']
) => {
  try {
    const storage = await getAllPlayersByGroupInternal(group);

    const filtered = storage.filter((_player) => _player.id !== playerId);

    const _players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, _players);
  } catch (error) {
    throw error;
  }
};
