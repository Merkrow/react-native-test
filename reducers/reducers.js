import { combineReducers } from 'redux';
import { feed } from './feed';
import { login } from './login';

export const rootReducer = combineReducers({
  login,
  feed,
});
