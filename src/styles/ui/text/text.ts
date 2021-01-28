import styled from 'styled-components/native';
import { scale as ws } from 'react-native-size-matters';

interface TextProps {
  size?: number;
  font?: string;
  weight?: number | string;
}

export const Text = styled.Text<TextProps>`
  color: ${({ theme }) => theme.text.primary};
  font-size: ${({ size = 0 }) => ws(size)}px;
  font-weight: ${({ weight = 400 }) => weight};
  font-family: ${({ font, theme }) =>
    font ? font : theme.fonts.family.primary};
`;
