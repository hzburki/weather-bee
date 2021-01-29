import styled, { css } from 'styled-components/native';
import { scale as ws, verticalScale as vs } from 'react-native-size-matters';

interface IMarginPadding {
  bottom?: number;
  top?: number;
  vertical?: number;
  left?: number;
  right?: number;
  horizontal?: number;
}

interface TextProps {
  size?: number;
  font?: string;
  weight?: number | string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'placeholder';
  // style?: object;
  margins?: IMarginPadding;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size = 0 }) => ws(size)}px;
  font-weight: ${({ weight = 400 }) => weight};
  /* font-family: ${({ font, theme }) =>
    font ? font : theme.fonts.family.primary}; */

  ${({
      margins = {
        bottom: 0,
        top: 0,
        vertical: 0,
        horizontal: 0,
        left: 0,
        right: 0,
      },
    }) => {
    const { bottom, vertical, top, left, horizontal, right } = margins;

    if (bottom) {
      return css`
        margin-bottom: ${() => `${vs(bottom)}px`};
      `;
    }

    if (top) {
      return css`
        margin-top: ${() => `${vs(top)}px`};
      `;
    }

    if (left) {
      return css`
        margin-left: ${() => `${ws(left)}px`};
      `;
    }

    if (right) {
      return css`
        margin-right: ${() => `${ws(right)}px`};
      `;
    }

    if (vertical) {
      return css`
        margin-top: ${() => `${vs(vertical)}px`};
        margin-bottom: ${() => `${vs(vertical)}px`};
      `;
    }

    if (horizontal) {
      return css`
        margin-left: ${() => `${ws(horizontal)}px`};
        margin-right: ${() => `${ws(horizontal)}px`};
      `;
    }

    return css``;
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

// Text.defaultProps = {
//   margins: { bottom: 0, top: 0, vertical: 0 },
// };
