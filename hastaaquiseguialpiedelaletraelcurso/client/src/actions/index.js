import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => { //Pasamos 'dispatch' como argumento de la función de retorno
	const res = await axios.get('/api/current_user')
	dispatch({ type: FETCH_USER, payload: res.data }); //Usamos dispatch cuando la promesa que crea axios.get se ha completado
}
