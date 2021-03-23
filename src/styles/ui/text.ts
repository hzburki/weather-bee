import styled, { css } from 'styled-components/native';
import { scale as ws, verticalScale as vs } from 'react-native-size-matters';

import { MarginPaddingInterface, ColorType, FontType } from '../styles.utils';
interface TextProps extends MarginPaddingInterface {
  size?: number;
  font?: FontType;
  color?: ColorType;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size = 0 }) => ws(size)}px;

  margin-top: ${({ mT = 0 }) => vs(mT) + 'px'};
  margin-left: ${({ mB = 0 }) => ws(mB) + 'px'};
  margin-right: ${({ mR = 0 }) => ws(mR) + 'px'};
  margin-bottom: ${({ mB = 0 }) => vs(mB) + 'px'};

  padding-top: ${({ pT = 0 }) => vs(pT) + 'px'};
  padding-left: ${({ pB = 0 }) => ws(pB) + 'px'};
  padding-right: ${({ pR = 0 }) => ws(pR) + 'px'};
  padding-bottom: ${({ pB = 0 }) => vs(pB) + 'px'};

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
