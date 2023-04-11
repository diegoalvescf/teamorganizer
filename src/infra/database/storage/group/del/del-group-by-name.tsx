import { IGroup } from '@domain/models/IGroup';
import { getAllGroupsInternal } from '../get/get-all-groups';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../../storage-config';

export const delGroupByNameInternal = async (groupDeleted: IGroup) => {
  try {
    const storedGroups = await getAllGroupsInternal();

    const groups = storedGroups.filter((group) => group.id !== groupDeleted.id);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));

    await AsyncStorage.removeItem(
      `${PLAYER_COLLECTION}-${groupDeleted['title']}`
    );
  } catch (error) {}
};
