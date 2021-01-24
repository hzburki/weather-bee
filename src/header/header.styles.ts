import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${() => width};
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${() => scale(10)};
  padding-left: ${() => scale(20)};
  padding-right: ${() => scale(20)};
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
