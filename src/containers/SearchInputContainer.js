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
    }, 700)

    handleKeyPress = (e) => {
        if (e.key !== 'Enter') return
        this.emitChange.cancel()
        this.props.fetchSearch(e.target.value)
        this.props.history.push('/search')
    }

    closeModalHandler = (e) => {
        if (e.target.matches('a')) this.setState({isModalOpen: false})
        if (e.target.closest('.my-modal') === document.body.querySelector('.my-modal')) return
        if (this.state.isModalOpen === true) this.setState({isModalOpen: false})

    }

    render() {
        return <SearchInput
            handleChange={this.handleChange}
            handleKeyPress={this.handleKeyPress}
            handleClick={this.handleClick}
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
