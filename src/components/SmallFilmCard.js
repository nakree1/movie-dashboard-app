import React from 'react'
import {Link} from 'react-router-dom'
import Rating from "./Rating";
import styled from 'styled-components'
import {navBackActive, navLink} from '../constants/colors'

const StyledLink = styled(Link)`
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`

const Card = styled.div`
  width: ${props => props.width || '120px'};
  margin-right: ${props => props.margin || '15px'};
  position: relative;
  height: 200px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: transform 0.1s;
  
  //&:nth-last-child(1) {
  //  margin-right: 0;
  //}

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
  margin: 0;
  text-align: center;
  padding: 2px 5px;
  font-size: 0.8rem;
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

export default class SmallFilmCard extends React.Component {
    render() {
        const {id, imageLink, title, vote_average, release_date, width, margin} = this.props;
        return (
            <StyledLink to={`/film/${id}`} >
                <Card width={width} margin={margin}>
                    <CardBadge position={'10px'}>
                        <Rating badge={true} onlyNumber={true} rate={vote_average}/>
                    </CardBadge>

                    <CardImage>
                        <StyledImage src={imageLink}/>
                    </CardImage>

                    <CardBody>
                        {title}
                    </CardBody>

                </Card>
            </StyledLink>
        )
    }
}