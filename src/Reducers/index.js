import loadingReducers from './loadingReducer';
import imageReducers from './imagesReducer';
import errorReducer from './errorReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducers,
    images: imageReducers,
    error: errorReducer,
});

export default rootReducer;
