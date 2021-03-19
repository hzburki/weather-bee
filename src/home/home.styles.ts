import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const HomeScreen = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const WeatherBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const CurrentWeatherImage = styled.Image`
  width: 50%;
  height: 50%;
`;

export const styles = StyleSheet.create({
  imageBackground: {
    opacity: 0.2,
  },
  // weatherType: {
  //   marginBottom: vs(20),
  // },
  // timeAndDateWrapper: {
  //   marginBottom: vs(10),
  // },
  // time: {
  //   marginRight: ws(30),
  // },
  // date: {
  //   marginLeft: ws(30),
  // },
});
