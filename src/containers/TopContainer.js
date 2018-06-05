import React, { PropTypes} from 'react'
import {fetchDataTop} from '../actions/fetchData'
import {connect} from 'react-redux'
import {Link, Redirect, withRouter, browserHistory} from 'react-router-dom'
import {history} from 'react-router'
import getImageLink from '../actions/getImageLink'
import TopContent from '../components/TopContent'


class TopContainer extends React.Component {

    componentDidMount() {
        // console.log('--mounting TopContainer')
        // console.log(this.props)

        this.props.fetchData((this.props.match.params.page ? this.props.match.params.page : "1"), {
            validateStatus: (status) => {
                return status === 200;
            }
        })
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.match.params.page === this.props.match.params.page) return

        this.props.fetchData((nextProps.match.params.page ? nextProps.match.params.page : "1"), {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            }
        })
    }

    componentWillUnmount() {
        // console.log('--unmount TopContainer')
    }

    handleClick = (e) => {
        const page = this.props.match.params.page
        const totalPages = this.props.totalPages
        switch (e.target.name) {
            case 'return':
                // this.state.currentPage = 1
                this.props.history.push(`/top/1`)
                break;

            case 'next':
                if (page >= totalPages) return// (this.props.totalPages == (this.state.currentPage + 1)) ? null : this.state.currentPage = this.state.currentPage + 1
                this.props.history.push(`/top/${ +page + 1}`)

                break;

            case 'prev':
                if (page <= 1) return
                this.props.history.push(`/top/${ +this.props.match.params.page - 1}`)
                break;
        }
    }


    render() {
        const data = this.props.data ? this.props.data.map((item) => {
                item.imageLink = getImageLink(this.props.configApi, item.poster_path, 'poster', 'w185');
                return item
            }) : null





        return <TopContent
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
        isLoading: state.cachedTop.isLoading,
        errorMessage: state.cachedTop.errorMessage,
        data: state.cachedTop.data.results,
        page: state.cachedTop.data.page,
        totalPages: state.cachedTop.data.total_pages,
        totalResults: state.cachedTop.data.total_results,
        configApi: state.configApi
    }
};

// make action
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page) => dispatch(fetchDataTop(page))
    };
};

withRouter(TopContainer)
export default connect(mapStateToProps, mapDispatchToProps)(TopContainer)