import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '../../storage-config';
import { IGroup } from '@domain/models/IGroup';

export const getAllGroupsInternal = async () => {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groups: IGroup[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
};
