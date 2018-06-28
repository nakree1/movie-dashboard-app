import React from 'react'
import {Link} from 'react-router-dom'
import './SearchInput.scss'


class SearchInput extends React.Component {
    // constructor(props){
    //     super(props)
    //
    //     this.state = {
    //         isModalOpen: false
    //     }
    // }


    render() {
        const data = typeof(this.props.data) !== 'undefined' && Object.keys(this.props.data).length > 0
            ? this.props.data
            : false

        const films = data.movieResults
            ? data.movieResults.slice(0, 3).map((item) => {
            return <Link to={`/film/${item.id}`} className="d-flex" key={item.id}>{item.title}</Link>
        })
            : null

        const tv = data.tvResults
            ? data.tvResults.slice(0, 3).map((item) => {return <p key={item.id}>{item.name}</p>})
            : null

        const person = data.personResults
            ? data.personResults.slice(0, 3).map((item) => {return <p key={item.id}>{item.name}</p>})
            : null

        const results = data && this.props.isModalOpen ? <div className="my-modal">
            <p className="h5">Films:</p>
            {films}
            <p className="h5">TV:</p>
            {tv}
            <p className="h5">Persons:</p>
            {person}
        </div> : null

        console.log('SearchInputData:')
        console.log(this.props.data)
        console.log(data)
        console.log(films)
        console.log(tv)
        console.log(person)

        return (
            <div className="w-100 search-bar">
                <input
                    type="text"
                    className="form-control-dark form-control w-100"
                    placeholder="Search"
                    tabIndex="0"
                    onKeyPress={(e) => this.props.handleKeyPress(e)}
                    onChange={(e) => this.props.handleChange(e)}
                />

                {results}
            </div>
        )


    }
}

export default SearchInput
