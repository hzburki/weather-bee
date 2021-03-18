import React from 'react';

import { LocationScreen } from './locations.styles';
import AddCities from './components/add-cities';

const LocationsScreen: React.FC = () => {
  return (
    <LocationScreen>
      <AddCities />
    </LocationScreen>
  );
};

export default LocationsScreen;
