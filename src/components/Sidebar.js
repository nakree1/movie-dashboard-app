import React from 'react'
import {NavLink} from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-2 alert alert-secondary">
                <ul className="text-white">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/top">Top Rated</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">Favorite</NavLink>
                    </li>
                    <li>
                        <NavLink to="/film">Test Film</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar