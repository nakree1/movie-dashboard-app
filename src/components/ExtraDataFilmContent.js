import React from 'react'
import {Link} from 'react-router-dom'
import SmallFilmCard from './SmallFilmCard'
import styled from 'styled-components'

const SliderContainer = styled.div`
  display: block;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 0;
  //position:relative;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  position: relative;
  left: ${props => props.shift || '0px'};
  //transition: left 0.1s;
  //top: 0;
`

const ScrollButton = styled.button.attrs({
    navType: props => props.navType
})`
  opacity: 0.8;
  width: 50px;
  background-color: black;
  color: white;
  border: none;
  position: absolute;
  left: 0;
  top: 0;
  height: 80%;
  z-index: 100;
  
  &:nth-last-child(1) {
    left: auto;
    right: 0;
  }
  

`

class ExtraDataFilmContent extends React.Component {
    constructor(props) {
        super(props)

        this.container = null

        this.state = {
            containerWidth: (Object.keys(this.props.data).length * (120 + 15) - 15) || 0,
            containerShift: 0
        }
    }

    handleNav = (e) => {
        const direction = e.target.getAttribute('navType')
        const {containerWidth, containerShift} = this.state
        let nextShift



        if (direction === 'next') {


// containerShift: Math.max(containerShift - 140, -containerWidth)
            this.setState({
                containerShift: containerShift - 140
            })
        }

        if (direction === 'prev') {
            this.setState({
                containerShift: containerShift + 140
            })
        }

    }

    componentDidMount() {
        this.setState({
            containerWidth: this.container.clientWidth
        })
    }

    render() {
        console.log('containerWidth--------------')
        console.log(this.state.containerWidth)
        console.log('containerShift--------------')
        console.log(this.state.containerShift)
        const data = this.props.data
        // console.log('RecommendFilmsContent data 1 is:')
        // console.log(data)
        const list = Object.keys(data).length !== 0 ? data.map((item) => {
            return (
                <SmallFilmCard width={'120px'} margin={'15px'} {...item} />

                )
        }): null

        return (
            <div>
                <p className="h5 mt-2">{this.props.title}</p>
                <SliderContainer >
                    {/*<ScrollButton navType={'prev'} onClick={this.handleNav}> &lt; </ScrollButton>*/}
                    <FlexContainer
                        innerRef={(elem) => {this.container = elem}}
                        shift={`${this.state.containerShift}px`}
                    >
                        {list}
                    </FlexContainer>
                    {/*<ScrollButton navType="next" onClick={this.handleNav}> &gt; </ScrollButton>*/}
                </SliderContainer>
            </div>
        )
    }
}
export default ExtraDataFilmContent