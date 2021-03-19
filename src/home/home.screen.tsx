import React from 'react';

import { Div, Text } from '../styles/ui';
// import Location from './components/location';
import { HOME_BACKGROUND, SHOWER } from '../assets';

import {
  styles,
  HomeScreen,
  CurrentWeatherImage,
  WeatherBackgroundImage,
} from './home.styles';

const Home: React.FC = () => {
  return (
    <HomeScreen>
      {/* //TODO make this a single component */}
      <Div fullWidth flex={1}>
        <WeatherBackgroundImage
          imageStyle={styles.imageBackground}
          source={HOME_BACKGROUND}>
          <CurrentWeatherImage resizeMode="contain" source={SHOWER} />
        </WeatherBackgroundImage>
      </Div>

      <Div fullWidth flex={1} alignItems="center" justifyContent="flex-start">
        <Div dir="row" alignItems="center" justifyContent="center">
          <Text size={120}>15</Text>
          <Text size={60} color="tertiary">
            C
          </Text>
        </Div>

        <Text margin={{ bottom: 20 }} color="tertiary" size={50}>
          Shower
        </Text>

        <Div flex={1} dir="row" alignItems="center" padding={{ bottom: 10 }} />
      </Div>

      {/*
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

        <Text color="tertiary" margin={{ bottom: 20 }} size={50}>
          Shower
        </Text>

        Done

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
      */}
    </HomeScreen>
  );
};

export default Home;
