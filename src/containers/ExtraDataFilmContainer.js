import React from 'react'
import {fetchAnyData} from "../actions/fetchData"
import ExtraDataFilmContent from '../components/ExtraDataFilmContent'
import {connect} from 'react-redux'
import getImageLink from '../actions/getImageLink'

class ExtraDataFilmContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        fetchAnyData(this.props.link)
            // .then((value) => {console.log(value)})
            .then(
                (value) => value.results.map((item) => {
                    item.imageLink = getImageLink(this.props.configApi, item.poster_path, 'poster', 'w185');
                    return item
                })
            )
            .then(
                (value) => this.setState({
                    data: value
                })
            )
    }

    render() {
        return <ExtraDataFilmContent data={this.state.data} title={this.props.title}/>
    }
}

const mapStateToProps = (state) => {
    return {
        configApi: state.configApi
    }
}

export default connect(mapStateToProps)(ExtraDataFilmContainer)
