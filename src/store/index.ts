import { combineReducers } from 'redux';
import { bingoReducer } from 'store/bingo';

const rootReducer = combineReducers({ bingoReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
