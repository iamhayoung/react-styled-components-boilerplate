import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Text>RUN!</Text>
    </Container>
  );
}

const Container = styled.div`
  background: blue;
`;

const Text = styled.p`
  text-align: center;
`;

export default App;
