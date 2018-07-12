import React from 'react'
import Pagination from './Pagination'
import FilmCard from "./FilmCard";
import Loader from "./Loader";


export default class ExploreContent extends React.Component {
    render() {
        console.log('render ExploreContent')
        const {data, isLoading, errorMessage} = this.props
        if (errorMessage.length !== 0) return <div className="alert alert-danger">Error: {errorMessage}</div>
        if (isLoading) return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="alert alert-info">Page: {this.props.page} Total: {this.props.totalPages}</div>
                </div>
                <div className="row d-flex justify-content-center mb-5">
                    <Pagination
                        handler={this.props.handlePagination}
                        page={this.props.page}
                        totalPages={this.props.totalPages}
                        isLoading={this.props.isLoading}
                    />
                </div>
                <div className="row">
                    <div className="col d-flex flex-wrap">
                        <Loader />
                    </div>
                </div>
            </div>
        )

        const list = (data !== null) ? data.map((item) => {
            return (
                <FilmCard
                    key={item.id}
                    id={item.id}
                    imageLink={item.imageLink}
                    title={item.title}
                    vote_average={item.vote_average}
                    release_date={item.release_date}
                />
            )
        }) : null


        return (
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="alert alert-info">Page: {this.props.page} Total: {this.props.totalPages}</div>
                    </div>
                    <div className="row d-flex justify-content-center mb-5">
                        <Pagination
                            handler={this.props.handlePagination}
                            page={this.props.page}
                            totalPages={this.props.totalPages}
                            isLoading={this.props.isLoading}
                        />
                    </div>
                    <div className="row">
                        <div className="col d-flex flex-wrap">
                            {list}
                        </div>
                    </div>
                </div>
            )
    }
}
