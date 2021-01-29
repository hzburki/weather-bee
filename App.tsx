import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { myTheme } from './src/styles/theme';
import DrawerStack from './src/navigation/drawer.navigator';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <StatusBar />
      <NavigationContainer>
        <DrawerStack />
        {/* <RootStack /> */}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
