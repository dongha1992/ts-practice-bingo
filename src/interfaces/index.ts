export interface IBingo {
  [k: string]: IBingoPlayer;
  1: IBingoPlayer;
  2: IBingoPlayer;
}

export interface IBingoPlayer {
  isTurn: boolean;
  board: null[][] | IBingoCell[][];
  completed: number[];
}

export interface IBingoCell {
  num: number;
  isSelcected: boolean;
}

export interface IBingoAction {
  type: string;
  payload?: number;
}
