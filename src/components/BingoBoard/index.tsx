import React, { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import BingoCell from 'components/BingoCell';
import { IBingo, IBingoCell } from 'interfaces';
import { BINGO_ANSWER } from 'constants/index';

type TProps = {
  player: string;
};

type TrenderCompletedLinesFunc = {
  _board: null[][] | IBingoCell[][];
  _completed: number[];
};

interface IRenderCell extends IBingoCell {
  isCompleted?: boolean;
}

function BingBoard({ player }: TProps) {
  const bingoStatus = useSelector(
    (state: RootState) => state.bingoReducer as IBingo
  );

  const _board = bingoStatus[player].board;
  const _completed = bingoStatus[player].completed;

  const renderCompletedLines = ({
    _board,
    _completed,
  }: TrenderCompletedLinesFunc) => {
    const flatted: (IRenderCell | null)[] = _board.flatMap(
      (val: IBingoCell[] | null[]) => val
    );
    if (!flatted[0]) return flatted;
    _completed.forEach((completedLineIdx: number) => {
      BINGO_ANSWER.indexes[completedLineIdx].forEach((idx) => {
        console.log(idx, 'idx');
        // flatted[idx]!.isCompleted = true;
      });
    });
    return flatted;
  };

  return (
    <BingoBoardContainer>
      {renderCompletedLines({ _board, _completed }).map((cell, idx) => {
        return (
          <BingoCell
            key={idx}
            cell={cell}
            player={player}
            isCompleted={!!cell?.isCompleted}
          />
        );
      })}
    </BingoBoardContainer>
  );
}

const BingoBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 7rem);
  grid-template-rows: repeat(5, 7rem);
  margin: 1rem 3rem;
`;

export default memo(BingBoard);
