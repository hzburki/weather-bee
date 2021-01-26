import styled, { css } from 'styled-components/native';

interface BlockProps {
  flex?: number;
  width?: number;
  align?: 'none' | 'center';
  dir?: 'row' | 'column';
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
        css`
          align-items: center;
          justify-content: center;
        `;
      }
    }
  }}
`;

Block.defaultProps = {
  align: 'none',
};
