import React from 'react';
import { verticalScale as vs } from 'react-native-size-matters';
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
          headerStyle: { shadowColor: 'transparent', height: vs(80) },
        }}
      />
    </RootStack.Navigator>
  );
};
