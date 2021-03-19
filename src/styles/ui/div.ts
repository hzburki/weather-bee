import styled, { css } from 'styled-components/native';
import { scale as ws, verticalScale as vs } from 'react-native-size-matters';

import {
  AlignItemsType,
  FlexDirectionType,
  JustifyContentType,
  MarginPaddingInterface,
} from '../styles.utils';

interface DivProps {
  flex?: number;
  dir?: FlexDirectionType;
  fullWidth?: true | false;
  alignItems?: AlignItemsType;
  margin?: MarginPaddingInterface;
  padding?: MarginPaddingInterface;
  justifyContent?: JustifyContentType;
}

export const Div = styled.View<DivProps>`
  flex: ${(props) => props.flex || 'auto'};
  flex-direction: ${(props) => props.dir || 'column'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};

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

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
