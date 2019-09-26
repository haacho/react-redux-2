import { createAction } from 'redux-actions';
import { AGREGAR_JUGADOR, QUITAR_JUGADOR } from './Plantilla';

export const AGREGAR_SUPLENTE = createAction('AGREGAR_SUPLENTE');
export const QUITAR_SUPLENTE = createAction('QUITAR_SUPLENTE');

export const ADD_SUPLENTE = (jugador) => async (dispatch) => {
    dispatch(AGREGAR_SUPLENTE(jugador));
    dispatch(QUITAR_JUGADOR(jugador));
}

export const REMOVE_SUPLENTE = (jugador) => async (dispatch) => {
    dispatch(QUITAR_SUPLENTE(jugador));
    dispatch(AGREGAR_JUGADOR(jugador));
}