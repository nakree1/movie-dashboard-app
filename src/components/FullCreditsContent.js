import React from 'react'

export default class FullCreditsContent extends React.Component {
    render() {
        const data = this.props.data
        return <h1>Full Credits Content: {data}</h1>
    }
}