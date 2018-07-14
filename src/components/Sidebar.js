import React from 'react'
import {NavBar, NavList, StyledNavLink} from '../styled/SidebarItems'

class Sidebar extends React.Component {
    render() {
        return (
            <NavBar className="col-2">
                    <NavList>
                        <li>
                            <StyledNavLink exact to="/">Home</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink to="/top">Top Rated</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink to="/popular">Popular</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink to="/now">Now Playing</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink to="/upcoming">Upcoming</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink to="/saved">Saved</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink to="/wrongroute">Wrong Route</StyledNavLink>
                        </li>
                    </NavList>
            </NavBar>
        )
    }
}

export default Sidebar