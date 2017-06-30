import React from 'react';
import AddCotainer from '../cotainers/AddCotainer';
import SubCotainer from '../cotainers/SubCotainer';
import ResultCotainer from '../cotainers/ResultCotainer';

const App = ()=>(
	<div>
		<ResultCotainer/>
		<AddCotainer />
		<SubCotainer/>
	</div>
	)
export default App;