import {
  IBingo,
  IBingoCell,
  IBingoPlayer,
  IBingoAction,
} from 'interfaces/index';
import { shuffleArray, convertTo2d } from 'utils/index';
import { BINGO_ANSWER } from 'constants/index';

const BINGO_SELECT_NUMBER = 'BINGO_SELECT_NUMBER' as const;
const BINGO_START_GAME = 'BINGO_START_GAME' as const;
const BINGO_END_GAME = 'BINGO_END_GAME' as const;

export const selectNumber = (number: number) => {
  return {
    type: BINGO_SELECT_NUMBER,
    payload: number,
  };
};

export const startGame = () => {
  return {
    type: BINGO_START_GAME,
  };
};

export const endGame = () => {
  return {
    type: BINGO_END_GAME,
  };
};

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

const getNewbingoPlayer = (
  player: IBingoPlayer,
  newNumber: number
): IBingoPlayer => {
  const isTurn = !player.isTurn;
  const board = player.board.slice();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[i][j]!.num === newNumber) {
        board[i][j]!.isSelected = true;
      }
    }
  }
  const completed = [...player.completed];
  const flatted = board.flatMap((val: IBingoCell[] | null[]) => val);

  for (let i = 0; i < BINGO_ANSWER.indexes.length; i++) {
    if (completed.includes(i)) continue;
    const cells = BINGO_ANSWER.indexes[i].map((index) => flatted[index]);
  }

  return { isTurn, board, completed };
};

const INITIAL_STATE: IBingo = initialStateGenerator();

export const bingoReducer = (
  state: IBingo = INITIAL_STATE,
  action: IBingoAction
) => {
  switch (action.type) {
    case BINGO_SELECT_NUMBER:
      const newBingoState = { ...state };
      for (let i = 1; i <= 2; i++) {
        newBingoState[i] = getNewbingoPlayer(
          state[i],
          action.payload as number
        );
      }
      return newBingoState;

    case BINGO_START_GAME:
      const bingoNumbers = Array.from(new Array(25), (_, i: number) => i + 1);
      const newState: IBingo = initialStateGenerator();

      for (let player = 1; player <= 2; player++) {
        const shuffled = shuffleArray(bingoNumbers);
        const bingoCells = shuffled.map((num: number) => {
          return { num, isSelected: false };
        });
        const converted2dArray = convertTo2d(bingoCells, 5);
        newState[player].board = converted2dArray;
        newState[player].completed = [];
        newState[player].isTurn = player === 1;
      }

      return newState as IBingo;

    case BINGO_END_GAME:
      return INITIAL_STATE;

    default:
      return state;
  }
};
