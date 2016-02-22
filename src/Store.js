import { createStore } from 'redux';
import rootReducer from './Reducers';

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

let store = configureStore();

export default store;