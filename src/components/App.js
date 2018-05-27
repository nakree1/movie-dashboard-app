import React from 'react';
import TodoContainer from './TodoContainer'
import './App.scss'

import tasks from '../fixtures'

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<TodoContainer tasks={tasks} />
			</div>
		)
	}
}

export default App;