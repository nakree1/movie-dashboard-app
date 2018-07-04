import React from 'react'
import {Link} from 'react-router-dom'

export default class HomeContent extends React.Component {

    getColor =  (color) => {
        switch (color) {
            case 0: return 'primary'
            case 1: return 'success'
            case 2: return 'info'
            case 3: return 'danger'
            case 4: return 'warning'
        }
    }

    makeCard = (title, desc, link, color) => {
        const theme = this.getColor(color)
        return (
            <div  className={`card  bg-light w-100`} style={{marginBottom: `30px`}} >
                <div className="card-head">
                    <Link to={link} className={`btn-${theme} btn-lg btn-block rounded-0 text-center py-4`}>{title}</Link>
                </div>
                <div className="card-body h5 text-center">
                   {desc}
                </div>
            </div>
        )
    }
    render() {




        return(
            <div>
                <div className="row pt-5">
                    <div className="d-flex flex-column col">
                        {this.makeCard('Popular','Get a list of the current popular movies on TMDb', `/popular`, 0)}
                        {this.makeCard('Now Playing','Get a list of movies in theatres', `/now`, 1)}
                    </div>
                    <div className="d-flex flex-column col">
                        {this.makeCard('Upcoming','Get a list of upcoming movies in theatres', `/upcoming`, 2)}
                        {this.makeCard('Top','Get the top rated movies on TMDb', `/top`, 3)}
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