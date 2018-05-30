import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {fetchData} from '../actions/fetchData'
import axios from 'axios'

class FilmContent extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount() {
        console.log('--mounting film container')
        this.requestSource = axios.CancelToken.source()
        console.log(this.requestSource)
        console.log(this.requestSource.token)
        this.props.fetchData(('3/movie/32463'), {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            },
            cancelToken: this.requestSource.token
        })
    }


    componentWillUnmount() {
        console.log('--unmount film container')
        this.requestSource.cancel('cancel request by user')
    }

    handleClick = (e) => {
        // console.log('handleClick:')
        // console.log(this.props.isLoading)
        this.requestSource.cancel
    }

    render() {
        console.log(this.requestSource)
        const {data, isLoading, errorMessage} = this.props
        const myButton = <button onClick={this.handleClick}>Cancel</button>

        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        else if (isLoading) return <div className="alert alert-info">Data is loading...{myButton}</div>
        else return(
                <div className="container">
                    <h1>{data.title}</h1>
                    <h3>{data.tagline}</h3>
                    <div className="text-muted">{data.release_date}</div>
                    <p>{data.overview}</p>
                    <p>{data.id}</p>
                </div>
        )
    }
}
//read states
// const mapStateToProps = (state) => {
//     return {
//         items: state.items,
//         hasErrored: state.itemsHasErrored,
//         errorMessage: state.itemsErrorMessage,
//         isLoading: state.itemsIsLoading
//     };
// };
//получаем стейты в виде пропсов отсюда с редакса
const mapStateToProps = (state) => {
    return {
        isLoading: state.cachedFilm.isLoading,
        errorMessage: state.cachedFilm.errorMessage,
        data: state.cachedFilm.data
    }
};

// make action
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (bool) => dispatch(fetchData(bool))
    };
};
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchData: (url) => dispatch(fetchData(url))
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(FilmContent)