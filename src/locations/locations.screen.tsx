import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LocationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Locations Screen</Text>
    </View>
  );
};

export default LocationsScreen;
