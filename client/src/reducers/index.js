import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; //the 'as' thing renames the module
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';
import surveyInfoReducer from './surveyInfoReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	surveys: surveyReducer,
	actual: surveyInfoReducer
});