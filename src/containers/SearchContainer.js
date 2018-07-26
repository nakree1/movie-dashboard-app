import React from 'react'
import {fetchSearch} from '../actions/fetchData'
import {connect} from 'react-redux'
import {Link, Redirect, withRouter, browserHistory} from 'react-router-dom'
import {history} from 'react-router'
// import SearchContent from '../components/SearchContent'
import SearchItemsList from '../components/SearchItemsList'
import Loader from "../components/Loader";

class SearchContainer extends React.Component {


    componentDidMount() {
        if (this.props.query && this.props.data) return
        console.log('ComponentDidMount(SearchContainer)')
        const query = encodeURIComponent(this.props.location.search.slice(7))
        this.props.fetchSearch(query)
        console.log(query)
    }



    render() {
        const query = this.props.query
        const configApi = this.props.configApi
        console.log('searchContainerQuery:')
        console.log(query)


        const handleClick = this.handleClick
        console.log('SearchContainerProps:')
        console.log(this.props)

        let template = <Loader/>

        if (query.type === 'multi') {
            const {
                movieResults: movie,
                personResults: person
            } = this.props.data
            template = (
                <div>
                    <h1>Searching "{query.request}"</h1>
                    <SearchItemsList configApi={configApi} data={movie} header="Movie List" type="movie"/>
                    <SearchItemsList configApi={configApi} data={person} header="Person List" type="person"/>
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
                    <SearchItemsList configApi={configApi} data={results} header="Movie List" type="movie"/>
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
        data: state.search.data,
        configApi: state.configApi,
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
