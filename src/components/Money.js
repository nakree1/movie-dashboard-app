import React from 'react'

export default class Money extends React.Component {
    formatNumber = (num) => {
        num = Math.round(num / 1000) * 1000
        return num.toLocaleString('ru-RU') + ' USD'
    }

    render() {
        const format = this.formatNumber
        let budget = parseInt(this.props.budget) || null
        let revenue = parseInt(this.props.revenue) || null
        let profit = (budget && revenue) ? revenue - budget : null

        budget = format(budget)
        revenue = format(revenue)
        profit = format(profit)

        // let style = null
        //
        // if (typeof rate !== 'number' || rate === 0) {
        //     rate = '-.-'
        // } else {
        //     rate = rate.toFixed(1)
        // }
        //
        // if (rate >= 7) style = 'text-success'
        // if (rate < 7 && rate >= 5) style = 'text-warning'
        // if (rate < 5) style = 'text-danger'
        // if (rate === '-.-') style = 'text-secondary'

        return <div className="">
            <div className="text-danger my-0 py-0 mr-2 d-inline font-weight-bold">Budget: {budget}</div>
            <br/>
            <div className="text-success my-0 py-0 mr-2 d-inline font-weight-bold">Revenue: {revenue}</div>
            <br/>
            <div className="text-primary my-0 py-0 mr-2 d-inline font-weight-bold">Profit: {profit}</div>
        </div>
    }
}