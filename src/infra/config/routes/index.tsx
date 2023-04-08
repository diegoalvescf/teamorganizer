export type TReactNavigationStackParamList = {
  GroupsScreen: undefined;
  NewGroupScreen: undefined;
  PlayersScreen: { group: string };
};

export enum ERouteName {
  GroupsScreen = 'GroupsScreen',

  NewGroupScreen = 'NewGroupScreen',

  PlayersScreen = 'PlayersScreen',
}
