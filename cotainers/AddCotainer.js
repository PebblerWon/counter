import {connect} from 'react-redux';
import Add from '../components/Add'

const mapDispatchToProps = (dispatch,ownProps)=>{
	return{
		onClick:()=>{
			dispatch({type:'add'})
		}
	}
}
/*
	connect function need 2 arguments(mapStateToProps,mapDispatchToProps),
	if you don't need one of them,just use null as a placeholder;

*/
const AddCotainer = connect(
	null,
	mapDispatchToProps
	)(Add)

export default AddCotainer;