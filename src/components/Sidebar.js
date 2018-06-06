import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-2 alert alert-secondary h-100">
                <div className="btn-group-vertical btn-group-lg w-100">
                        <NavLink exact to="/" className="btn btn-outline-secondary">Home</NavLink>
                        <NavLink to="/top" className="btn btn-outline-secondary">Top Rated</NavLink>
                        <NavLink to="/saved" className="btn btn-outline-secondary">Saved</NavLink>
                        <NavLink to="/wrongroute" className="btn btn-outline-secondary">Wrong Route</NavLink>
                </div>
            </div>
        )
    }
}

export default Sidebar