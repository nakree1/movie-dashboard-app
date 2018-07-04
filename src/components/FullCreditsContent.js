import React from 'react'
import { Link } from 'react-router-dom'
import Loader from "./Loader";

export default class FullCreditsContent extends React.Component {
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
        const cast = this.props.data.cast  ? this.props.data.cast.map((item, index) => {
            return (
                <tr key={item.id} className="bg-light mt-2">
                    <th scope="row">{index + 1}</th>
                    <td>{item.character}</td>
                    <td>
                        <Link to={{
                            pathname: `/person/${item.id}`,
                            state: { id: item.id }
                        }}>
                            {item.name}
                        </Link>
                    </td>
                </tr>
            )
        }) : null

        const crew = this.props.data.cast  ? this.props.data.crew.sort((a, b) => {return a.department > b.department ? 1 : -1})
            .map((item, index) => {
                return (
                    <tr key={item.id} className="bg-light mt-2">
                        <th scope="row">{index + 1}</th>
                        <td>{item.department}</td>
                        <td>{item.job}</td>
                        <td><Link to={`/person/${item.id}`}>{item.name}</Link></td>

                    </tr>
                )
            }) : null

        if (cast === 0 || crew === 0) return <div className="col">Empty</div>

        return (
            <div className="col">
                <p className="h5 mt-2">
                    {this.props.title}
                    <button className="btn btn-primary btn-lg" onClick={() => this.props.routeBack()}>Back</button>
                </p>
                {this.getTable(cast, '#', 'Character', 'Name')}
                {this.getTable(crew, '#', 'Department', 'Job', 'Name')}
            </div>
        )
    }
}