import styled, { css } from 'styled-components/native';
import { scale as ws, verticalScale as vs } from 'react-native-size-matters';

import {
  AlignItemsType,
  FlexDirectionType,
  JustifyContentType,
  MarginPaddingInterface,
} from '../styles.utils';

interface DivProps extends MarginPaddingInterface {
  flex?: number;
  dir?: FlexDirectionType;
  fullWidth?: true | false;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
}

export const Div = styled.View<DivProps>`
  flex: ${(props) => props.flex || '0 auto'};
  flex-direction: ${(props) => props.dir || 'column'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};

  margin-top: ${({ mT = 0 }) => vs(mT) + 'px'};
  margin-left: ${({ mB = 0 }) => ws(mB) + 'px'};
  margin-right: ${({ mR = 0 }) => ws(mR) + 'px'};
  margin-bottom: ${({ mB = 0 }) => vs(mB) + 'px'};

  padding-top: ${({ pT = 0 }) => vs(pT) + 'px'};
  padding-left: ${({ pB = 0 }) => ws(pB) + 'px'};
  padding-right: ${({ pR = 0 }) => ws(pR) + 'px'};
  padding-bottom: ${({ pB = 0 }) => vs(pB) + 'px'};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
