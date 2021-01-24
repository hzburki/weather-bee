import React from 'react';
import { scale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import { Container, Wrapper } from './header.styles';

const Header: React.FC = () => {
  console.log('header');

  return (
    <Container>
      <Wrapper>
        <FontAwesome name="bars" color="white" size={scale(22)} />
        <FontAwesome name="map-pin" color="white" size={scale(22)} />
      </Wrapper>
    </Container>
  );
};

export default Header;
