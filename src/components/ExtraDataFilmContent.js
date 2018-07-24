import React from 'react'
import {Link} from 'react-router-dom'
import SmallFilmCard from './SmallFilmCard'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

class ExtraDataFilmContent extends React.Component {
    render() {
        const data = this.props.data
        console.log('RecommendFilmsContent data 1 is:')
        console.log(data)
        const list = Object.keys(data).length !== 0 ? data.map((item) => {
            return (
                <SmallFilmCard {...item} />

                )
        }): null

        return (
            <div>
                <p className="h5 mt-2">{this.props.title}</p>
                <FlexContainer>{list}</FlexContainer>
            </div>
        )
    }
}
export default ExtraDataFilmContent