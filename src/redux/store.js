import { createStore } from 'redux';
import cakeReducer from './cake/cake.reducer';

const store = createStore(
  cakeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;