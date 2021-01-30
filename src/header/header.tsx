import React from 'react';
import { useTheme } from 'styled-components';
import { TouchableHighlight } from 'react-native';

import { scale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import { Container } from './header.styles';
import LocationButton from './components/location.button';

const Header: React.FC = () => {
  const theme = useTheme();

  const toggleDrawer = () => {
    console.log('toggle drawer');
  };

  return (
    <Container>
      <TouchableHighlight
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        onPress={toggleDrawer}>
        <FontAwesome name="bars" color={theme.text.primary} size={scale(22)} />
      </TouchableHighlight>
      <LocationButton />
    </Container>
  );
};

export default Header;
