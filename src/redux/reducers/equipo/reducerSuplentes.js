import { handleActions } from 'redux-actions';
import { AGREGAR_SUPLENTE, QUITAR_SUPLENTE } from '../../actions/equipo/Suplentes';

const initialState = {
    suplentes: []
}

const reducerSuplentes = handleActions({
    [AGREGAR_SUPLENTE]: (state, action) => {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.payload)
        };
    },
    [QUITAR_SUPLENTE]: (state, action) => {
        return {
            ...state,
            suplentes: state.suplentes.filter(jugador => jugador.id !== action.payload.id)
        };
    }
}, initialState);


export default reducerSuplentes;