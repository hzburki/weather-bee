import React from 'react';

import { Container } from '../styles/ui';
import AddCities from './components/add-cities';

const LocationsScreen: React.FC = () => {
  return (
    <Container padding={{ left: 200 }}>
      <AddCities />
    </Container>
  );
};

export default LocationsScreen;
