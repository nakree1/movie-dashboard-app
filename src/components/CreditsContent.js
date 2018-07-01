import React from 'react'
import {Link} from 'react-router-dom'

export default class CreditsContent extends React.Component {
    getTable = (data, ...cols) => {
        const columns = cols.map((item) => {return <th scope="col">{item}</th>})
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
        // const data = typeof(this.props.data) !== 'undefined' ? this.props.data: null
        const cast = this.props.data.cast  ? this.props.data.cast.map((item, index) => {
            if (index > 4) return
            return (
                <tr key={item.id} className="bg-light mt-2">
                    <th scope="row">{index + 1}</th>
                    <td>{item.character}</td>
                    <td>{item.name}</td>
                </tr>
            )
        }) : null

        const crew = this.props.data.cast  ? this.props.data.crew.sort((a, b) => {return a.department > b.department ? 1 : -1})
            .map((item, index) => {
            if (index > 4) {}
            return (
                <tr key={item.id} className="bg-light mt-2">
                    <th scope="row">{index + 1}</th>
                    <td>{item.department}</td>
                    <td>{item.job}</td>
                    <td>{item.name}</td>
                </tr>
            )
        }) : null

        if (cast === 0 || crew === 0) return <div className="col">Empty</div>
        return (
            <div className="col">
                <p className="h5 mt-2">
                    {this.props.title}
                    <Link to={{
                              pathname: `/film/${this.props.movieId}/credits`,
                              state: { data: `hello from link. ID = ${this.props.movieId}` }
                          }}
                          className="btn btn-success"
                    >Expand Credits</Link>
                </p>
                {this.getTable(cast, '#', 'Character', 'Name')}
                {this.getTable(crew, '#', 'Department', 'Job', 'Name')}
            </div>
        )
    }
}