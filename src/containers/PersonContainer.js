import React from 'react'
import PersonContent from '../components/PersonContent'
import { fetchAnyData } from '../actions/fetchData'
import setSafe from '../actions/setSafe'
import getImageLink from '../actions/getImageLink'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class PersonContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: setSafe(() => this.props.match.params.id),
            data: null
        }
    }

    componentDidMount() {
            fetchAnyData(`person/${this.state.id}`).then((value) => this.setState({
                data: value
            }))
    }

    routeBack = () => {
        this.props.history.goBack()
    }

    render() {
        const data = this.state.data === null
            ? null
            : {
                ...this.state.data,
                imageLink: setSafe(() => getImageLink(this.props.configApi, this.state.data.profile_path, 'poster', 'w342'))
            }

        console.log('PersonContainer:')
        console.log(data)

        return <PersonContent data={data} routeBack={this.routeBack}/>
    }
}

const mapStateToProps = (state) => {
    return {
        configApi: state.configApi
    }
}


// withRouter(FilmContainer)
export default connect(mapStateToProps, null)(PersonContainer)