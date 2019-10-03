import { handleActions } from 'redux-actions';
import { OBTENER_COLORES, UPDATE_COLOR, UPDATE_TITULO } from '../../actions/interface';
import { temas } from '../../../data';

const initialState = {
    temas: [],
    tema: "",
    titulo:""
};

const reducerInterface = handleActions({
    [UPDATE_TITULO]: (state, action) => {
        return { ...state, titulo: action.payload };
    },
    [UPDATE_COLOR]: (state, action) => {
        return { ...state, tema: action.payload };
    },
    [OBTENER_COLORES]: (state, action) => {
        return { ...state, temas };
    }
}, initialState);

export default reducerInterface;