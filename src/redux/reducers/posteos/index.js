import { handleActions } from 'redux-actions';
import { GET_POSTS, UPDATE_POST, CREATE_POST, DELETE_POST, BLOQUEAR_INTERFACE } from '../../actions/posteos';

const initialState = {
    posts: [],
    bloquearInterface: false
};

const reducerPosteos = handleActions({
    [GET_POSTS]: (state, action) => {
        return { ...state, posts: action.payload };
    },
    [UPDATE_POST]: (state, action) => {


        const initialValue = [];

        const newCustomers = state.posts.reduce((posteos, posteo) => {
            if (posteo.id === action.payload.id) {
                return [...posteos, action.payload];
            } else {
                return [...posteos, posteo];
            }
        }, initialValue);


        return { ...state, posts: newCustomers };
    },
    [CREATE_POST]: (state, action) => {

        const newPost = { ...action.payload, id: state.posts.length + 1 };

        return {
            ...state,
            posts: state.posts.concat(newPost),
        };
    },
    [DELETE_POST]: (state, action) => {
        return {
            ...state,
            posts: state.posts.filter(post => post.id !== action.payload.id)
        };
    },
    [BLOQUEAR_INTERFACE]: (state, action) => {
        return {
            ...state,
            bloquearInterface: !state.bloquearInterface
        };
    }
}, initialState);

export default reducerPosteos;