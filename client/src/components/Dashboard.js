import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

export const mapStoreToProps = state => {
	const fetchedData = state.surveys;
	return { 
		fetchedData: fetchedData
	}
}
	
class Dashboard extends Component {
	
	constructor(props){
    super(props);
    this.state = {
			surveys: [{}],
			user: {
				isAdmin: false
			}
		}
  }
	
	componentDidMount(){

		const fetchedData = sessionStorage.getItem('fetchedData');

		if( !fetchedData || fetchedData === 'null' ){ this.props.fetchAll(); } //Llamar al back solo una vez por sesión
		else{
			this.props.fetchAll();
			//console.log( JSON.parse(sessionStorage.getItem('fetchedData')) );
			this.setState({
				surveys: JSON.parse(sessionStorage.getItem('fetchedData')).surveys,
				user: JSON.parse(sessionStorage.getItem('fetchedData')).user
			})
		}
	}
	
	componentWillReceiveProps(nextProps){	
		//console.log( nextProps );
		sessionStorage.setItem('fetchedData', JSON.stringify(nextProps.fetchedData));
		this.setState({
			surveys: nextProps.fetchedData.surveys,
			user: nextProps.fetchedData.user
		})
	}
	
	renderContent(){

		switch ( this.state.surveys ){
			case null:
				return;
			default:
				return(<div className="collection">
								{this.state.surveys.map( (elem, i) => {
										if( this.state.user.isAdmin === true ){
											return (<Link to={{
																			pathname: "/surveys/panel/",
																			surveyId: elem._id,
																			user: this.state.user,
																			surveys: this.state.surveys
																		}} 
																		className="collection-item" key={i}>{elem.title}
															</Link>);
										}
										else{
											return (<Link to={{
																			pathname: "/surveys/answer/",
																			surveyId: elem._id,
																			user: this.state.user,
																			surveys: this.state.surveys
																		}} 
																		className="collection-item" key={i}>{elem.title}
															</Link>);
										}
									})
								}
							</div>);
			}	
	}
	
	adminContent(){
		if( this.state.user != null && this.state.user.isAdmin ){
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