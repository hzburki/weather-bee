import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './stack.navigator';
import CustomDrawer from '../drawer/drawer.screen';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabStack"
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="AppStack" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: any) => {
  return <CustomDrawer {...props} />;
};
