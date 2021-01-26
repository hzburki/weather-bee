import React from 'react';

import { Block } from '../styles/ui';
import { HOME_BACKGROUND, SHOWER } from '../assets';

import {
  Text,
  Container,
  WeatherImage,
  HomeBackgroundImage,
  ImageBackgroundStyle,
} from './home.styles';

const HomeScreen = () => {
  return (
    <Container>
      <Block flex={1}>
        <HomeBackgroundImage
          imageStyle={ImageBackgroundStyle}
          source={HOME_BACKGROUND}>
          <WeatherImage resizeMode="contain" source={SHOWER} />
        </HomeBackgroundImage>
      </Block>

      <Block flex={1} align="center">
        <Text>Bye World</Text>
        <Text>Bye World</Text>
        <Block dir="row" align="center">
          <Text>Bye World</Text>
          <Text>Bye World</Text>
        </Block>
        <Text>Bye World</Text>
      </Block>
    </Container>
  );
};

export default HomeScreen;
