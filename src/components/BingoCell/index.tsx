import React, { memo } from 'react';
import styled from 'styled-components';
import { IBingocell, IBingo } from 'interfaces';
import { selectNumber } from 'store/bingo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

type TBingoCell = {
  cell: IBingocell | null;
};

function BingoCell() {
  const bingoStatus: Ibingo = useSelector(
    (state: RootState) => state.bingoReducer
  );
  const dispatch = useDispatch();

  return <BingoCellButton></BingoCellButton>;
}

const BingoCellButton = styled.button<{
  isSelected: boolean;
  isCompleted: boolean;
}>`
  border: 1px solid;
`;

export default memo(BingoCell);
