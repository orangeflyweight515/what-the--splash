import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas';
const configurestore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configurestore;
