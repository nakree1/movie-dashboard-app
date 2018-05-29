import React from 'react'
import {makeUrl, fetchData} from '../actions/fetchData'
import axios from 'axios'

class TopContent extends React.Component {
    constructor(props) {
        super(props)

        this.requestSource = axios.CancelToken.source()

        this.state = {
            items: {},
            isLoading: false,
            errorMessage: ''
        }
    }

    componentDidMount() {
        console.log('--mounting TopContent')
        axios.get(makeUrl('3/movie/top_rated'), {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            },
            cancelToken: this.requestSource.token
        })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    items: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error.message)
                this.setState({
                    errorMessage: error.message,
                    isLoading: false
                })
            })
    }

    componentWillUnmount() {
        this.requestSource.cancel('cancel request by user')
        console.log('--unmount TopContent')
    }

    render() {
        const {items, isLoading, errorMessage} = this.state
        const list = items.results ? items.results.map((item) => {
            return (
                    <li key={item.id}>{item.title}</li>
            )
        }) : null

        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        else if (isLoading) return (
            <div className="alert alert-info">Data is loading...<button onClick={this.requestSource.cancel}>Cancel</button></div>
        )
        else return(
                <div className="container">
                    <ul>{list}</ul>
                </div>
            )
    }
}

export default TopContent