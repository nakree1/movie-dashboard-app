import React from 'react'
import debounce from 'lodash-es/debounce'
import {fetchSearch} from '../actions/fetchData'
import SearchInput from '../components/SearchInput'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class SearchInputContainer extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', this.closeModalHandler)
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.closeModalHandler)
    }

    handleChange = (e) => {
        this.emitChange(e.target.value)
    }

    emitChange = debounce((value) => {
        console.log(value)
        console.log(this.props.data)
        this.props.fetchSearch(value)
        this.setState({isModalOpen: true})
    }, 500)

    handleKeyPress = (e) => {
        console.log(e)
        if (e.key !== 'Enter') return
        this.emitChange.cancel()
        this.props.fetchSearch(e.target.value)
        this.historyPush(e.target.value)
    }

    openResults = (value) => {
        this.emitChange.cancel()
        if (this.state.isModalOpen === true) this.setState({isModalOpen: false})
        this.props.fetchSearch(value)
        this.historyPush(value)
    }

    closeModalHandler = (e) => {
        if (e.target.matches('a')) this.setState({isModalOpen: false})
        if (e.target.closest('.my-modal') === document.body.querySelector('.my-modal')) return
        if (this.state.isModalOpen === true) this.setState({isModalOpen: false})
    }

    historyPush = (str) => {
        const query = encodeURIComponent(str)
        this.props.history.push(`/search?query=${query}`)
    }

    render() {
        return <SearchInput
            handleChange={this.handleChange}
            handleKeyPress={this.handleKeyPress}
            handleClick={this.openResults}
            data={this.props.data}
            isModalOpen={this.state.isModalOpen}
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
