import React from 'react'
import ExtraDataFilmContainer from './ExtraDataFilmContainer'
import CreditsContent from '../components/CreditsContent'

class CreditsContainer extends ExtraDataFilmContainer {

    //New action and dispatcher
    render() {
        return <CreditsContent data={this.state.data} title={this.props.title} movieId={this.props.movieId} />
    }
}

export default CreditsContainer