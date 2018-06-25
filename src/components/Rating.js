import React from 'react'

export default class Rating extends React.Component {
    render() {
        let rate = parseFloat(this.props.rate) || null
        let style = null

        if (typeof rate !== 'number' || rate === 0) {
            rate = '-.-'
        } else {
            rate = rate.toFixed(1)
        }

        if (rate >= 7) style = 'text-success'
        if (rate < 7 && rate >= 5) style = 'text-warning'
        if (rate < 5) style = 'text-danger'
        if (rate === '-.-') style = 'text-secondary'

        return <div className="flex-nowrap d-flex">Rating <p className={`${style} font-weight-bold  pl-2 m-0`}>{rate}</p></div>
    }
}