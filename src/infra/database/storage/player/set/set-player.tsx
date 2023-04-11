import AsyncStorage from '@react-native-async-storage/async-storage';

import { IPlayer } from '@domain/models/IPayers';
import { AppError } from '@utils/app-error';
import { PLAYER_COLLECTION } from '../../storage-config';
import { getAllPlayersByGroupInternal } from '../get/get-all-players-by-group';

export const setPlayerInternal = async (newPlayer: IPlayer, group: string) => {
  try {
    const storedPlayers = await getAllPlayersByGroupInternal(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Pessoa já esta cadastrada em um time.');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

    console.log('👽 👉 cadastrou jogador');
  } catch (error) {
    throw error;
  }
};
