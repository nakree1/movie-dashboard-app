import React from 'react'
import ListElement from './ListElement'
import getImageLink from '../actions/getImageLink'

class SearchItemsList extends React.Component {

    render() {
        const items = this.props.data || null
        const mediaType = this.props.type

        // const itemsList = items ? items.map((item) => {
        //     return <li key={item.id}>
        //         <a href={`#/${item.title ? 'film' : 'person'}/${item.id}`} data-id={item.id}>{item.title || item.name}</a>
        //     </li>
        // }) : null

        const itemsList = items ? items.map((item) => {
            const imageLink = getImageLink(this.props.configApi, item.poster_path || item.profile_path, 'poster', 'w342')
            return <ul key={item.id}><ListElement imageLink={imageLink} type={mediaType} {...item} /></ul>
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