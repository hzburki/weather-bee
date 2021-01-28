import styled, { css } from 'styled-components/native';

import { JustifyContentType, AlignItemsType } from './types/block.types';

interface IAlign {
  justifyContent: JustifyContentType;
  alignItems: AlignItemsType;
}

interface BlockProps {
  flex?: number;
  width?: number;
  dir?: 'row' | 'column';
  align?: 'none' | 'center' | IAlign;
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
