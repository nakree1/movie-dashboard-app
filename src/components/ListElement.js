import React from 'react'
import {StyledLink} from "../styled/Buttons"
import {Row, Col, FluidImage} from "../styled/Layout"
import {Link} from 'react-router-dom'
import Rating from "./Rating";
import FormatDate from "./FormatDate";
import styled from 'styled-components'
import {navBackActive, navLink} from '../constants/colors'

export default class ListElement extends React.Component {
    render() {
        const {id, imageLink, title, vote_average, release_date, size = 'default', overview} = this.props;
        console.log('LIST PROPS ____________________')
        console.log(this.props)
        return (
            <StyledLink to={`/film/${id}`} w="90%" >
                <Row  round mb="10px" h="200px" shadow>
                    <Col w="10%">
                        <FluidImage src={imageLink} h="auto" fit/>
                    </Col>

                    <Col p="15px">
                        <h3>{title}</h3>
                        <p>{overview}</p>
                    </Col>

                </Row>
            </StyledLink>
        )
    }
}