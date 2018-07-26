import React from 'react'

export default class Loader extends React.Component {
    render() {
        const {isSmall = false} = this.props
        if (isSmall) return <div className="h-100 w-100 bg-secondary">Loading</div>
        return (
            <p className="text-center p-5 display-4">loading</p>
        )
    }
}