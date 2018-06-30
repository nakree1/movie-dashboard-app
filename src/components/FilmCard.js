import React from 'react'
import {Link} from 'react-router-dom'
import Rating from "./Rating";

export default class FilmCard extends React.Component {
    render() {
        const {id, imageLink, title, vote_average} = this.props;
        return (
            <div className="card mb-4 mx-2" style={{width: '18%'}}>
            <img
                src={imageLink}
                className="card-img-top"
                style={{height: '80%'}}
            />
            <div className="card-body">
                <p className="card-text">
                    <Link to={`/film/${id}`} >
                        {title}
                        <Rating rate={vote_average}/>
                    </Link>
                </p>
            </div>
        </div>
        )
    }
}