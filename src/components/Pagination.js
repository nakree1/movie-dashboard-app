import React from 'react'

export default class FilmCard extends React.Component {
    render() {
        const handler = this.props.handler
        const buttonGroup = (
            <div className="btn-group btn-group ">
                <button className="btn btn-outline-secondary" name="return" onClick={() => {handler('return')}}>
                    First Page
                </button>
                <button className="btn btn-outline-secondary" name="prev" onClick={() => {handler('prev')}}>
                    Prev
                </button>
                <button className="btn btn-outline-secondary" name="next" onClick={() => {handler('next')}}>
                    Next
                </button>
            </div>
        )

        return buttonGroup
    }
}