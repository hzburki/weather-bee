import styled, { css } from 'styled-components/native';
import { scale as ws } from 'react-native-size-matters';

import { IMarginPadding, applyMargins } from '../styles.utils';

interface TextProps {
  size?: number;
  font?: string;
  weight?: number | string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'placeholder';
  margin?: IMarginPadding;
  padding?: IMarginPadding;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size = 0 }) => ws(size)}px;
  font-weight: ${({ weight = 400 }) => weight};
  /* font-family: ${({ font, theme }) =>
    font ? font : theme.fonts.family.primary}; */

  ${({ margin, padding }) => {
    padding && applyMargins(padding);
    margin && applyMargins(margin);
    return '';
  }}

  ${({ color, theme }) => {
    let selected: string;
    switch (color) {
      case 'secondary': {
        selected = theme.text.secondary;
        break;
      }
      case 'tertiary': {
        selected = theme.text.tertiary;
        break;
      }
      case 'placeholder': {
        selected = theme.text.placeholder;
        break;
      }
      default: {
        selected = theme.text.primary;
        break;
      }
    }

    return css`
      color: ${() => selected};
    `;
  }}
`;
