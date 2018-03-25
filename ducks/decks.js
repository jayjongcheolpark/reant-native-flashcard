import { takeEvery, call, put } from 'redux-saga/effects';
import * as API from '../api';
import { genId } from '../utils';

export const GET_DECKS = 'GET_DECKS';
export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS';

export const ADD_DECK = 'ADD_DECK';
export const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS';

export const getDecks = () => ({
  type: GET_DECKS,
});

export const addDeck = (deckTitle, deck) => ({
  type: ADD_DECK,
  deckTitle,
  deck,
});

function* getDecksSaga() {
  const decks = yield call(API.getDecks);
  yield put({
    type: GET_DECKS_SUCCESS,
    decks,
  });
}

function* addDeckSaga({ deckTitle, deck }) {
  const newDeck = yield call(API.createDeck(), genId(), deckTitle);
  yield put({
    type: ADD_DECK_SUCCESS,
    deck: newDeck,
  });
}

export const decksSaga = [takeEvery(GET_DECKS, getDecksSaga), takeEvery(ADD_DECK, addDeckSaga)];

export function decksReducer(state = {}, action) {
  switch (action.type) {
    case GET_DECKS_SUCCESS: {
      return {
        ...state,
        ...action.decks,
      };
    }
    case ADD_DECK_SUCCESS: {
      const { deck } = action;
      return {
        ...state,
        [deck.key]: deck,
      };
    }

    default:
      return state;
  }
}
