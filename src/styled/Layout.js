import styled from 'styled-components'

export const Row = styled.div`
  margin-bottom: ${props => props.mb ? props.mb : 0};
  padding: ${props => props.p ? props.p : 0};
  border-radius: ${props => props.round ? '4px' : 'none'};
  box-shadow: ${props => props.shadow ? '0 4px 8px 0 rgba(0,0,0,0.2)' : 'none'};
  max-width: ${props => props.w ? props.w : '100%'};
  max-height: ${props => props.h ? props.h : 'auto'};
  background-color: white;
  display: flex;
  flex-wrap: wrap;
`
export const Col = styled.div`
  max-width: ${props => props.w ? props.w : '100%'};
  margin: ${props => props.m ? props.m : 0};
  padding: ${props => props.p ? props.p : 0};
  //background-color: ${props => props.loading ? 'gray': 'none'};
  flex-basis: 0;
  flex-grow: 1;
`
export const FluidImage = styled.img`
  max-height: ${props => props.h ? props.h : '100%'};
  max-width: 100%;
  object-fit: ${props => props.fit ? 'fit' : 'none'};

`