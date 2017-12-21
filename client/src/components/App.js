import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; //Import everything from actions folder and asign them to the 'actions' objects

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import SurveyAnswer from './surveys/SurveyAnswer';


class App extends Component {
	componentDidMount(){
		this.props.fetchUser();
	}
	
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<div className="container">
							<Route exact path="/" component={Landing} />
							<Route exact path="/surveys" component={Dashboard} />
							<Route path="/surveys/new" component={SurveyNew} />
							<Route path="/surveys/answer" component={SurveyAnswer} />
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
};

export default connect(null, actions)(App);