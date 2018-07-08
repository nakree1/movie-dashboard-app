import React from 'react'
import {fetchDataMulti} from '../actions/fetchData'
import {connect} from 'react-redux'
import {Link, Redirect, withRouter, browserHistory} from 'react-router-dom'
import {history} from 'react-router'
import getImageLink from '../actions/getImageLink'
import ExploreContent from '../components/ExploreContent'


class ExploreContainer extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchData((this.props.match.params.page ? this.props.match.params.page : "1"), {
            validateStatus: (status) => {
                return status === 200;
            },
            type: this.props.type
        })
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.match.params.page === this.props.match.params.page) return

        this.props.fetchData((nextProps.match.params.page ? nextProps.match.params.page : "1"), {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            },
            type: this.props.type
        })
    }

    componentWillUnmount() {
        // console.log('--unmount TopContainer')
    }

    handleClick = (name) => {
        const page = this.props.match.params.page
        const totalPages = this.props.totalPages
        let link = this.props.type

        if (link === 'top_rated') link = 'top'
        if (link === 'now_playing') link = 'now'

        switch (name) {
            case 'first':
                this.props.history.push(`/${link}/1`)
                break

            case 'last':
                this.props.history.push(`/${link}/${totalPages}`)
                break

            case 'next':
                if (page >= totalPages) return// (this.props.totalPages == (this.state.currentPage + 1)) ? null : this.state.currentPage = this.state.currentPage + 1
                this.props.history.push(`/${link}/${ +page + 1}`)
                break

            case 'prev':
                if (page <= 1) return
                this.props.history.push(`/${link}/${ +this.props.match.params.page - 1}`)
                break

            default:
                this.props.history.push(`/${link}/${name}`)
                break
        }
    }


    render() {
        const data = this.props.data ? this.props.data.map((item) => {
                item.imageLink = getImageLink(this.props.configApi, item.poster_path, 'poster', 'w185');
                return item
            }) : null

        return <ExploreContent
            data={data}
            handlePagination={this.handleClick}
            page={this.props.match.params.page}
            totalPages={this.props.totalPages}
            isLoading={this.props.isLoading}
            errorMessage={this.props.errorMessage}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.cachedFilms.isLoading,
        errorMessage: state.cachedFilms.errorMessage,
        data: state.cachedFilms.data.results,
        page: state.cachedFilms.data.page,
        totalPages: state.cachedFilms.data.total_pages,
        totalResults: state.cachedFilms.data.total_results,
        configApi: state.configApi
    }
};

// make action
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page, options) => dispatch(fetchDataMulti(page, options))
    };
};

withRouter(ExploreContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)