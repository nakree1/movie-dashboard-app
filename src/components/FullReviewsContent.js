import React from 'react'
import { Link } from 'react-router-dom'
import Loader from "./Loader";

export default class FullReviewsContent extends React.Component {

    getTable = (data, ...cols) => {
        const columns = cols.map((item, index) => {return <th key={index} scope="col">{item}</th>})
        return (
            <table className="table table-borderless">
                <thead>
                <tr>
                    {columns}
                </tr>
                </thead>
                <tbody>
                {data}
                </tbody>
            </table>
        )
    }

    render() {
        if (!this.props.data) return <Loader/>
        const results = this.props.data.results.map((item, index) => {
            return (
                <tr key={item.id} className="bg-light mt-2">
                    <th scope="row">{index + 1}</th>
                    <td>{item.author}</td>
                    <td>{item.content}</td>
                </tr>
            )
        })

        return (
            <div className="col">
                <button className="btn btn-primary btn-lg" onClick={() => this.props.routeBack()}>Back</button>
                {this.getTable(results, '#', 'Author', 'Review')}
            </div>
        )
    }
}