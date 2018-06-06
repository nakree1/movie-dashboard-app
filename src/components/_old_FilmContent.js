import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchDataFilm} from '../actions/fetchData'
import {filmDataLoading, filmDataSave} from "../actions/actions"
import getImageLink from '../actions/getImageLink'
import axios from 'axios'
import saveFilm from "../actions/saveFilm";

class FilmContent extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
        console.log('--mounting film container')
        console.log(`3/movie/${this.props.match.params.id}`)
        this.requestSource = axios.CancelToken.source()
        this.props.fetchData((`3/movie/${this.props.match.params.id}`), {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            },
            cancelToken: this.requestSource.token
        })
    }


    componentWillUnmount() {
        console.log('--unmount film container')
        this.props.setIsLoading(true)
    }

    handleClick = (e) => {
        // console.log('handleClick:')
        // console.log(this.props.isLoading)
        this.requestSource.cancel
    }

    saveFilm = () => {
        console.log(this.props.data)
        this.props.saveFilm(this.props.data)
    }

    render() {
        const {data, isLoading, errorMessage} = this.props
        const myButton = <button onClick={this.handleClick}>Cancel</button>

        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        else if (isLoading) return <div className="alert alert-info">Data is loading...{myButton}</div>
        else return (
                <div className="container-fluid my-4">
                    <div className="row">
                        <div className="col-4">
                            <img
                                src={getImageLink(this.props.configApi, this.props.data.poster_path, 'poster', 'w342')}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col">
                            <h1>{data.title}</h1>
                            <h3>{data.tagline}</h3>
                            <div className="text-muted">{data.release_date}</div>
                            <p>{data.overview}</p>
                            <p>Film ID: {data.id}</p>
                            <button className="btn btn-outline-success" onClick={this.saveFilm}>Save</button>
                            <br />
                            <Link to={`/top/${this.props.prevUrl}`} className="h2 text-success"> {'<-'} Back </Link>
                        </div>
                    </div>
                </div>
            )
    }
}


//получаем стейты в виде пропсов отсюда с редакса
const mapStateToProps = (state) => {
    return {
        isLoading: state.cachedFilm.isLoading,
        errorMessage: state.cachedFilm.errorMessage,
        data: state.cachedFilm.data,
        configApi: state.configApi,
        prevUrl: state.cachedTop.data.page
    }
};

// get callback func from props
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchDataFilm(url)),
        setIsLoading: (bool) => dispatch(filmDataLoading(bool)),
        saveFilm: (data) => dispatch(saveFilm(data))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FilmContent)

