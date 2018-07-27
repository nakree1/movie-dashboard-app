import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {StyledLink} from "../styled/Buttons"


const ColorCard = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  background-color: ${props => props.color};
  border-radius: 4px;
  box-shadow: inset 0px -70px 155px -76px rgba(0,0,0,0.2);
  color: white;
  transition: box-shadow 0.3s;
  
  &:hover {
   box-shadow: none;
  }
`

export default class HomeContent extends React.Component {

    // getColor =  (color) => {
    //     switch (color) {
    //         case 0: return 'primary'
    //         case 1: return 'success'
    //         case 2: return 'info'
    //         case 3: return 'danger'
    //         case 4: return 'warning'
    //     }
    // }
    //
    // makeCard = (title, desc, link, color) => {
    //     const theme = this.getColor(color)
    //     return (
    //         <div  className={`card  bg-light w-100`} style={{marginBottom: `30px`}} >
    //             <div className="card-head">
    //                 <Link to={link} className={`btn-${theme} btn-lg btn-block rounded-0 text-center py-4`}>{title}</Link>
    //             </div>
    //             <div className="card-body h5 text-center">
    //                {desc}
    //             </div>
    //         </div>
    //     )
    // }

    makeCard = (title, desc, link, color) => {
        return (
            <StyledLink to={link}>
                <ColorCard color={color}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </ColorCard>
            </StyledLink>
        )


    }


    render() {




        return(
            <div>
                <div className="row pt-5">
                    <div className="d-flex flex-column col">
                        {this.makeCard('Popular','Get a list of the current popular movies on TMDb', `/popular`, '#cd61e9')}
                        {this.makeCard('Now Playing','Get a list of movies in theatres', `/now`, '#57E559')}
                    </div>
                    <div className="d-flex flex-column col">
                        {this.makeCard('Upcoming','Get a list of upcoming movies in theatres', `/upcoming`, '#4A84E5')}
                        {this.makeCard('Top','Get the top rated movies on TMDb', `/top`, '#e5d563')}
                    </div>
                </div>
            </div>
        )
    }
}



/*
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

*/