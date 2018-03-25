import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { decksSaga, decksReducer } from './decks';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const reducer = combineReducers({
  decks: decksReducer,
});

function* rootSaga() {
  yield all([...decksSaga]);
}

const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
