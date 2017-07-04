import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/reducers';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  feed: [],
  login: null,
}

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialState);

export default store;
