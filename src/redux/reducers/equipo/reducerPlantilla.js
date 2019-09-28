import { handleActions } from 'redux-actions';
import { OBTENER_JUGADORES, AGREGAR_JUGADOR, QUITAR_JUGADOR } from '../../actions/equipo/Plantilla';
import { jugadores } from '../../../data';

const initialState = {
    plantilla: []
}

const reducerPlantilla = handleActions({
    [OBTENER_JUGADORES]: (state, action) => {
        return {
            ...state,
            plantilla: jugadores
        };
    },
    [AGREGAR_JUGADOR]: (state, action) => {
        return {
            ...state,
            plantilla: state.plantilla.concat(action.payload),
        };
    },
    [QUITAR_JUGADOR]: (state, action) => {
        return {
            ...state,
            plantilla: state.plantilla.filter(jugador => jugador.id !== action.payload.id)
        };
    }
}, initialState);

export default reducerPlantilla;