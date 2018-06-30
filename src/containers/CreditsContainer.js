import React from 'react'
import ExtraDataFilmContainer from './ExtraDataFilmContainer'
import CreditsContent from '../components/CreditsContent'

class CreditsContainer extends ExtraDataFilmContainer {
    render() {
        return <CreditsContent data={this.state.data} title={this.props.title} />
    }
}

export default CreditsContainer