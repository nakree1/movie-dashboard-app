import React from 'react'
import {Link} from 'react-router-dom'
import Rating from "./Rating";
import FormatDate from "./FormatDate";
import styled from 'styled-components'
import {StyledLink} from "../styled/Buttons"
import {navBackActive, navLink} from '../constants/colors'

const Card = styled.div`
  position: relative;
  height: ${props => props.size === 'default' ? '325px' : '200px'};
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: transform 0.1s;

  &:hover {
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.4);
    transform: translate(0, -5px);
    
    div {
        display: block;
        color: black;
    }
    
    p {
      color: black;
    }
    
  }
`

const CardImage = styled.div`
  height: 80%;
`

const CardBody = styled.p`
  text-align: center;
  padding: 5px 10px;
  font-size: 1rem;
  color: ${navLink};
  //font-weight: 400;
`

const StyledImage = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`
const CardBadge = styled.div`
  position: absolute;
  display: none;
  top: ${props => props.position || '20px'};
`

export default class FilmCard extends React.Component {
    render() {
        const {id, imageLink, title, vote_average, release_date, size = 'default'} = this.props;
        return (
            <StyledLink to={`/film/${id}`} >
                <Card size={size}>
                    {/*<CardBadge position={'10px'}>*/}
                        {/*Year: <FormatDate date={release_date} onlyYear={true}/>*/}
                    {/*</CardBadge>*/}

                    <CardBadge position={'20px'}>
                        <Rating badge={true} rate={vote_average}/>
                    </CardBadge>

                    <CardImage>
                        <StyledImage src={imageLink}/>
                    </CardImage>

                    <CardBody>
                        {title}
                        {/*<Rating rate={vote_average}/>*/}
                    </CardBody>

                </Card>
            </StyledLink>
        )
    }
}