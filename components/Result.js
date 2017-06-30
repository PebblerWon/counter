import React,{PropTypes} from 'react';

const Result = ({result})=>(
	<div>{result}</div>
	)
Result.propTypes={
	result:PropTypes.number.isRequired
}

export default Result;