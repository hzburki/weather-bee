import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.primary};
`;

enum Weight {
  BOLD = 'bold',
  NORMAL = 'normal',
}

interface TextInterface {
  weight: Weight;
}

const Text = styled.Text<TextInterface>`
  color: ${({ theme }) => theme.text.placeholder};
  font-weight: ${({ weight }) => weight};
`;

const HomeScreen = () => {
  return (
    <Container>
      <Text weight={Weight.BOLD}>Home Screen</Text>
    </Container>
  );
};

export default HomeScreen;
