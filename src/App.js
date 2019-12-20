import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {
	return (
		<>
			<Route exact path='/' component={Home}/>
			<Route path='/projects' component={Projects}/>
		</>
	);
};

export default App;
