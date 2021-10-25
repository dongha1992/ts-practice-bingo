import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { IBingo } from 'interfaces/index';
import { RootState } from 'store';
import BingoBoard from 'components/BingoBoard';
import CompleteBoard from 'components/CompleteBoard';
import ResultModal from 'components/ResultModal';
import { startGame, endGame } from 'store/bingo';

function App() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [winner, setWinner] = useState<number>(0);

  const bingoStatus = useSelector(
    (state: RootState) => state.bingoReducer as IBingo
  );

  const dispatch = useDispatch();

  const completed1p = bingoStatus[1].completed.length;
  const completed2p = bingoStatus[2].completed.length;

  const gameStartHandler = useCallback(() => {
    dispatch(startGame());
    setIsGameStarted(true);
  }, []);

  const resetGame = useCallback(() => {
    dispatch(endGame());
    setIsGameStarted(false);
    setWinner(0);
  }, []);

  const checkWinner = () => {
    if (completed1p >= 5 && completed2p >= 5) setWinner(3);
    else if (completed1p < completed2p) setWinner(2);
    else setWinner(1);
  };

  useEffect(() => {
    if (!isGameStarted) return;
    if (!(completed1p >= 5 || completed2p >= 5)) return;
    checkWinner();
  }, [bingoStatus]);

  return (
    <FlexColWrapper>
      <GameStartButton onClick={gameStartHandler}>
        {isGameStarted ? '게임 재시작' : '게임 시작'}
      </GameStartButton>
      <BoardWrapper>
        {Object.keys(bingoStatus).map((player) => (
          <FlexColWrapper key={player}>
            <PlayerChecker currentTurn={bingoStatus[player].isTurn}>
              {player}차례입니당
            </PlayerChecker>
            <BingoBoard player={player} />
            <CompleteBoard player={player} />
          </FlexColWrapper>
        ))}
      </BoardWrapper>
      {!winner && (
        <ResultModal winner={winner} clickConfirmHandler={resetGame} />
      )}
    </FlexColWrapper>
  );
}

const FlexColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameStartButton = styled.button`
  padding: 1rem 1.2rem;
`;

const PlayerChecker = styled.h2<{ currentTurn: boolean }>`
  color: ${({ currentTurn, theme }) =>
    currentTurn ? theme.primary : theme.darkgray};
`;

const BoardWrapper = styled.main`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export default App;
