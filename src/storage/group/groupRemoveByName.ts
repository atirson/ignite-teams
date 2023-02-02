import AsyncStorage from '@react-native-async-storage/async-storage';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { GROUP_COLLECTION, PLAYERS_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groupsWithoutRemoved = storedGroups.filter((group: string) => group !== groupDeleted);

    if (groupsWithoutRemoved.length === storedGroups.length) {
      throw new AppError('Não foi possível remover o grupo');
    }

    
    const storage = JSON.stringify(groupsWithoutRemoved);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}-${groupDeleted}`);

  } catch (error) {
    throw error;
  }
}