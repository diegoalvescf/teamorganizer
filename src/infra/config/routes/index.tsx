import { IGroup } from '@domain/models/IGroup';

export type TReactNavigationStackParamList = {
  GroupsScreen: undefined;
  NewGroupScreen: undefined;
  PlayersScreen: { group: IGroup };
};

export enum ERouteName {
  GroupsScreen = 'GroupsScreen',

  NewGroupScreen = 'NewGroupScreen',

  PlayersScreen = 'PlayersScreen',
}
