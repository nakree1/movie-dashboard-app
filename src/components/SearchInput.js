import React from 'react'
import {Link} from 'react-router-dom'
import './SearchInput.scss'


class SearchInput extends React.Component {
    constructor(props) {
        super(props)

        this.input = null

        this.state = {
            modalWidth: null
        }
    }

    showData = (items, title) => {
        if (items && items.length > 0) {
            return <div className="pt-2">
                <p className="h5">{title}</p>
                {items}
            </div>
        } else {
            return null
        }
    }

    checkResults = (...items) => {
        const elem = items.every((item) => {return (items && item.length === 0)})
            ? <p className="h5 text-muted">No Results</p>
            : null

        return elem
    }

    componentDidMount() {
        const inputSize = this.input.getBoundingClientRect().width
        this.setState({modalWidth: inputSize})
    }

    render() {
        const data = typeof(this.props.data) !== 'undefined' && Object.keys(this.props.data).length > 0
            ? this.props.data
            : false

        const films = data.movieResults
            ? data.movieResults.slice(0, 3).map((item) => {
                return <Link to={`/film/${item.id}`} className="d-flex" key={item.id}>{item.title}</Link>
            })
            : null

        // const tv = data.tvResults
        //     ? data.tvResults.slice(0, 3).map((item) => {return <p key={item.id}>{item.name}</p>})
        //     : null

        const person = data.personResults
            ? data.personResults.slice(0, 3).map((item) => {
                return <Link to={`/person/${item.id}`} className="d-flex" key={item.id}>{item.name}</Link>
            })
            : null

        const results = data && this.props.isModalOpen ? <div className="my-modal" style={{width: `${this.state.modalWidth}px`}}>
            {this.showData(films, 'Films:')}
            {this.showData(person, 'Persons:')}
            {this.checkResults(films, person)}
            <button className="btn btn-primary btn-sm btn-block mt-4" onClick={() => this.props.handleClick(this.input.value)} >Open Results</button>
        </div> : null

        console.log('REF ELEM <----')
        console.log(this.inputSize)

        return (
            <div className="w-100 search-bar">
                <input
                    type="text"
                    className="form-control-dark form-control w-100"
                    placeholder="Search"
                    tabIndex="0"
                    ref={(elem) => {this.input = elem}}
                    onKeyPress={(e) => this.props.handleKeyPress(e)}
                    onChange={(e) => this.props.handleChange(e)}
                />
                {results}
            </div>
        )


    }
}

export default SearchInput
