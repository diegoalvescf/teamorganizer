import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ERouteName } from '../../infra/config/routes';
import { GroupsScreen } from '../../presentation/jsx/screens/groups';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={ERouteName.GroupsScreen}
        component={GroupsScreen}
      />
    </Navigator>
  );
}
