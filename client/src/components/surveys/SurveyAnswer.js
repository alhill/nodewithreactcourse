import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { reduxForm, Field } from 'redux-form';

class SurveyAnswer extends Component {
	
	renderContent(){
		if (this.props.location.surveyId) { localStorage.setItem('surveyId', this.props.location.surveyId) }
		
		const surveys = this.props.location.surveys ? this.props.location.surveys : JSON.parse(localStorage.getItem('fetchedData')).surveys;
		const user = this.props.location.user ? this.props.location.user : JSON.parse(localStorage.getItem('fetchedData')).user;
		const surveyId = this.props.location.surveyId ? this.props.location.surveyId : localStorage.getItem('surveyId');
		
		const survey = surveys.filter( elem => {
			if( elem._id === surveyId ){ return elem }
		})
		
		console.log( localStorage );
		
		return(
			<div>
				<h3>{survey[0].title}</h3>
				<p>{survey[0].description}</p>
				<div className="collection">
					{
						survey[0].questions.map( (elem, i) => {
							return (
								<div key={i}>
									<div className="collection-item">
										<p>{ elem }</p>
										<div style={{ display: 'flex' }}>
											<div className="radioWrapper">
												<input type="radio" name="val0" value="0" />
												<label htmlFor="contactChoice1">0</label>
											</div>&nbsp;
											<div className="radioWrapper">
												<input type="radio" name="val1" value="1" />
												<label htmlFor="contactChoice2">1</label>
											</div>&nbsp;
											<div className="radioWrapper">
												<input type="radio" name="val2" value="2" />
												<label htmlFor="contactChoice3">2</label>
											</div>&nbsp;										
											<div className="radioWrapper">
												<input type="radio" name="val3" value="3" />
												<label htmlFor="contactChoice3">3</label>
											</div>&nbsp;										
											<div className="radioWrapper">
												<input type="radio" name="val4" value="4" />
												<label htmlFor="contactChoice3">4</label>	
											</div>&nbsp;									
											<div className="radioWrapper">
												<input type="radio" name="val5" value="5" />
												<label htmlFor="contactChoice3">5</label>
											</div>&nbsp;										
											<div className="radioWrapper">
												<input type="radio" name="val6" value="6" />
												<label htmlFor="contactChoice3">6</label>
											</div>&nbsp;										
											<div className="radioWrapper">
												<input type="radio" name="val7" value="7" />
												<label htmlFor="contactChoice3">7</label>
											</div>&nbsp;										
											<div className="radioWrapper">
												<input type="radio" name="val8" value="8" />
												<label htmlFor="contactChoice3">8</label>
											</div>&nbsp;										
											<div className="radioWrapper">
												<input type="radio" name="val9" value="9" />
												<label htmlFor="contactChoice3">9</label>
											</div>&nbsp;										
											<div className="radioWrapper">
												<input type="radio" name="val0" value="10" />
												<label htmlFor="contactChoice3">10</label>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}
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

SurveyAnswer = reduxForm({
	form: 'surveyAnswer' 
})(SurveyAnswer) ;

export default connect(null, actions)(SurveyAnswer);