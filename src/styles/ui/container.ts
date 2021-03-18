import styled from 'styled-components/native';

import { applyMargins, applyPaddings, IMarginPadding } from '../styles.utils';

interface ContainerProps {
  margin?: IMarginPadding;
  padding?: IMarginPadding;
}

export const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg.primary};

  ${({ margin }) => (margin ? applyMargins(margin) : '')}
  ${({ padding }) => (padding ? applyPaddings(padding) : '')}
`;
