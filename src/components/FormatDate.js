//1972-03-14
import React from 'react'

export default class FormatDate extends React.Component {

    parseDate = (date) => {
        const [year, month, day] = date.split('-')
        return new Date(year, month - 1, day)
    }

    render(){
        const {date, onlyYear = false, brackets = false, className} = this.props
        if (!date) return null
        const options = onlyYear
            ? {year: 'numeric'}
            : {year: 'numeric', month: 'long', day: 'numeric'}
        let myDate = this.parseDate(date).toLocaleString('en-US', options )

        if (brackets) myDate = `(${myDate})`

        return <span className={className}>{myDate}</span>
    }
}