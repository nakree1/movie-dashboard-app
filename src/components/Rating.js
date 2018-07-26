import React from 'react'
import styled from 'styled-components'

const BadgeRating = styled.span.attrs({
    color: props => props.color || null
})`
  background-color: ${props => props.color};
  color: white;
  border-radius: 0 4px 4px 0;
  padding: 5px;
`
const TextRating = styled.span.attrs({
    color: props => props.color || null
})`
  color: ${props => props.color}
`

export default class Rating extends React.Component {
    render() {
        let rate = parseFloat(this.props.rate) || null
        let color = null

        if (typeof rate !== 'number' || rate === 0) {
            rate = '-'
        } else {
            rate = rate.toFixed(1)
        }

        if (rate >= 7) color = '#28a745'
        if (rate < 7 && rate >= 5) color = '#ffc107'
        if (rate < 5) color = '#dc3545'
        if (rate === '-') color = '#6c757d'

        if (this.props.badge && this.props.onlyNumber) {
            return <BadgeRating color={color}>{rate}</BadgeRating>
        }

        if (this.props.badge) {
            return <BadgeRating color={color}>Rating: {rate}</BadgeRating>
        }

        if (this.props.onlyNumber) {
            return <TextRating color={color}>{rate}</TextRating>
        }

        return <TextRating color={color}>Rating: {rate}</TextRating>
    }
}