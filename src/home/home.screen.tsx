import React from 'react';

import { Div } from '../styles/ui';
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
      <Div flex={1}>
        <WeatherBackgroundImage
          imageStyle={styles.imageBackground}
          source={HOME_BACKGROUND}>
          <CurrentWeatherImage resizeMode="contain" source={SHOWER} />
        </WeatherBackgroundImage>
      </Div>

      <Div flex={1}>
        <Div />
      </Div>

      {/* <Block
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
      </Block> */}
    </HomeScreen>
  );
};

export default Home;
