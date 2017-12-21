import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async (dispatch) => { //Pasamos 'dispatch' como argumento de la función de retorno
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data }); //Usamos dispatch cuando la promesa que crea axios.get se ha completado
}

export const fetchSurveys = () => async (dispatch) => {
	const res = await axios.get('/api/list_surveys');
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
}

export const fetchAll = () => async (dispatch) => {
	const userData = await axios.get('/api/current_user');
	const surveysData = await axios.get('/api/list_surveys');
	dispatch({ type: FETCH_SURVEYS, payload: { 
			user: userData.data, 
			surveys: surveysData.data
		}
	});
}

export const submitSurvey = values => async (dispatch) => {
	await axios.post('/api/save_survey', values);
};


