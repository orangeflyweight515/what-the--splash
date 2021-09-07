import { Images } from '../Constants/Index';

const loadImages = () => ({
    type: Images.Load,
});

const setImages = () => ({
    type: Images.Load_success,
    images,
});

const setError = () => ({
    type: Images.Load_Fail,
    error,
});

export { loadImages, setImages, setError };
