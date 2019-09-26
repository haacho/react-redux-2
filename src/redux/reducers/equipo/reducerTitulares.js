import { handleActions } from 'redux-actions';
import { AGREGAR_TITULAR, QUITAR_TITULAR, BLOQUEAR_INTERFACE } from '../../actions/equipo/Titulares';

const initialState = {
    titulares: [],
    bloquearInterface: false
}

const reducerTitulares = handleActions({
    [AGREGAR_TITULAR]: (state, action) => {
        console.log("dedo2");
        return {
            ...state,
            titulares: state.titulares.concat(action.payload)               
        };
    },
    [QUITAR_TITULAR]: (state, action) => {
        console.log("dedo3");
        return {
            ...state,
            titulares: state.titulares.filter(jugador => jugador.id !== action.payload.id)               
        };
    },
    [BLOQUEAR_INTERFACE]: (state, action) => {
        console.log("dedo3");
        return {
            ...state,
            bloquearInterface: !state.bloquearInterface            
        };
    }
}, initialState);

export default reducerTitulares;