import React from 'react'
import {Link} from 'react-router-dom'
import Rating from "./Rating";
import GenresContainer from "../containers/GenresContainer";


class FilmContent extends React.Component {

    render() {
        const {data, isLoading, errorMessage, prevUrl = 1, history} = this.props

        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        else if (isLoading) return <div className="alert alert-info">Data is loading...</div>
        else return (
                <div className="container-fluid my-4">
                    <div className="row">
                        <div className="col-4">
                            <img
                                src={data.imageLink}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col">
                            <h1>{data.title}</h1>
                            <h4>{data.tagline}</h4>
                            <Rating rate={data.vote_average}/>
                            <GenresContainer genres={data.genres} history={history}/>
                            <div className="text-muted">{data.release_date}</div>
                            <p>{data.overview}</p>
                            <p>Film ID: {data.id}</p>
                            <div className="flex-column d-flex">
                                <button className="btn btn-primary btn-lg w-25 py-2 mb-4" onClick={this.props.saveFilm}>Save</button>
                                <button className="btn btn-success btn-lg w-25 py-2" onClick={this.props.routeBack}>Back</button>
                            </div>

                        </div>
                    </div>
                </div>
            )
    }
}


export default FilmContent

