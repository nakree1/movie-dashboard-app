import React from 'react'
import ExtraDataFilmContainer from './ExtraDataFilmContainer'
import ReviewsContent from '../components/ReviewsContent'

class ReviewsContainer extends ExtraDataFilmContainer {
    render() {
        return <ReviewsContent data={this.state.data} title={this.props.title} />
    }
}

export default ReviewsContainer