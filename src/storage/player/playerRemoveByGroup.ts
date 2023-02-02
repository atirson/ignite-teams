import AsyncStorage from '@react-native-async-storage/async-storage';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { AppError } from '@utils/AppError';

import { PLAYERS_COLLECTION } from '../storageConfig';

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playersWithoutRemoved = storedPlayers.filter(player => player.name !== playerName);

    if (playersWithoutRemoved.length === storedPlayers.length) {
      throw new AppError('Não foi possível remover o jogador');
    }

    const storage = JSON.stringify(playersWithoutRemoved);

    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, storage);

  } catch (error) {
    throw error;
  }
}