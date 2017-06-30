import {connect} from 'react-redux'
import Result from '../components/Result'

const mapStateToProps=(state)=>{
	return{
		result:state.result
	}
}

const ResultCotainer = connect(
	mapStateToProps,
	null
	)(Result)

export default ResultCotainer;
