import React from 'react';
import { useTheme } from 'styled-components';
import { scale as ws, verticalScale as vs } from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**
 * Screen
 */
import HomeScreen from '../home/home.screen';
import DetailsScreen from '../details/details.screen';
import LocationsScreen from '../locations/locations.screen';

const Tab = createBottomTabNavigator();

export default () => {
  const theme = useTheme();

  const renderIcon = (route: string): string => {
    switch (route) {
      case 'Home': {
        return 'home';
      }
      case 'Locations': {
        return 'add-location-alt';
      }
      case 'Details': {
        return 'list-alt';
      }
      default: {
        return '';
      }
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          return (
            <MaterialIcons
              name={renderIcon(route.name)}
              size={focused ? ws(30) : ws(25)}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        style: {
          height: vs(70),
        },
        labelStyle: {
          fontSize: ws(13),
        },
        activeTintColor: theme.bg.primary,
        inactiveTintColor: theme.text.secondary,
      }}>
      <Tab.Screen name="Locations" component={LocationsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
};
