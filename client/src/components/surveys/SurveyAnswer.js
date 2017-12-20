import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { reduxForm, Field } from 'redux-form';

export const mapStoreToProps = state => {
	const surveys = state.surveys;
	const auth = state.auth;
	return { 
		surveys: surveys,
		auth: auth
	}
}

class SurveyAnswer extends Component {
	
	constructor(props){
    super(props);
    this.state = {
			surveys: this.props.surveys,
			auth: this.props.auth						 
		}
  }
	
	componentDidMount(){
		this.props.fetchSurveys();
		this.props.fetchUser();
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({
			surveys: nextProps.surveys,
			auth: nextProps.auth
		});
		console.log( this.state );
	}
	
	renderContent(){
		switch ( this.state.actualSurvey ){
			case null:
				return;			
			case undefined:
				return;
			default:
				return(<div>
								{
								<div>
										<h3>{this.state.actualSurvey.title}</h3>
										<div className="collection">
										{
											this.state.actualSurvey.questions.map( (elem, i) => {
													return (<div className="collection-item">{elem}</div>);
											})
										}
										</div>
									</div>
								}
							</div>
				);
		}	
	}
	
	render(){
		return (
			<div>
				{ this.renderContent() }
			</div>
		)
	}
}

SurveyAnswer = reduxForm({
	form: 'surveyAnswer' 
})(SurveyAnswer) ;

export default connect(mapStoreToProps, actions)(SurveyAnswer);