import React from 'react'
import { connect } from 'react-redux';

import {fetchData} from '../actions/fetchData'
import axios from 'axios'

class FilmContent extends React.Component {
        // this.state = {
        //     items: {},
        //     isLoading: true,
        //     errorMessage: 'debugging'
        // }

    componentDidMount() {
        console.log('--mounting')
        this.requestSource = axios.CancelToken.source()
        this.props.fetchData(('3/movie/32463'), {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            },
                cancelToken: this.requestSource.token
        })

    }

    componentWillUnmount() {
    }

    render() {
        const {isLoading} = this.props
        if (isLoading) return (
            <div className="alert alert-info">Data is loading...</div>
        )
        else return(
            <div className="container">
                isLoading = false
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

const mapStateToProps = (state) => {
    return {isLoading: state.itemsIsLoading}
};

//make action
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmContent)