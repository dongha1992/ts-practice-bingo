import {
  IBingo,
  // IBingocell,
  // IBingoplayer,
  IBingoAction,
} from 'interfaces/index';

export const selectNumber = () => {};
export const startGame = () => {};
export const endGame = () => {};

const initialStateGenerator = (): IBingo => {
  return {
    1: {
      isTurn: false,
      board: Array.from(new Array(5), () => new Array(5).fill(null)),
      completed: [],
    },
    2: {
      isTurn: false,
      board: Array.from(new Array(5), () => new Array(5).fill(null)),
      completed: [],
    },
  };
};

const getNewbingoPlayer = () => {};

const INITIAL_STATE: IBingo = initialStateGenerator();

const BINGO_SELECT_NUMBER = 'BINGO_SELECT_NUMBER' as const;
const BINGO_START_GAME = 'BINGO_START_GAME' as const;
const BINGO_END_GAME = 'BINGO_END_GAME' as const;

export const bingoReducer = (
  state: IBingo = INITIAL_STATE,
  action: IBingoAction
) => {
  switch (action.type) {
    case BINGO_SELECT_NUMBER:
    case BINGO_START_GAME:
    case BINGO_END_GAME:
    default:
      return state;
  }
};
