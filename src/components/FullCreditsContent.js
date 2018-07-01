import React from 'react'

export default class FullCreditsContent extends React.Component {
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
        if (!this.props.data) return <h1>Empty</h1>
        const cast = this.props.data.cast  ? this.props.data.cast.map((item, index) => {
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
                </p>
                {this.getTable(cast, '#', 'Character', 'Name')}
                {this.getTable(crew, '#', 'Department', 'Job', 'Name')}
            </div>
        )
    }
}