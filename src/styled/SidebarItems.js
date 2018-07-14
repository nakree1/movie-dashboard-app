import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {lightgray, navLink, navLinkCurrent, navLinkActive, navBackHover, navBackActive} from '../constants/colors'

export const NavBar = styled.nav.attrs({
    className: props => props.className
})`
    background-color: ${lightgray};
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
`

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
`

export const StyledNavLink = styled(NavLink).attrs({
    activeStyle: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: navBackActive
    },

})`
    font-size: 1.75rem;
    color: ${navLink};
    width: 100%;
    display: block;
    text-decoration: none;
    padding-left: 1.25rem;
    
    &:hover {
        background-color: ${navBackHover};
        color: ${navLinkCurrent};
        text-decoration: none;
    }
    
    &:active {
        background-color: ${navBackHover};
        color: ${navLinkActive};
        text-decoration: none;
    }
`