import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

export const mapStoreToProps = state => {
	const surveys = state.surveys;
	const auth = state.auth;
	return { 
		surveys: surveys,
		auth: auth
	}
}
	
class Dashboard extends Component {
	
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
		})
	}
	
	renderContent(){
		switch ( this.state.surveys ){
			case null:
				return;
			default:
				return(<div className="collection">
								{this.state.surveys.map( (elem, i) => {
										if( this.state.auth.isAdmin === true ){
											return (<Link to={{
															pathname: "/surveys/panel/",
															surveyId: elem._id
														}} className="collection-item" key={i}>{elem.title}</Link>);
										}
										else{
											return (<Link to={{
															pathname: "/surveys/answer/",
															surveyId: elem._id
														}} className="collection-item" key={i}>{elem.title}</Link>);
										}
									})
								}
							</div>);
			}	
	}
	
	adminContent(){
		if( this.state.auth != null && this.state.auth.isAdmin ){
			return (
				<Link className="btn-floating btn-large red" to="/surveys/new">
					<i className="material-icons">add</i>
				</Link>
			)
		}
	}
	
	render(){
		return (
			<div>
				<h2>Dashboard</h2>
				{ this.renderContent() }
				<div className="fixed-action-btn">
					{ this.adminContent() }
				</div>
			</div>
		)
	}
}

export default connect(mapStoreToProps, actions)(Dashboard);