import React from 'react'
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
/*
	reducer
*/
const initialState={
	result:-1
}
function counterApp(state=initialState,action){
	switch(action.type){
		case "add":
			var newRes = state.result+1;
			var newState = Object.assign({},state,{result:newRes});
			return newState;
		case "sub":
			var newRes = state.result-1;
			return Object.assign({},state,{result:newRes});
		default:
			return state;
	}
}
/*
reducer end
*/
let store = createStore(counterApp);
/*let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)*/

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);