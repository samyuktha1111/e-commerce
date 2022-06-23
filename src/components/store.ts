import { createStore, applyMiddleware } from 'redux';
import  CartReducer  from './CartReducer';
import createSagaMiddleware from '@redux-saga/core';
import { watchUser } from './Cart_saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(CartReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchUser);
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;