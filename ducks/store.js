import { createStore, applyMiddleware, combineReducers } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

function sample(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const reducer = combineReducers({
  sample,
});

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);

export default configureStore;
