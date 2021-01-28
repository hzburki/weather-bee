import React from 'react';

import { Block, Text } from '../styles/ui';
import Location from './components/location';
import { HOME_BACKGROUND, SHOWER } from '../assets';

import {
  styles,
  Container,
  WeatherImage,
  HomeBackgroundImage,
} from './home.styles';

const HomeScreen = () => {
  return (
    <Container>
      <Block flex={1}>
        <HomeBackgroundImage
          imageStyle={styles.imageBackground}
          source={HOME_BACKGROUND}>
          <WeatherImage resizeMode="contain" source={SHOWER} />
        </HomeBackgroundImage>
      </Block>

      <Block
        flex={1}
        align={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Block
          dir="row"
          align={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text size={120} weight={600}>
            15
          </Text>
          <Text color="tertiary" size={60} weight={700}>
            C
          </Text>
        </Block>

        <Text color="tertiary" style={styles.weatherType} size={50}>
          Shower
        </Text>

        <Block dir="row" align="center" style={styles.timeAndDateWrapper}>
          <Text color="secondary" size={15} style={styles.time}>
            Today
          </Text>
          <Text>•</Text>
          <Text color="secondary" size={15} style={styles.date}>
            Fri, 5 Jan
          </Text>
        </Block>

        <Location />
      </Block>
    </Container>
  );
};

export default HomeScreen;
