import styled from 'styled-components/native';

export const HomeScreen = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg.primary};
`;
