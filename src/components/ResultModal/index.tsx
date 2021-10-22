import React, { memo } from 'react';
import styled from 'styled-components';

interface IResultModal {
  winner: number;
  clickConfirmHandler: () => void;
}

function ResultModal({ winner, clickConfirmHandler }: IResultModal) {
  return <div></div>;
}

export default ResultModal;
