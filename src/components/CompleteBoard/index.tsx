import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
// import { BINGO_ANSWER } from 'constants/index';

type TProps = {
  player: string;
};

function CompleteBoard({ player }: TProps) {
  return <></>;
}

const CompleteLine = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;

export default memo(CompleteBoard);
