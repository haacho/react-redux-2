import { handleActions } from 'redux-actions';
import { AGREGAR_TITULAR, QUITAR_TITULAR } from '../../actions/equipo/Titulares';

const initialState = {
    titulares: []
}

const reducerTitulares = handleActions({
    [AGREGAR_TITULAR]: (state, action) => {
        return {
            ...state,
            titulares: state.titulares.concat(action.payload)               
        };
    },
    [QUITAR_TITULAR]: (state, action) => {
        return {
            ...state,
            titulares: state.titulares.filter(jugador => jugador.id !== action.payload.id)               
        };
    }
}, initialState);

export default reducerTitulares;