import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { scale as ws } from 'react-native-size-matters';
import MatericalIcon from 'react-native-vector-icons/MaterialIcons';

import { Text, Block } from '../../styles/ui';

const styles = StyleSheet.create({
  text: {
    marginLeft: ws(5),
  },
});

const Location = () => {
  const theme = useTheme();

  return (
    <Block align="center" dir="row">
      <MatericalIcon
        size={ws(20)}
        name="location-on"
        color={theme.text.secondary}
      />
      <Text color="secondary" style={styles.text} size={15}>
        Islamabad
      </Text>
    </Block>
  );
};

export default Location;
