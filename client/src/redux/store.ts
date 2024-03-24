import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import creaeSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import rootSaga from './root-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = creaeSagaMiddleware();
const middlewares: any[] = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger); 
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };