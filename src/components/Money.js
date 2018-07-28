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

        return (
            <div>
                <div>Budget: {budget}</div>
                <div>Revenue: {revenue}</div>
                <div>Profit: {profit}</div>
            </div>
        )

    }
}

{/*<table className="table table-borderless">*/}
    {/*<tbody>*/}
    {/*<tr>*/}
        {/*<td>Budget:</td>*/}
        {/*<td>{budget}</td>*/}
    {/*</tr>*/}
    {/*<tr>*/}
        {/*<td>Revenue:</td>*/}
        {/*<td>{revenue}</td>*/}
    {/*</tr>*/}
    {/*<tr>*/}
        {/*<td>Profit:</td>*/}
        {/*<td>{profit}</td>*/}
    {/*</tr>*/}
    {/*</tbody>*/}
{/*</table>*/}