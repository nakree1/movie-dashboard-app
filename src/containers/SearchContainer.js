import React from 'react'
import {fetchDataMulti} from '../actions/fetchData'
import {connect} from 'react-redux'
import {Link, Redirect, withRouter, browserHistory} from 'react-router-dom'
import {history} from 'react-router'
// import SearchContent from '../components/SearchContent'
import SearchItemsList from '../components/SearchItemsList'

class SearchContainer extends React.Component {

    handleClick = (url) => {
        this.props.history.push(url)
    }

    render() {
        const query = this.props.query
        const history = this.props.history
        const handleClick = this.handleClick
        console.log('SearchContainerProps:')
        console.log(this.props)

        let template = <div>wrong</div>

        if (query.type === 'multi') {
            const {
                movieResults: movie,
                tvResults: tv,
                personResults: person
            } = this.props.data
            template = (
                <div>
                    <h1>Searching "{query.request}"</h1>
                    <SearchItemsList data={movie} header="Movie List" type="movie" handleClick={handleClick}/>
                    <SearchItemsList data={tv} header="TV List" type="tv" handleClick={handleClick}/>
                    <SearchItemsList data={person} header="Person List" type="person" handleClick={handleClick}/>
                    <p className="text-muted mt-5">Total results: {this.props.data.total_results}</p>
                </div>
            )
        }

        if (query.type === 'genres') {
            const {
                results: results,
                total_pages: total_pages
            } = this.props.data
            template = (
                <div>
                    <h1>Searching "{query.request}"</h1>
                    <SearchItemsList data={results} header="Movie List" type="movie" handleClick={handleClick}/>
                    <p className="text-muted mt-5">Total results:{total_pages}</p>
                </div>
            )
        }


        return template


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
