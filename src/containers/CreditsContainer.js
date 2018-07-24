import React from 'react'
import {fetchAnyData} from "../actions/fetchData"
import CreditsContent from '../components/CreditsContent'

export default class CreditsContainer extends React.Component {
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
        return <CreditsContent data={this.state.data} title={this.props.title} movieId={this.props.movieId} />
    }
}