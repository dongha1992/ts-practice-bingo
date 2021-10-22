import React, { memo } from 'react';
import styled from 'styled-components';
import { IBingoCell, IBingo } from 'interfaces';
import { selectNumber } from 'store/bingo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { theme } from 'styles/theme';

type TProps = {
  cell: IBingoCell | null;
  player: string;
  isCompleted: boolean;
};

function BingoCell({ cell, player, isCompleted }: TProps) {
  const bingoStatus: IBingo = useSelector(
    (state: RootState) => state.bingoReducer
  );
  const dispatch = useDispatch();

  const cellClickHandler = () => {};

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
