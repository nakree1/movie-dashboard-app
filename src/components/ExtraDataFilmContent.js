import React from 'react'
import {Link} from 'react-router-dom'

class ExtraDataFilmContent extends React.Component {
    render() {
        console.log('RecommendFilmsContent data 1 is:')
        console.log(this.props.data)
        const data = typeof(this.props.data.results) !== 'undefined' ? this.props.data.results : null
        const list = data ? data.map((item) => {
            return <Link to={`/film/${item.id}`} key={item.id} className="btn btn-outline-info m-1">{item.title}</Link>
        }) : null

        console.log('RecommendFilmsContent data 2 is:')
        console.log(data)
        return (
            <div>
                <p className="h5 mt-2">{this.props.title}</p>
                <div className="">{list}</div>
            </div>
        )
    }
}
export default ExtraDataFilmContent