import React from 'react'
import FullReviewsContent from '../components/FullReviewsContent'
import { fetchAnyData } from '../actions/fetchData'
import setSafe from '../actions/setSafe'

export default class FullReviewsContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: setSafe(() => this.props.location.state.data),
            matchId: this.props.match.params.id
        }
    }

    componentDidMount() {
        if (!this.state.data) {
            fetchAnyData(`movie/${this.state.matchId}/reviews`).then((value) => this.setState({data: value}))
        }
    }

    routeBack = () => {
        this.props.history.goBack()
    }

    render() {
        return <FullReviewsContent data={this.state.data} routeBack={this.routeBack}/>
    }
}