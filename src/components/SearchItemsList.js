import React from 'react'

class SearchItemsList extends React.Component {

    render() {
        const items = this.props.data || null

        const itemsList = items ? items.map((item) => {
            return <li key={item.id}><a href={`#/${item.title ? 'film' : 'person'}/${item.id}`} data-id={item.id}>{item.title || item.name}</a></li>
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