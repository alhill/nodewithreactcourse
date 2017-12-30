import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

export const mapStoreToProps = state => {
	const actual = state.actual;
	return { actual }
}

class SurveyPanel extends Component{
	constructor(){
		super();
		this.state = {
			surveyId: "",
			actualSurvey: {
				title: "",
				description: "",
				questions: [],
				answers: [],
			},
			avg: ""
		}
	}
	
	componentDidMount(){
		if (this.props.location.surveyId) { 
			sessionStorage.setItem('surveyId', this.props.location.surveyId);
			this.setState({ surveyId: this.props.location.surveyId }) 
		}
		else{ this.setState({ surveyId: sessionStorage.getItem('surveyId')}) }

		this.props.fetchSurveyAdmin( sessionStorage.getItem('surveyId') );
	}
	
	componentWillReceiveProps(props){
		this.setState({ actualSurvey: props.actual });
		if( props.actual.answers.length !== 0 ){
			const sum = props.actual.answers.reduce( (a, b) => {
				return { rating: parseFloat(a.rating) + parseFloat(b.rating) }
			});
			const avg = sum.rating / (props.actual.answers.length);
			this.setState({ avg })
		}
		else{ 
			const avg = "Sin datos" 
			this.setState({ avg })
		}
		
	}
	
	render(){
		
		const data = this.state.actualSurvey.answers;

		const columns = [{
			Header: 'Name',
			accessor: '_user.name'
		}, {
			Header: 'Media',
			accessor: 'rating'
		}, {
			id: 'date',
			Header: 'Fecha de la respuesta',
			accessor: evt => {
				return (new Date(evt.date).toLocaleString('es-ES', {hour12: false}))
			}
		}]
		
		return(
			<div>
				<h2>{ this.state.actualSurvey.title }</h2>
				<hr />
				<span>Encuesta respondida { this.state.actualSurvey.answers.length } ve
					{ this.state.actualSurvey.answers.length === 1 ?  "z" : "ces" }
				</span>
				<span>Nota media: { this.state.avg }</span>
				<ReactTable 
		      data={data} 
			    columns={columns} 
				  defaultSorted={[
            {
              id: "rating",
              desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"/>
			</div>
		);
	}
};

export default connect(mapStoreToProps, actions)(SurveyPanel);