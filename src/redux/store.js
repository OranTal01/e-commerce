import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware, thunk)));
export const persistor = persistStore(store);

export default { store, persistor };