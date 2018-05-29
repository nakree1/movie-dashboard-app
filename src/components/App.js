import React from 'react';
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import ContentContainer from './ContentContainer'


class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
                <HeaderBar />
				<div className="row">
                    <Sidebar  />
                    <ContentContainer />
                </div>
			</div>
		)
	}
}

export default App;