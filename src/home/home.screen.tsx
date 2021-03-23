import React from 'react';

import { Div } from '../styles/ui';

/**
 * Components
 */
import {
  Location,
  WeatherGraphic,
  TimeAndDate,
  Temperature,
} from './components';

import { HomeScreen } from './home.styles';

const Home: React.FC = () => {
  return (
    <HomeScreen>
      <WeatherGraphic />
      <Div fullWidth flex={1} alignItems="center" justifyContent="flex-start">
        <Temperature />
        <TimeAndDate />
        <Location />
      </Div>
    </HomeScreen>
  );
};

export default Home;
