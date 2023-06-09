import { createStore } from 'redux';

import reducer from './reducer';

const initialState = {
   todos: []
};

const store = createStore(reducer, initialState);
export default store;