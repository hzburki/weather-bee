import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DrawerMenu = () => {
  return (
    <View style={styles.container}>
      <Text>Drawer Menu</Text>
    </View>
  );
};

export default DrawerMenu;
