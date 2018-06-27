import React from 'react'
import debounce from 'lodash-es/debounce'
import {fetchSearch} from '../actions/fetchData'
import SearchInput from '../components/SearchInput'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class SearchInputContainer extends React.Component  {

    handleChange = (e) => {
        this.emitChange(e.target.value)
    }

    emitChange = debounce((value) => {
        console.log(value)
        console.log(this.props.data)
        this.props.fetchSearch(value)
    }, 700)

    handleKeyPress = (e) => {
        if (e.key !== 'Enter') return
        this.emitChange.cancel()
        this.props.fetchSearch(e.target.value)
        this.props.history.push('/search')
    }

    render() {
        return <SearchInput
            handleChange={this.handleChange}
            handleKeyPress={this.handleKeyPress}
            data={this.props.data}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.search.data
    }
};

// make action
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearch: (request) => dispatch(fetchSearch(request))
    };
};

withRouter(SearchInputContainer)
export default connect(mapStateToProps, mapDispatchToProps)(SearchInputContainer)
