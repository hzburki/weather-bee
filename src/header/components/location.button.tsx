import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale as ws } from 'react-native-size-matters';

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${() => ws(32.5)}px;
  height: ${() => ws(32.5)}px;
  border-radius: ${() => ws(32.5 / 2)}px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.button.primary};
`;

const LocationButton = () => {
  const theme = useTheme();

  return (
    <Container>
      <MaterialIcons
        name="my-location"
        color={theme.text.primary}
        size={ws(22)}
      />
    </Container>
  );
};

export default LocationButton;
