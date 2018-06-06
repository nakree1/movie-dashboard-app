import React from 'react'
import {Link} from 'react-router-dom'

class SavedContent extends React.Component {

    render() {
        console.log(this.props)
        const list = (this.props.data && this.props.data.length !== 0)
        ? this.props.data.map((item) => {
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
                                <button name={item.id} className="btn btn-sm btn-danger btn-block">Delete</button>
                            </p>
                        </div>
                    </div>
                )
        })
        : <div className="alert alert-info w-100 text-center">No items</div>
        console.log(list)

        return <div className="container-fluid" onClick={this.props.deleteFromSaved}>
                    <div className="row">
                        <div className="col d-flex flex-wrap">
                            {list}
                        </div>
                    </div>
                 </div>
    }
}

export default SavedContent