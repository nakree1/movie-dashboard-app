import React from 'react'
import FullCreditsContent from '../components/FullCreditsContent'
import setSafe from '../actions/setSafe'

export default class FullCreditsContainer extends React.Component {
    render() {
        const data = setSafe(() => this.props.location.state.data)
        return <FullCreditsContent data={data}/>
    }
}