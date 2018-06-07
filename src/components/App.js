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
			<div>
                <HeaderBar />
				<div className="container-fluid h-100">
                    <div className="row">
                        <Sidebar  />
                        <ContentContainer />
                    </div>
                </div>
			</div>
		)
	}
}

export default App;