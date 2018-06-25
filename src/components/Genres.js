import React from 'react'

export default class Genres extends React.Component {

    getColor = (num) => {
        switch (num % 5) {
            case 0: return 'primary'
            case 1: return 'success'
            case 2: return 'info'
            case 3: return 'danger'
            case 4: return 'warning'
        }
    }

    render() {
        const genres = this.props.genres
        const items = genres
            ? genres.map((item, index) => {
                return <a
                    className={`badge badge-pill badge-${this.getColor(index)} mr-1`}
                    key={item.id}
                    data-id={item.id}
                    href="javascript:void(0)"
                >{item.name}</a>
            })
            : null
        console.log(this.props.genres)
        console.log(items)
        return <div onClick={(e) => this.props.handleClick(e)}>{items}</div>
    }
}