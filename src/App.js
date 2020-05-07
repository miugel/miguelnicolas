import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
// import Skills from './components/skills';
import PageNotFound from './components/pageNotFound';

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/projects' component={Projects} />
			{/* <Route path='/skills' component={Skills} /> */}
			<Route component={PageNotFound} />
		</Switch>
	);
};

export default App;
