import React from 'react'
import {Link} from 'react-router-dom'
import Rating from "./Rating";
import Money from './Money'
import GenresContainer from "../containers/GenresContainer";
import ExtraDataFilmContainer from "../containers/ExtraDataFilmContainer";
import CreditsContainer from '../containers/CreditsContainer'
import ReviewsContainer from '../containers/ReviewsContainer'


class FilmContent extends React.Component {

    render() {
        const {data, isLoading, errorMessage, prevUrl = 1, history, isFilmSaved} = this.props
        let saveButton
        if (isFilmSaved) {
            saveButton =
                <button
                    className='btn btn-danger btn-lg w-25 py-2 mb-4'
                    onClick={this.props.unsaveFilm}
                >
                    Unsave
                </button>
        } else {
            saveButton =
                <button
                    className='btn btn-primary btn-lg w-25 py-2 mb-4'
                    onClick={this.props.saveFilm}
                >
                    Save
                </button>
        }

        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        if (isLoading) return <div className="alert alert-info">Data is loading...</div>

        return (
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
                            <Money budget={data.budget} revenue={data.revenue} />
                            <Rating rate={data.vote_average}/>
                            <GenresContainer genres={data.genres} history={history}/>
                            <div className="text-muted">{data.release_date}</div>
                            <p>{data.overview}</p>
                            <p>Film ID: {data.id}</p>
                            <div className="flex-column d-flex">
                                {saveButton}
                                <button className="btn btn-success btn-lg w-25 py-2" onClick={this.props.routeBack}>Back</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ExtraDataFilmContainer link={`movie/${data.id}/recommendations`} title='Recommended Films:'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ExtraDataFilmContainer link={`movie/${data.id}/similar`} title='Similar Films:'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <CreditsContainer link={`movie/${data.id}/credits`} title='Credits:'/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <ReviewsContainer link={`movie/${data.id}/reviews`} title='Reviews:'/>
                        </div>
                    </div>
                </div>
            )
    }
}


export default FilmContent

