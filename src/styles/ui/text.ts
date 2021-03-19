import styled, { css } from 'styled-components/native';
import { scale as ws, verticalScale as vs } from 'react-native-size-matters';

import { MarginPaddingInterface, ColorType, FontType } from '../styles.utils';
interface TextProps {
  size?: number;
  font?: FontType;
  color?: ColorType;
  margin?: MarginPaddingInterface;
  padding?: MarginPaddingInterface;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size = 0 }) => ws(size)}px;

  ${({ margin }) => {
    if (!margin) {
      return css``;
    }

    const { top = 0, left = 0, right = 0, bottom = 0 } = margin;

    return css`
      margin-top: ${() => vs(top) + 'px'};
      margin-left: ${() => ws(left) + 'px'};
      margin-right: ${() => ws(right) + 'px'};
      margin-bottom: ${() => vs(bottom) + 'px'};
    `;
  }};

  ${({ padding }) => {
    if (!padding) {
      return css``;
    }

    const { top = 0, left = 0, right = 0, bottom = 0 } = padding;

    return css`
      padding-top: ${() => vs(top) + 'px'};
      padding-left: ${() => ws(left) + 'px'};
      padding-right: ${() => ws(right) + 'px'};
      padding-bottom: ${() => vs(bottom) + 'px'};
    `;
  }};

  /** Font Family */
  ${({ font, theme }) => {
    const { primary, secondary } = theme.fonts.family;

    switch (font) {
      case 'primary': {
        return css`
          font-family: ${() => primary};
        `;
      }
      case 'secondary': {
        return css`
          font-family: ${() => secondary};
        `;
      }
      default: {
        return css`
          font-family: ${() => primary};
        `;
      }
    }
  }}
  /** Font color */
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
  }};
`;
