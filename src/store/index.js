import { createStore } from 'redux';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

let store = configureStore();

export default store;