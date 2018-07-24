import React from 'react'
import {fetchAnyData} from "../actions/fetchData"
import ReviewsContent from '../components/ReviewsContent'

export default class ReviewsContainer extends React.Component {
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
        return <ReviewsContent data={this.state.data} title={this.props.title} />
    }
}