import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '../../storage-config';
import { getAllGroupsInternal } from '../get/get-all-groups';
import { IGroup } from '@domain/models/IGroup';
import { AppError } from '@utils/app-error';

export const setGroupInternal = async (newGroup: IGroup) => {
  try {
    const storedGroups = await getAllGroupsInternal();

    const storage = JSON.stringify([...storedGroups, newGroup]);

    const groupAlreadyExists = storedGroups.some(
      (group) => group.title === newGroup.title || group.id === newGroup.id
    );

    if (groupAlreadyExists) {
      throw new AppError('Ops... já existe um grupo cadastrado com esse nome!');
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    console.log('👽 👉 cadastrou grupo');
  } catch (error) {
    throw error;
  }
};
