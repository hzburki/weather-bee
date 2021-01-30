import styled, { css } from 'styled-components/native';
import { scale as ws } from 'react-native-size-matters';

import { IMarginPadding, applyMargins, applyPaddings } from '../styles.utils';

type DummyTextProps = Pick<React.CSSProperties, 'margin' | 'padding'>;

interface TextProps {
  size?: number;
  font?: string;
  margin?: DummyTextProps;
  padding?: DummyTextProps;
  weight?: number | string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'placeholder';
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size = 0 }) => ws(size)}px;
  font-weight: ${({ weight = 400 }) => weight};
  /* font-family: ${({ font, theme }) =>
    font ? font : theme.fonts.family.primary}; */

  ${({ margin }) => (margin ? applyMargins(margin) : '')}
  ${({ padding }) => (padding ? applyPaddings(padding) : '')}

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
