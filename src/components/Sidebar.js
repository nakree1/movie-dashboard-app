import React from 'react'
import {NavLink} from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-2 alert alert-secondary">
                <div className="btn-group-vertical btn-group-lg">
                        <NavLink exact to="/" className="btn btn-outline-secondary">Home</NavLink>
                        <NavLink to="/top" className="btn btn-outline-secondary">Top Rated</NavLink>
                        <NavLink to="/favorite" className="btn btn-outline-secondary">Favorite</NavLink>
                        <NavLink to="/film" className="btn btn-outline-secondary">Test Film</NavLink>

                </div>
            </div>
        )
    }
}

export default Sidebar