import React from 'react'
import {fetchDataTop} from '../actions/fetchData'
import {connect} from 'react-redux'
import {Link, Redirect, withRouter, browserHistory} from 'react-router-dom'
import {history} from 'react-router'
// import SearchContent from '../components/SearchContent'

class SearchContainer extends React.Component {
    render() {
        const query = this.props.query
        console.log('SearchContainerProps:')
        console.log(this.props)
        const {movieResults: movie, tvResults: tv, personResults: person} = this.props.data
        const movieList = movie ? movie.map((item) =>{
            return <li>{item.title}</li>
        }) : null

        const tvList = tv ? tv.map((item) =>{
            return <li>{item.name}</li>
        }) : null

        const personList = person ? person.map((item) =>{
            return <li>{item.name}</li>
        }) : null

        return (
            <div>
                <h1>Searching "{query}"</h1>
                <ul>Movie list: {movieList}</ul>
                <ul>Tv list: {tvList}</ul>
                <ul>Person list: {personList}</ul>
                <p className="text-muted mt-5">Total results: {this.props.data.total_results}</p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        query: state.search.request,
        data: state.search.data
    }
};

// make action
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearch: (request) => dispatch(fetchSearch(request))
    };
};

withRouter(SearchContainer)
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
