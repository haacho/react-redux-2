import { handleActions } from 'redux-actions';
import { OBTENER_JUGADORES, AGREGAR_JUGADOR, QUITAR_JUGADOR } from '../../actions/equipo/Plantilla';

const jugadores = [
    { id: 1, nombre: "Hacho" },
    { id: 2, nombre: "Messi" },
    { id: 3, nombre: "Pocho" },
    { id: 4, nombre: "Fideo" },
    { id: 5, nombre: "Laica" },
    { id: 6, nombre: "Florencia" },
    { id: 7, nombre: "Bianchi" },
    { id: 8, nombre: "Tevez" },
    { id: 9, nombre: "Maradona" },
]

const initialState = {
    plantilla: []
}

const reducerPlantilla = handleActions({
    [OBTENER_JUGADORES]: (state, action) => {
        console.log("dedo1");
        return {
            ...state,
            plantilla: jugadores
        };
    },
    [AGREGAR_JUGADOR]: (state, action) => {
        console.log("dedo2");
        return {
            ...state,
            plantilla: state.plantilla.concat(action.payload),
        };
    },
    [QUITAR_JUGADOR]: (state, action) => {
        console.log("dedo3");
        return {
            ...state,
            plantilla: state.plantilla.filter(jugador => jugador.id !== action.payload.id)
        };
    }
}, initialState);

export default reducerPlantilla;