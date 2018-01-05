import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class DensityChart extends Component {
	constructor(){
		super();
		this.state = {
			val0_1: 0,
			val1_2: 0,
			val2_3: 0,
			val3_4: 0,
			val4_5: 0,
			val5_6: 0,
			val6_7: 0,
			val7_8: 0,
			val8_9: 0,
			val9_10: 0,
		}
	}
	componentWillReceiveProps( props ){
		props.actualSurvey.map( (elem) => {
			if( elem.rating > 9){ 
				this.setState({ val9_10: this.state.val9_10 + 1 }) 
			}
			else if( elem.rating > 8){ 
				this.setState({ val8_9: this.state.val8_9 + 1 }) 
			}
			else if( elem.rating > 7){ 
				this.setState({ val7_8: this.state.val7_8 + 1 }) 
			}
			else if( elem.rating > 6){ 
				this.setState({ val6_7: this.state.val6_7 + 1 }) 
			}
			else if( elem.rating > 5){ 
				this.setState({ val5_6: this.state.val5_6 + 1 }) 
			}
			else if( elem.rating > 4){ 
				this.setState({ val4_5: this.state.val4_5 + 1 }) 
			}
			else if( elem.rating > 3){ 
				this.setState({ val3_4: this.state.val3_4 + 1 }) 
			}
			else if( elem.rating > 2){ 
				this.setState({ val2_3: this.state.val2_3 + 1 }) 
			}
			else if( elem.rating > 1){ 
				this.setState({ val1_2: this.state.val1_2 + 1 }) 
			}
			else { 
				this.setState({ val0_1: this.state.val0_1 + 1 }) 
			}	
		})
	}
	




	render(){
		return(
			<AreaChart width={600} height={400} data={
					[
						{ rating: 0, uv: this.state.val0_1 / 2 || 0 },
						{ rating: 0.5, uv: this.state.val0_1 },
						{ rating: 1.5, uv: this.state.val1_2 },
						{ rating: 2.5, uv: this.state.val2_3 },
						{ rating: 3.5, uv: this.state.val3_4 },
						{ rating: 4.5, uv: this.state.val4_5 },
						{ rating: 5.5, uv: this.state.val5_6 },
						{ rating: 6.5, uv: this.state.val6_7 },
						{ rating: 7.5, uv: this.state.val7_8 },
						{ rating: 8.5, uv: this.state.val8_9 },
						{ rating: 9.5, uv: this.state.val9_10 },
						{ rating: 10, uv: this.state.val9_10 / 2 || 0 }
					]
				}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="rating" type="number" domain={[0,10]} interval={0} />
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
		)
	}
}

export default DensityChart;