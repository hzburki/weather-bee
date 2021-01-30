import { css } from 'styled-components';
import { verticalScale as vs, scale as ws } from 'react-native-size-matters';

/**
 * Flex properties
 */
export type JustifyContentType =
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end';

export type AlignItemsType =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';

export interface IAlign {
  justifyContent: JustifyContentType;
  alignItems: AlignItemsType;
}

/**
 * Margins and Paddings
 */
export interface IMarginPadding {
  bottom?: number;
  top?: number;
  vertical?: number;
  left?: number;
  right?: number;
  horizontal?: number;
}

type DummyTextProps = Pick<React.CSSProperties, 'margin' | 'padding'>;

export const applyMargins = (margin: DummyTextProps) => {
  const { bottom, vertical, top, left, horizontal, right } = margin;

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
};

export const applyPaddings = (padding: IMarginPadding) => {
  const { bottom, vertical, top, left, horizontal, right } = padding;

  if (bottom) {
    return css`
      padding-bottom: ${() => `${vs(bottom)}px`};
    `;
  }

  if (top) {
    return css`
      padding-top: ${() => `${vs(top)}px`};
    `;
  }

  if (left) {
    return css`
      padding-left: ${() => `${ws(left)}px`};
    `;
  }

  if (right) {
    return css`
      padding-right: ${() => `${ws(right)}px`};
    `;
  }

  if (vertical) {
    return css`
      padding-top: ${() => `${vs(vertical)}px`};
      padding-bottom: ${() => `${vs(vertical)}px`};
    `;
  }

  if (horizontal) {
    console.log('horizontal', horizontal);

    return css`
      padding-left: ${() => `${ws(horizontal)}px`};
      padding-right: ${() => `${ws(horizontal)}px`};
    `;
  }

  return css``;
};
