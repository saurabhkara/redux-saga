// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './rootReducer';
import productSaga from './productSaga';

// export const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore(    
    { 
        reducer: rootReducer,
        middleware: ()=>[sagaMiddleware]
    
    }
)

sagaMiddleware.run(productSaga);