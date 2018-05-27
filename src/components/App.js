import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Test1 from './Test1'
import Test2 from './Test2'
import Sidebar from './Sidebar'

import tasks from '../fixtures'

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid h3s">
				<h2>Main Page</h2>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/test2">Test2-link</Link></li>
					<li><Link to="/sidebar">sidebar-link</Link></li>
				</ul>
				<Switch>
					<Route exact path="/" component={Test1}/>
					<Route path="/test2" component={Test2}/>
					<Route path="/sidebar" component={Sidebar}/>
				</Switch>
			</div>
		)
	}
}

export default App;