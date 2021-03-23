import React from 'react';
import { useTheme } from 'styled-components';
import { scale as ws } from 'react-native-size-matters';
import MatericalIcon from 'react-native-vector-icons/MaterialIcons';

import { Text, Div } from '../../styles/ui';

const Location = () => {
  const theme = useTheme();

  return (
    <Div flex={1} justifyContent="center" alignItems="center" dir="row">
      <MatericalIcon
        size={ws(20)}
        name="location-on"
        color={theme.text.secondary}
      />
      <Text color="secondary" mL={5} size={15}>
        Islamabad
      </Text>
    </Div>
  );
};

export default Location;
