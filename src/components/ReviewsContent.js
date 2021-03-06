import React from 'react'
import {Link} from 'react-router-dom'
import {Row} from '../styled/Layout'
import {cropText} from "../actions/cropText"

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
            let truncatedText = cropText(originalText, 40)
            const text = this.state.expanded.includes(item.id) ? originalText : truncatedText
            return (
                <div key={item.id} className="my-2 p-2 btn-light" style={{cursor: `pointer`}} onClick={() => {this.toggleText(item.id)}}>
                    <p className="h4">{author}:</p>
                    <p className="py-2 px-4">{text}</p>
                </div>
                )
        }) : null

        console.log('this.props REVIEWS CONTENT')
        console.log(this.props)
        return (
            <Row round mb="30px" p="15px">
                <p className="h5 mt-2">{this.props.title}</p>
                <div className="">{list}</div>
                <Link to={{
                    pathname: `/film/${this.props.data.id}/reviews`,
                    state: { data: this.props.data }
                }}
                      className="btn btn-primary btn-block mb-5"
                >Expand Reviews</Link>
            </Row>
        )
    }
}

export default ReviewsContent