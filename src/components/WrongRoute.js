import React from 'react'
import Loader from './Loader'

class WrongRoute extends React.Component {
    render() {
        return <Loader />

        return (
            <div className="alert alert-danger">
                This page doesn't exist.
            </div>
        )
    }
}

export default WrongRoute