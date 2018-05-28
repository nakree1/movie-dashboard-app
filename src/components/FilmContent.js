import React from 'react'
import makeUrl from './../api/fetchData'

class FilmContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: {}
        }
    }

    componentDidMount() {
        fetch(makeUrl('3/movie/32463'))
            .then((data) => {
                console.log(data)
                return data.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    items: data
                })
            })
    }

    render() {
        return(
            <div>
                <h2>Film Title</h2>
                <p>Film Desc</p>
                <p>{this.state.items.original_title}</p>
                <p>{this.state.items.id}</p>
            </div>
        )
    }
}

export default FilmContent