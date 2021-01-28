import React from 'react';
import { useTheme } from 'styled-components';

import { scale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import { Container } from './header.styles';
import LocationButton from './components/location.button';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <FontAwesome name="bars" color={theme.text.primary} size={scale(22)} />
      <LocationButton />
    </Container>
  );
};

export default Header;
