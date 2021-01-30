import React from 'react';
import { useTheme } from 'styled-components';
import { TextInput, Button } from 'react-native';

import { Block } from '../../styles/ui';

const AddCities = () => {
  const theme = useTheme();

  return (
    <Block flex={1} dir="row">
      <Block flex={3 / 5}>
        <TextInput
          style={{ height: 40, borderWidth: 1, borderColor: 'white' }}
        />
      </Block>
      <Block flex={2 / 5}>
        <Button
          color={theme.button.secondary}
          onPress={() => console.log('click click')}
          title="Search"
        />
      </Block>
    </Block>
  );
};

export default AddCities;
