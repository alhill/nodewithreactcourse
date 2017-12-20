// SurveyField contains logic to render a single label and input
import React from 'react';

const flexStyle = {
	display: 'flex'
}
	
export default ({ input, label, idx, isQuestion, deleteFunc }) => {
	const boton = isQuestion ? <button type="button" className="btn-floating red" onClick={ deleteFunc(idx) }>
					<i className="material-icons">delete</i>
				</button> : "";
	
	return(
		<div>
			<label>{ label }</label>
			<div style={flexStyle}>
				<input {...input} />
				{ boton }
			</div>
		</div>
	)
}
