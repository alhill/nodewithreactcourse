import React, { Component } from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

class RadarGlobal extends Component {
	constructor(){
		super();
		this.state = {
			graphArr: []
		}
	}
	
	componentWillReceiveProps( props ){
		
		const graphArr = [];
		props.surveys.map( (survey, i) => {	
			const ratingavg = Array.from(survey.answers, item => item.rating).reduce( (a, b) => (a + b), 0 )/(survey.answers.length || 1);
			const name = survey.title ;		
			graphArr.push({ name: name, rating: ratingavg });
		});
		this.setState({ graphArr });
	}

	
	render(){
		console.log( this.state.graphArr );
		return(
			<RadarChart cx={300} cy={250} outerRadius={100} width={600} height={500} data={this.state.graphArr}>
          <Radar name="Mike" dataKey="rating" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
				{/*<Legend />*/}
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 10]}/>
      </RadarChart>
		)
	}
}

export default RadarGlobal;