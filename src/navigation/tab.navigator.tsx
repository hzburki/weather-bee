import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**
 * Screen
 */
import HomeScreen from '../home/home.screen';
import DetailsScreen from '../details/details.screen';
import SettingsScreen from '../settings/settings.screen';
import LocationsScreen from '../locations/locations.screen';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Locations" component={LocationsScreen} />
    </Tab.Navigator>
  );
};
