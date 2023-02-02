import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { PLAYERS_COLLECTION } from '../storageConfig';

import { PlayerStorageDTO } from './PlayersStorageDTO';

export async function playersGetByGroup(group: string) {
  try {
    const storedPlayers = await AsyncStorage.getItem(`${PLAYERS_COLLECTION}-${group}`);


    const players: PlayerStorageDTO[] = storedPlayers ? JSON.parse(storedPlayers) : [];

    return players;
  } catch (error) {
    throw error;
  }
}