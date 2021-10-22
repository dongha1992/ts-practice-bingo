import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

function App() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [winner, setWinner] = useState<number>(0);

  const gameStartHandler = () => {};

  return (
    <Container>
      <GameStartButton onClick={gameStartHandler}>
        {isGameStarted ? '게임 재시작' : '게임 시작'}
      </GameStartButton>
      <BoardWrapper></BoardWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameStartButton = styled.button`
  padding: 1rem 1.2rem;
`;

const PlayerChecker = styled.h2``;

const BoardWrapper = styled.main`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export default App;
