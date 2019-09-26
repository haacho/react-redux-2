import { handleActions } from 'redux-actions';
import { AGREGAR_SUPLENTE, QUITAR_SUPLENTE } from '../../actions/equipo/Suplentes';

const initialState = {
    suplentes: []
}

const reducerSuplentes = handleActions({
    [AGREGAR_SUPLENTE]: (state, action) => {
        console.log("dedo2");
        return {
            ...state,
            suplentes: state.suplentes.concat(action.payload)
        };
    },
    [QUITAR_SUPLENTE]: (state, action) => {
        console.log("dedo3");
        return {
            ...state,
            suplentes: state.suplentes.filter(jugador => jugador.id !== action.payload.id)
        };
    }
}, initialState);


export default reducerSuplentes;