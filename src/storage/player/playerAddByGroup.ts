import AsyncStorage from '@react-native-async-storage/async-storage';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { AppError } from '@utils/AppError';

import { PLAYERS_COLLECTION } from '../storageConfig';

import { PlayerStorageDTO } from './PlayersStorageDTO';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group);


    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Já existe um jogador cadastrado com esse nome');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, storage);

  } catch (error) {
    throw error;
  }
}