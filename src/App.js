import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, PageNotFound, Projects, Skills } from './components';
import { GlobalContainer } from './assets';

export const App = () => (
	<>
		<GlobalContainer />
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/projects' component={Projects} />
				<Route path='/skills' component={Skills} />
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	</>
);