import React from 'react';
import styled from 'styled-components';
import Board from './containers/Board';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <Wrapper>
      <Board />
    </Wrapper>
  );
}

export default App;
