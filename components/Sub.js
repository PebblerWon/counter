import React,{PropTypes} from 'react';
const Sub = ({onClick})=>(
		<button onClick={onClick}>减1</button>
	)
Sub.propTypes={
	onClick:PropTypes.func.isRequired
}

export default Sub;