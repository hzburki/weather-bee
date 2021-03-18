import styled, { css } from 'styled-components/native';

interface DivProps {
  flex?: number;
  dir?: 'row' | 'column';
  fullWidth?: true | false;
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
  alignItems?: 'flex-start' | 'flex-end' | 'center';
}

export const Div = styled.View<DivProps>`
  flex: ${(props) => props.flex || 'auto'};
  flex-direction: ${(props) => props.dir || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
