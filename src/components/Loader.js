import React from 'react'

export default class Loader extends React.Component {
    render() {
        return (
            <div className=" h-50 d-flex justify-content-center alert alert-light">
                    <p className="display-3 text-center align-self-center">loading</p>
            </div>
        )
    }
}