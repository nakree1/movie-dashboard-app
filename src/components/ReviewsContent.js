import React from 'react'

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
            if (originalText.length > 100) truncatedText = originalText.slice(0, 100).trim().concat('...')
            const text = this.state.expanded.includes(item.id) ? originalText : truncatedText
            return (
                <div key={item.id} className="bg-light mt-2">
                    <button className="btn btn-primary btn-sm  d-inline" onClick={() => {this.toggleText(item.id)} }>{author}</button>
                    <p className="">{text}</p>
                </div>
                )
        }) : null


        return (
            <div className="col-6">
                <p className="h5 mt-2">{this.props.title}</p>
                <div className="">{list}</div>
            </div>
        )
    }
}

export default ReviewsContent