import styled from 'styled-components'

export const Row = styled.div`
  margin-bottom: ${props => props.mb ? props.mb : 0};
  padding: ${props => props.p ? props.p : 0};
  border-radius: ${props => props.round ? '4px' : 'none'};
  box-shadow: ${props => props.shadow ? '0 4px 8px 0 rgba(0,0,0,0.2)' : 'none'};
  max-width: ${props => props.w ? props.w : '100%'};
  max-height: ${props => props.h ? props.h : 'auto'};
  overflow: ${props => props.overflow ? 'hidden' : 'auto'};
  background-color: white;
  display: flex;
  flex-wrap: wrap;
`

export const RowWithShift = styled(Row)`
  transition: transform 0.1s;
  &:hover {
    box-shadow: ${props => props.shadow ? '0 4px 8px 0 rgba(0,0,0,0.4)' : 'none'};
    transform: translate(5px, 0);
`

const Card = styled.div`
  position: relative;
  height: ${props => props.size === 'default' ? '325px' : '200px'};
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  

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



export const Col = styled.div`
  max-width: ${props => props.w ? props.w : '100%'};
  margin: ${props => props.m ? props.m : 0};
  padding: ${props => props.p ? props.p : 0};
  overflow: ${props => props.overflow ? 'hidden' : 'auto'};
  //background-color: ${props => props.loading ? 'gray': 'none'};
  flex-direction: ${props => props.col ? 'column' : 'row'};
  flex-basis: 0;
  flex-grow: 1;
`
export const FluidImage = styled.img`
  height: ${props => props.h ? props.h : '100%'};
  max-width: 100%;
  // object-fit: ${props => props.fit ? 'fit' : 'none'};
  object-fit: cover;
`