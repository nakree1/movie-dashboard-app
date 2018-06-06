import React from 'react';
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import ContentContainer from '../containers/ContentContainer'
import {fetchConfigApi} from "../actions/fetchData";



class App extends React.Component {
    componentDidMount() {
        fetchConfigApi()
    }
	render() {
		return (
			<div className="container-fluid">
                <HeaderBar />
				<div className="row h-100">
                    <Sidebar  />
                    <ContentContainer />
                </div>
			</div>
		)
	}
}

export default App;