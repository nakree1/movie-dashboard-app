import React from 'react'

export default class CreditsContent extends React.Component {
    render() {
        // const data = typeof(this.props.data) !== 'undefined' ? this.props.data: null
        const cast = this.props.data.cast  ? this.props.data.cast.map((item, index) => {
            return (
                <tr key={item.id} className="bg-light mt-2">
                    <th scope="row">{index + 1}</th>
                    <td>{item.character}</td>
                    <td>{item.name}</td>
                </tr>
            )
        }) : null


        return (
            <div className="col">
                <p className="h5 mt-2">{this.props.title}</p>
                <table className="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Character</th>
                        <th scope="col">Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cast}
                    </tbody>
                </table>
            </div>
        )
    }
}