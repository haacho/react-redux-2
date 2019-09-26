import { createAction } from 'redux-actions';
import { AGREGAR_JUGADOR, QUITAR_JUGADOR } from './Plantilla';


export const AGREGAR_TITULAR = createAction('AGREGAR_TITULAR');
export const QUITAR_TITULAR = createAction('QUITAR_TITULAR');
export const BLOQUEAR_INTERFACE = createAction('BLOQUEAR_INTERFACE');




export const ADD_TITULAR = (jugador) => async (dispatch) => {

  dispatch(BLOQUEAR_INTERFACE());
  const dedo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => json);

    console.log(dedo.id);

    dispatch(AGREGAR_TITULAR(jugador));
    dispatch(QUITAR_JUGADOR(jugador));
    dispatch(BLOQUEAR_INTERFACE());
}

export const REMOVE_TITULAR = (jugador) => async (dispatch) => {
    dispatch(QUITAR_TITULAR(jugador));
    dispatch(AGREGAR_JUGADOR(jugador));
}