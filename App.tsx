import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { myTheme } from './src/styles/theme';
import RootStack from './src/navigation/root.navigator';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <StatusBar />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
