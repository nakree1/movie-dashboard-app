import React from 'react'

class WrongRoute extends React.Component {
    render() {
        return (
            <div className="alert alert-danger">
                This page doesn't exist.
            </div>
        )
    }
}

export default WrongRoute