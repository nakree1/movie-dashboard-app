import React from 'react'
import {Link} from 'react-router-dom'


class TopContent extends React.Component {

    handlePagination = (e) => {
        this.props.handlePagination(e)
        // console.log('handle from topcontent')
    }

    render() {
        console.log(`--Render TopContent`)
        // console.log('TOP props:')
        // console.log(this.props)
        // console.log('TOP state:')
        // console.log(this.state)

        const {data, isLoading, errorMessage} = this.props

        const buttonGroup =
            <div className="btn-group btn-group ">
                <button className="btn btn-outline-secondary" name="return" onClick={this.handlePagination}>
                    First Page
                </button>
                <button className="btn btn-outline-secondary" name="prev" onClick={this.handlePagination}>
                    Prev
                </button>
                <button className="btn btn-outline-secondary" name="next" onClick={this.handlePagination}>
                    Next
                </button>
            </div>




        const list = (data !== null) ? data.map((item) => {
            return (
                <div className="card mb-4 mx-2" style={{width: '15%'}} key={item.id}>
                    <img
                        src={item.imageLink}
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <p className="card-text">
                            <Link to={`/film/${item.id}`} >
                                {item.title}
                            </Link>
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
                        <div className="alert alert-info">Page: {this.props.page} Total: {this.props.totalPages}</div>
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

export default TopContent
