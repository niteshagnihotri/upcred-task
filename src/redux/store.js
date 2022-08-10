import {configureStore} from '@reduxjs/toolkit';
import proSaga from './proSaga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer : rootReducer,
    middleware: ()=>[sagaMiddleware]
});

sagaMiddleware.run(proSaga);

export default store;