import styled from 'styled-components/native';

interface IContainer {
  css?: object;
}

export const Container = styled.View<IContainer>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg.primary};
`;
