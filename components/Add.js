import React ,{PropTypes}from 'react';
const Add = ({onClick})=>(
		<button onClick={onClick}>加1</button>
	)
Add.propTypes={
	onClick:PropTypes.func.isRequired
}

export default Add;