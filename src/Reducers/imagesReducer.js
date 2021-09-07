import { Images } from '../Constants/Index';

const imageReducers = (state = [], action) => {
    if (action.type === Images.Load_success) {
        return [...state, ...action.images];
    }
    return state;
};

export default imageReducers;
