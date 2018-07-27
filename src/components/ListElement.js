import React from 'react'
import {StyledLink} from "../styled/Buttons"
import {Row, Col, FluidImage, RowWithShift} from "../styled/Layout"
import {cropText} from "../actions/cropText"
import {Link} from 'react-router-dom'
import Rating from "./Rating";
import FormatDate from "./FormatDate";
import styled from 'styled-components'
import {navBackActive, navLink} from '../constants/colors'

const YearBadge = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  background-color: rebeccapurple;
  padding: 4px 6px;
  border-radius: 4px;
  color: white;
`
const Badge = styled.div`
  display: inline-block;
  font-size: 1rem;
  border-radius: 4px;
`


export default class ListElement extends React.Component {
    render() {
        const {id, imageLink, vote_average, media_type, overview} = this.props;
        let {title, release_date} = this.props

        let croppedOverview = cropText(overview ? overview : '', 40)

        let link = `/film/${id}`
        let year = (
            <YearBadge>
                <FormatDate date={release_date} onlyYear={true}/>
            </YearBadge>
        )


        if (media_type === 'person') {
            link = `/person/${id}`
            title = this.props.name
            year = null
        }

        console.log('LIST PROPS ____________________')
        console.log(this.props)


        return (
            <StyledLink to={link} w="90%" >
                <RowWithShift mb="20px" h="200px" shadow round>
                    <Col w="130px">
                        <FluidImage src={imageLink} h="100%" fit/>
                    </Col>

                    <Col m="15px" overflow={true} col={true}>
                        <h3>
                            {title}
                            {year}
                        </h3>


                        {/*<Badge>*/}
                            {/*<Rating rate={vote_average} background={true}/>*/}
                        {/*</Badge>*/}

                        <p>{croppedOverview}</p>

                    </Col>

                </RowWithShift>
            </StyledLink>
        )
    }
}