import React from 'react'
import {fetchDataTop} from '../actions/fetchData'
import {Link, Redirect, withRouter, browserHistory} from 'react-router-dom'
import {fetchAnyData} from "../actions/fetchData"
import RecommendFilmsContent from '../components/RecommendFilmsContent'

class RecommendFilmContainer extends React.Component {
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
        return <RecommendFilmsContent data={this.state.data}/>
    }
}


export default RecommendFilmContainer