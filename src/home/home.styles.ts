import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const HomeBackgroundImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImageBackgroundStyle = StyleSheet.create({
  style: {
    opacity: 0.2,
  },
}).style;

export const WeatherImage = styled.Image`
  width: 50%;
  height: 50%;
`;

export const Text = styled.Text`
  color: white;
`;
