import {connect} from 'react-redux'
import Sub from '../components/Sub';

const mapDispatchToProps = (dispatch,ownProps)=>{
	return{
		onClick:()=>{
			dispatch({type:'sub'})
		}
	}
}
const SubCotainer = connect(
	null,
	mapDispatchToProps
	)(Sub)

export default SubCotainer;