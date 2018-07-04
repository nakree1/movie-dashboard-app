import React from 'react'
import Loader from '../components/Loader'




export default class PersonContent extends React.Component {

    getGender = (num) => {
        if (num === 1) return `Gender: Woman`
        if (num === 2) return `Gender: Man`
        return null
    }

    render() {
        const data = this.props.data
        console.log('PersonContent:')
        console.log(data)
        if (data === null) return <Loader />

        const gender = this.getGender(data.gender)

        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-4">
                        <img
                            src={data.imageLink ? data.imageLink : null}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col">
                        <h1>{data.name}</h1>
                        <h4>{gender}</h4>
                        <div className="text-muted">{data.place_of_birth}</div>
                        <div className="text-muted">{data.birthday}</div>
                        <p>{data.biography}</p>
                        <p>Person ID: {data.id}</p>
                        <button className="btn btn-primary" onClick={() => this.props.routeBack()}>Back</button>
                    </div>
                </div>
            </div>
        )
    }
}