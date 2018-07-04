import React from 'react'
import {Link} from 'react-router-dom'

class ReviewsContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: []
        }
    }

    toggleText = (id) => {
        if (this.state.expanded.includes(id)) {
            this.setState({
                expanded: this.state.expanded.filter((item) => {return item !== id})
            })
        } else {
            this.setState({
                expanded: this.state.expanded.concat(id)
            })
        }
    }

    render() {
        const data = typeof(this.props.data.results) !== 'undefined' ? this.props.data.results : null
        const list = data ? data.map((item) => {
            const author = item.author
            const originalText = item.content
            let truncatedText = originalText
            if (originalText.length > 200) truncatedText = originalText.slice(0, 200).trim().concat('...')
            const text = this.state.expanded.includes(item.id) ? originalText : truncatedText
            return (
                <div key={item.id} className=" my-2 p-2 btn-light" style={{cursor: `pointer`}} onClick={() => {this.toggleText(item.id)}}>
                    <p className="h2 text-center">{author}</p>
                    <p className="py-2 px-4">{text}</p>
                </div>
                )
        }) : null


        return (
            <div className="col">
                <p className="h5 mt-2">{this.props.title}</p>
                <div className="">{list}</div>
                <Link to={{
                    pathname: `/film/${this.props.movieId}/credits`,
                    state: { data: this.props.data }
                }}
                      className="btn btn-primary btn-block mb-5"
                >Expand Reviews</Link>
            </div>
        )
    }
}

export default ReviewsContent