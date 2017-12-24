import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { reduxForm, Field } from 'redux-form';

class SurveyAnswer extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
			answer: {}
		};

    this.handleChange = this.handleChange.bind(this);
  }
	handleChange(event) {
		const newState = this.state;
		newState.answer[event.target.name] = event.target.value;
    this.setState(newState);
  }
	
	renderContent(){
		if (this.props.location.surveyId) { sessionStorage.setItem('surveyId', this.props.location.surveyId) }
		
		const surveys = JSON.parse(sessionStorage.getItem('fetchedData')).surveys;
		const user = JSON.parse(sessionStorage.getItem('fetchedData')).user;
		const surveyId = this.props.location.surveyId ? this.props.location.surveyId : sessionStorage.getItem('surveyId');
		
		const survey = surveys.filter( elem => {
			if( elem._id === surveyId ){ return elem }
		})
		
		return(
			<div>
				<h3>{survey[0].title}</h3>
				<p>{survey[0].description}</p>
				<div className="collection center-align">
					<form onSubmit={ () => actions.submitAnswer(this.state.answer, user, surveyId, this.props.history) } onChange={ this.handleChange }>
						{
							survey[0].questions.map( (elem, i) => {
								return (
									<div key={i}>
										<div className="collection-item">
											<p>{ elem }</p>
											<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
												{
													[0,1,2,3,4,5,6,7,8,9,10].map( j => {
														return(
															<div key={"radioGroup_" + j}>
																<input required type="radio" name={"a" + i} id={"val" + i + "_" + j} value={j} />
																<label htmlFor={"val" + i + "_" + j}>{j}</label>
															</div>
														)
													})
												}
											</div>
										</div>
									</div>
								)
							})
						}
						<br />
						<button className="btn waves-effect waves-light" type="submit" name="action">Submit
							<i className="material-icons right">send</i>
						</button>
						<br />
					</form>
				</div>
			</div>
		)
	}
	
	render(){
		return (
			<div>
				{ this.renderContent() }
			</div>
		)
	}
}

export default connect(null, actions)(withRouter(SurveyAnswer));