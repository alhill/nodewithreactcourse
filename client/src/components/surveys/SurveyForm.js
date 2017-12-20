//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import SurveyField from './SurveyField';
import * as actions from '../../actions';

class SurveyForm extends Component{
	constructor() {
		super();
		this.state = {
			title: "",
			description: "",
			questions: ['']
		}
	}
	handleAddQuestion = () => {
		this.setState({
			questions: this.state.questions.concat([''])
		});
	}	
	handleDeleteQuestion = (idx) => () => {
    this.setState({
      questions: this.state.questions.filter((s, sidx) => idx !== sidx)
    });
  }
	
	renderFields(){
		return(
			<div>
				<Field type="text" name="title" label="Survey Title" component={SurveyField} />
				<Field type="text" name="description" label="Survey Description" component={SurveyField} />
				{
					this.state.questions.map( (elem, i) => {
						const questionName = `question${i + 1}`;
						const questionLabel = `Question ${i + 1}`;
						return ( <Field type="text" name={ questionName } label={ questionLabel } component={SurveyField} key={i} isQuestion={ true } idx={i} deleteFunc={ this.handleDeleteQuestion } /> );
					})
				}
				
			</div>
		)
	}

	render() {
		return (
			<div>
			<br />
				<form onSubmit={ this.props.handleSubmit( values => this.props.submitSurvey( values ) ) }>
					{this.renderFields()}
					<button className="waves-effect waves-light btn blue" type="button" onClick={ this.handleAddQuestion }>Add field</button>
					<span>&nbsp;&nbsp;&nbsp;</span>
					<button className="waves-effect waves-light btn green" type="submit">Submit</button>
				</form>
			</div>
		);
	}
};

SurveyForm = reduxForm({
	form: 'surveyForm'
})(SurveyForm);

export default connect(null, actions)(SurveyForm);

