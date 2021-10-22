export const selectNumber = () => {};
export const startGame = () => {};
export const endGame = () => {};

const initialStateGenerator = () => {};
const getNewbingoPlayer = () => {};
const INITIAL_STATE = initialStateGenerator();

const BINGO_SELECT_NUMBER = 'BINGO_SELECT_NUMBER' as const;
const BINGO_START_GAME = 'BINGO_START_GAME' as const;
const BINGO_END_GAME = 'BINGO_END_GAME' as const;

export const bingoReducer = (state, action) => {
  switch (action.type) {
    case BINGO_SELECT_NUMBER:
    case BINGO_START_GAME:
    case BINGO_END_GAME:
    default:
      return state;
  }
};
