import React from 'react'

class SearchItemsList extends React.Component {
    handleClick = (e) => {
        e.preventDefault()
        this.props.handleClick(`/film/${e.target.dataset.id}`)
    }

    render() {
        const items = this.props.data || null

        const itemsList = items ? items.map((item) => {
            return <li key={item.id}><a href={`#/film/${item.id}`} data-id={item.id}>{item.title || item.name}</a></li>
        }) : null

        const content = (itemsList === null || itemsList.length === 0)
            ? <p className="text-muted text-center">No Results</p>
            : <ul>{itemsList}</ul>

        return (
            <div>
                <h4 className="text-secondary">{this.props.header}</h4>
                {content}
            </div>
        )
    }
}

export default SearchItemsList