import React, { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function BingoCell() {
  return <BingoBoardContainer></BingoBoardContainer>;
}

const BingoBoardContainer = styled.div`

`;

export default memo(BingoCell);
