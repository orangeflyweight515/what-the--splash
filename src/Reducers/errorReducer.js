import { Images } from '../Constants/Index';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case Images.Load_Fail:
            return action.error;
        case Images.Load:
            return null;
        case Images.Load_success:
            return null;

        default:
            return state;
    }
};

export default errorReducer;
