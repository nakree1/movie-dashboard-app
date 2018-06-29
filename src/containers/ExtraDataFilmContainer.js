import React from 'react'
import {fetchAnyData} from "../actions/fetchData"
import ExtraDataFilmContent from '../components/ExtraDataFilmContent'

class ExtraDataFilmContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        fetchAnyData(this.props.link).then((value) => this.setState({data: value}))
    }

    render() {
        return <ExtraDataFilmContent data={this.state.data} title={this.props.title}/>
    }
}

export default ExtraDataFilmContainer