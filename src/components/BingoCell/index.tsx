import React, { memo } from 'react';
import styled from 'styled-components';
import { IBingoCell, IBingo } from 'interfaces';
import { selectNumber } from 'store/bingo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

type TProps = {
  cell: IBingoCell | null;
  player: string;
  isCompleted: boolean;
};

function BingoCell({ cell, player, isCompleted }: TProps) {
  const bingoStatus = useSelector(
    (state: RootState) => state.bingoReducer as IBingo
  );

  const dispatch = useDispatch();

  const cellClickHandler = () => {
    if (!cell || cell.isSelected) return;
    if (!bingoStatus[player].isTurn) return alert('잘못된 차례입니다.');
    dispatch(selectNumber(cell.num));
  };

  return (
    <BingoCellButton
      onClick={cellClickHandler}
      isSelected={cell ? cell.isSelected : false}
      isCompleted={isCompleted}>
      {cell ? cell.num : ''}
    </BingoCellButton>
  );
}

const BingoCellButton = styled.button<{
  isSelected: boolean;
  isCompleted: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.gray};
  background-color: ${({ theme, isSelected, isCompleted }) => {
    if (isCompleted) {
      return theme.primary_light;
    }
    return isSelected ? theme.gray : 'white';
  }};
`;

export default memo(BingoCell);
