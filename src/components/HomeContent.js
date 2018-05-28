import React from 'react'

class HomeContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h2>Hello</h2>
                <p>
                    This is Home page of my movie-app.
                    <br />
                    Please use sidebar navigation
                </p>
            </div>
        )
    }
}

export default HomeContent