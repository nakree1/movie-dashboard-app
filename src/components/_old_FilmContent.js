import React from 'react'
import {makeUrl, fetchDataFilm} from '../actions/fetchData'
import axios from 'axios'

class FilmContent extends React.Component {
    constructor(props) {
        super(props)



        this.state = {
            items: {},
            isLoading: true,
            errorMessage: 'debugging'
        }
    }

    componentDidMount() {
        console.log('--mounting')
        this.requestSource = axios.CancelToken.source()
        console.log(this.requestSource)
        fetchDataFilm(('3/movie/32463'), {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            },
                cancelToken: this.requestSource.token
        })

    }

    componentWillUnmount() {
        this.requestSource.cancel('cancel request by user')
        console.log('--unmount')
    }

    render() {
        const {items, isLoading, errorMessage} = this.state
        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        else if (isLoading) return (
            <div className="alert alert-info">Data is loading...<button onClick={this.requestSource.cancel}>Cancel</button></div>
        )
        else return(
            <div className="container">
                <h1>{items.title}</h1>
                <h3>{items.tagline}</h3>
                <div className="text-muted">{items.release_date}</div>
                <p>{items.overview}</p>
                <p>{items.id}</p>
            </div>
        )
    }
}

export default FilmContent