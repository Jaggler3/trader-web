import React from 'react';

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';


import Porfolio from './pages/Porfolio';
import Landing from './entrance/Landing';
import Auth from './entrance/Auth';
import Rankings from './pages/Rankings';
import FastForward from './pages/FastForward';
import Achievements from './pages/Achievements';
import Forum from './pages/Forum';
import Support from './pages/Support';
import Settings from './pages/Settings';
import Dashboard from './Dashboard';

import store from './store'

export default function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Landing} />

					<Route exact path="/auth" component={Auth} />

					
					<Provider store={store}>
						<Dashboard>
							<Route exact path="/app" component={Porfolio} />
							<Route exact path="/app/rankings" component={Rankings} />
							<Route exact path="/app/fastforward" component={FastForward} />
							<Route exact path="/app/achievements" component={Achievements} />
							<Route exact path="/app/forum" component={Forum} />
							<Route exact path="/app/support" component={Support} />
							<Route exact path="/app/settings" component={Settings} />
						</Dashboard>
					</Provider>
				</Switch>
			</Router>
		</div>
	);
}
