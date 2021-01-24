import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../header/header';
import DrawerStack from './drawer.navigator';

const RootStack = createStackNavigator();

export default () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={DrawerStack}
        options={{
          headerTitle: () => <Header />,
          headerStyle: { shadowColor: 'transparent' },
        }}
      />
    </RootStack.Navigator>
  );
};
