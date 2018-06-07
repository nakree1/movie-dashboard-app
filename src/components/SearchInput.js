import React from 'react'
import {debounce} from 'lodash-es'
import {fetchSearch} from "../actions/fetchData"

class SearchInput extends React.Component {


    handleChange = (e) => {
        this.emitChange(e.target.value)
    }

    emitChange = debounce((value) => {
        console.log(value)
        fetchSearch(value)
    }, 700)

    handleKeyPress = (e) => {
        if (e.key !== 'Enter') return
        fetchSearch(e.target.value)
    }


    render() {
        return <input
            type="text"
            className="form-control-dark form-control w-100"
            placeholder="Search"
            tabIndex="0"
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
        />
    }
}

export default SearchInput
