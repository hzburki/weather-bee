import React from 'react';
import { StyleSheet } from 'react-native';

import {
  WeatherBackgroundImage,
  CurrentWeatherImage,
} from './weather-graphics.styles';
import { HOME_BACKGROUND, SHOWER } from '../../../assets';
import { Div } from '../../../styles/ui';

const styles = StyleSheet.create({
  imageBackground: {
    opacity: 0.2,
  },
});

const WeatherGraphic = () => {
  return (
    <Div fullWidth flex={1}>
      <WeatherBackgroundImage
        imageStyle={styles.imageBackground}
        source={HOME_BACKGROUND}>
        <CurrentWeatherImage resizeMode="contain" source={SHOWER} />
      </WeatherBackgroundImage>
    </Div>
  );
};

export default WeatherGraphic;
