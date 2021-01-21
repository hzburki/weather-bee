import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerStack from './drawer.navigator';

const RootStack = createStackNavigator();

export default () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={DrawerStack} />
    </RootStack.Navigator>
  );
};
