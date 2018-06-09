import React from 'react'


class SearchInput extends React.Component {


    render() {
        return <input
            type="text"
            className="form-control-dark form-control w-100"
            placeholder="Search"
            tabIndex="0"
            onKeyPress={(e) => this.props.handleKeyPress(e)}
            onChange={(e) => this.props.handleChange(e)}
        />
    }
}

export default SearchInput
