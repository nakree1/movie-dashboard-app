import React from 'react'
import {fetchDataTop} from '../actions/fetchData'
import {connect} from 'react-redux'
import getImageLink from '../actions/getImageLink'
import axios from 'axios'

class TopContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 1
        }

    }

    componentDidMount() {
        console.log('--mounting TopContent')
        this.requestSource = axios.CancelToken.source()
        this.props.fetchData(1, {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            },
            cancelToken: this.requestSource.token
        })
    }

    componentWillUpdate() {

    }

    componentWillUnmount() {
        this.requestSource.cancel('cancel request by user')
        console.log('--unmount TopContent')
    }

    handleClick = (e) => {
        switch (e.target.name) {
            case 'return':
                this.state.currentPage = 1
                break;

            case 'next':
                (this.props.totalPages == (this.state.currentPage + 1)) ? null : this.state.currentPage = this.state.currentPage + 1
                break;

            case 'prev':
                (0 === (this.state.currentPage - 1)) ? null : this.state.currentPage = this.state.currentPage - 1
                break;
        }

        this.props.fetchData(this.state.currentPage, {
            validateStatus: (status) => {
                return status === 200; // Reject only if (false) the status code is not equal 200
            },
            cancelToken: this.requestSource.token
        })

    }

    render() {
        console.log('TOP props:')
        console.log(this.props)
        console.log('TOP state:')
        console.log(this.state)

        const {data, isLoading, errorMessage} = this.props
        const buttonGroup =
            <div className="btn-group btn-group ">
               <button className="btn btn-outline-secondary" name="return" onClick={this.handleClick}>Return to page 1</button>
               <button className="btn btn-outline-secondary" name="prev" onClick={this.handleClick}>Prev</button>
               <button className="btn btn-outline-secondary" name="next" onClick={this.handleClick}>Next</button>
            </div>

        const list = data ? data.map((item) => {
            return (
                <div className="card mb-4 mx-2" style={{width: '15%'}} key={item.id}>
                    <img
                        src={getImageLink(this.props.configApi,item.poster_path, 'poster', 'w185')}
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <p className="card-text">
                            {item.title}
                        </p>
                    </div>
                </div>
            )
        }) : null

        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        else if (isLoading) return (
            <div className="alert alert-info">Data is loading...</div>
        )
        else return(
                <div className="container-fluid">
                    <div className="row justify-content-center my-2">
                        <div className="alert alert-info">Page: {this.state.currentPage} Total: {this.props.totalPages}</div>
                    </div>
                    <div className="row d-flex justify-content-center mb-5">
                        {buttonGroup}
                    </div>
                    <div className="row">
                        <div className="col d-flex flex-wrap justify-content-between">
                            {list}
                        </div>
                    </div>
                </div>
            )
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

export default connect(mapStateToProps, mapDispatchToProps)(TopContent)