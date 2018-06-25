import React from 'react'
import debounce from 'lodash-es/debounce'
import {fetchSearch} from '../actions/fetchData'
import Genres from '../components/Genres'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class GenresContainer extends React.Component  {

    handleClick = (e) => {
        e.preventDefault()
        console.log('clicked on:')
        console.log(e.target)
        console.log(e.target.dataset.id)
        this.props.fetchSearch({
            request: e.target.innerHTML,
            type: 'genres',
            data: e.target.dataset.id
        })
        this.props.history.push('/search')
    }


    render() {
        return <Genres
            genres={this.props.genres}
            handleClick={this.handleClick}
        />
    }
}


const mapStateToProps = (state) => {
    return {

    }
};

// make action
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearch: (request) => dispatch(fetchSearch(request))
    };
};

withRouter(GenresContainer)
export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer)
