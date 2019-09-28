import { handleActions } from 'redux-actions';
import { GET_POSTS, UPDATE_POST, CREATE_POST, DELETE_POST, SHOW_POST, BLOQUEAR_INTERFACE } from '../../actions/posteos';
import { temas } from '../../../data';

const initialState = {
    posts: [],
    postSeleccionado: {},
    bloquearInterface: false
};

const reducerPosteos = handleActions({
    [GET_POSTS]: (state, action) => {
        return { ...state, posts: action.payload };
    },
    [UPDATE_POST]: (state, action) => {
        return { ...state, tema: action.payload };
    },
    [CREATE_POST]: (state, action) => {
        return { ...state, temas };
    },
    [DELETE_POST]: (state, action) => {
        return {
            ...state,
            posts: state.posts.filter(post => post.id !== action.payload.id)
        };
    },
    [SHOW_POST]: (state, action) => {
        return { ...state, postSeleccionado: action.payload };
    },
    [BLOQUEAR_INTERFACE]: (state, action) => {
        return {
            ...state,
            bloquearInterface: !state.bloquearInterface
        };
    }
}, initialState);

export default reducerPosteos;