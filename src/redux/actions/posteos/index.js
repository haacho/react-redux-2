import { createAction } from 'redux-actions';

export const GET_POSTS = createAction('GET_POSTS');
export const UPDATE_POST = createAction('UPDATE_POST');
export const CREATE_POST = createAction('CREATE_POST');
export const DELETE_POST = createAction('DELETE_POST');
export const SHOW_POST = createAction('SHOW_POST');
export const BLOQUEAR_INTERFACE = createAction('BLOQUEAR_INTERFACE');


export const OBTENER_POSTS = (jugador) => async (dispatch) => {

    dispatch(BLOQUEAR_INTERFACE());
  
    
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => json);
  
      console.log(posts);

      dispatch(GET_POSTS(posts));
      dispatch(BLOQUEAR_INTERFACE());
  }

