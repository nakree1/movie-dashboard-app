import React from 'react'
import {makeUrl, fetchData} from './../api/fetchData'

class FilmContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: {},
            isLoading: false,
            errorMessage: ''
        }
    }

    componentDidMount() {
        fetchData('3/movie/32463')
            .then((data) => {
                console.log('first .then', data)
                if (data.status === 200){
                    return data.json()
                } else {
                    throw new Error(`Can\'t Fetch data. Error code is ${data.status}`)
                }
            })
            .then((data) => {
                console.log(`second .then:`, data)
                // console.log(data.original_title)
                this.setState({
                    items: data
                })
            })
            .catch((error) => {
                console.log(error.message)
                console.log(error)
                console.log('error by console.log')
                this.setState({
                    errorMessage: error.message
                })
            })

        // fetch(makeUrl('3/movie/32463'))
        //     .then((data) => {
        //         console.log(data)
        //         return data.json()
        //     })
        //     .then((data) => {
        //         console.log(data)
        //         this.setState({
        //             items: data
        //         })
        //     })
    }

    render() {
        const {items, isLoading, errorMessage} = this.state
        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        else if (isLoading) return <div className="alert alert-info">Data is loading...</div>
        else return(
            <div>
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