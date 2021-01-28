import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${() => width}px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${() => scale(20)}px;
  padding-right: ${() => scale(20)}px;
  background-color: ${({ theme }) => theme.bg.primary};
`;
