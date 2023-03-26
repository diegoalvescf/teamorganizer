import { ERouteName } from '@infra/config/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewGroupScreen } from '@screens/new-group';
import { PlayersScreen } from '@screens/players';
import React from 'react';
import { GroupsScreen } from '../../presentation/jsx/screens/groups';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={ERouteName.GroupsScreen}
        component={GroupsScreen}
      />

      <Screen
        name={ERouteName.NewGroupScreen}
        component={NewGroupScreen}
      />

      <Screen
        name={ERouteName.PlayersScreen}
        component={PlayersScreen}
      />
    </Navigator>
  );
}
