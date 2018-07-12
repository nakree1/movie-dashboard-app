import React from 'react'

export default class Loader extends React.Component {
    render() {
        const {isSmall = false} = this.props
        if (isSmall) return <div className="h-100 w-100 bg-secondary">Loading</div>
        return (
            <div className=" h-50 d-flex justify-content-center alert alert-light">
                    <p className="display-3 text-center align-self-center">loading</p>
            </div>
        )
    }
}