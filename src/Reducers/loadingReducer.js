import { Images } from '../Constants/Index';

const loadingReducers = (state = true, action) => {
    switch (action.type) {
        case Images.Load:
            return true;
        case Images.Load_success:
            return false;
        case Images.Load_Fail:
            return false;

        default:
            return state;
    }
};

export default loadingReducers;
