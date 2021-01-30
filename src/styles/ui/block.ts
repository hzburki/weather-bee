import styled, { css } from 'styled-components/native';

import {
  IMarginPadding,
  applyMargins,
  applyPaddings,
  IAlign,
} from '../styles.utils';

interface BlockProps {
  flex?: number;
  width?: number;
  dir?: 'row' | 'column';
  align?: 'none' | 'center' | IAlign;
  padding?: IMarginPadding;
  margin?: IMarginPadding;
}

export const Block = styled.View<BlockProps>`
  width: 100%;

  ${({ dir }) =>
    dir &&
    css`
      flex-direction: ${() => dir};
    `}

  ${({ flex }) =>
    flex &&
    css`
      flex: ${() => flex};
    `}

  ${({ margin, padding }) => {
    margin && applyMargins(margin);
    padding && applyPaddings(padding);
    return '';
  }}

  ${({ align }) => {
    switch (align) {
      case 'none': {
        return css``;
      }
      case 'center': {
        return css`
          align-items: center;
          justify-content: center;
        `;
      }
      default: {
        return css`
          justify-content: ${() => align?.justifyContent};
          align-items: ${() => align?.alignItems};
        `;
      }
    }
  }}
`;

Block.defaultProps = {
  align: 'none',
};
