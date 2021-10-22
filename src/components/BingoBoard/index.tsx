import React, { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function BingBoard() {
  return <BingoBoardContainer></BingoBoardContainer>;
}

const BingoBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 7rem);
  grid-template-rows: repeat(5, 7rem);
  margin: 1rem 3rem;
`;

export default memo(BingBoard);
