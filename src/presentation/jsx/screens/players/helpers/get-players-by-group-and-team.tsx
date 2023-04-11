import { IGroup } from '@domain/models/IGroup';
import { ITeam } from '@domain/models/ITeam';
import { getAllPlayersByGroupInternal } from '@infra/database/storage/player/get/get-all-players-by-group';

export const getPlayersByGroupAndTeamInternal = async (
  group: IGroup['title'],
  team: ITeam['id']
) => {
  try {
    const storage = await getAllPlayersByGroupInternal(group);

    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
};
