import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import './Sidebar.scss'

class Sidebar extends React.Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar w-100">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink exact to="/"
                                     activeClassName="text-primary"
                                     className="nav-link h4">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/top"
                                     activeClassName="text-primary"
                                     className="nav-link h4">Top Rated</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/popular"
                                     activeClassName="text-primary"
                                     className="nav-link h4">Popular</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/now"
                                     activeClassName="text-primary"
                                     className="nav-link h4">Now Playing</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/upcoming"
                                     activeClassName="text-primary"
                                     className="nav-link h4">Upcoming</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/saved"
                                     activeClassName="text-primary"
                                     className="nav-link h4">Saved</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/wrongroute"
                                     activeClassName="text-primary"
                                     className="nav-link h4">Wrong Route</NavLink>
                        </li>

                    </ul>




                </div>
            </nav>
        )
    }
}

export default Sidebar