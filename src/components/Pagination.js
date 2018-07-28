import React from 'react'
import styled from 'styled-components'
import {navBackActive} from '../constants/colors'
import Loader from './Loader'
// import debounce from 'lodash-es/debounce'

const PagButton = styled.button`
  cursor: pointer;
  vertical-align: middle;
  user-select: none;
  border: none;
  background-color: ${props => props.disabled ? '#9b9b9b' : '#e1e1e1'};
  color: ${props => props.disabled ? 'white' : 'black'};
  min-width: 40px;
  padding: 10px 0;
  
  &:active {
    
  }
  
  &:hover {
    background-color: #bcbcbc;
  }
  
  &:focus {
    //outline: 6px solid #22A1B5;
    ////background-color: #a8a8a8;
    //z-index: 200;
  }
  
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`

const PagCurrentButton = styled(PagButton)`
  background-color: #03bfcb;
  
  &:hover {
    background-color: #038f9b;
  }
`


export default class Pagination extends React.Component {
    getPagination = (current, max, range = 5) => {
        let c = current
        let m = max
        let r = range
        let delta = r % 3
        let arr = []

        let right = c + delta > m ? m : c + delta
        let left = c - delta <= 1 ? 1 : c - delta

        let diff = right - left + 1

        let diffLeft = left - c
        let diffRight = right - c

        if (diffRight !== 2) left = left - diffRight
        if (diffLeft !== -2) right = right - diffLeft

        if (diffLeft === 0) right = right + diffRight
        if (diffRight === 0) left = left + diffLeft

        for (let i = left; i <= right; i++) {
            arr.push(i)
        }

       return arr
    }

    // << < 6 8 9 10 11> >>
    render() {

        let {page, totalPages, isLoading} = this.props
        page = +page
        const prevArrows = ['<<', '<']
        const nextArrows = ['>', '>>']

        if (isLoading) {
            const emptyButtons = Array(5).fill('-')
            const pagination = [...prevArrows, ...emptyButtons, ...nextArrows]
            const newButtons = pagination.map((item, index) => {
                return <PagButton key={index} >{item}</PagButton>
            })

            return (
                <div>
                    {newButtons}
                </div>
            )

        }

        const pages = this.getPagination(page, totalPages)
        const pagination = [...prevArrows, ...pages, ...nextArrows]

        // console.log(pagination)
        // console.log(this.getPagination(1, 12))
        // console.log(this.getPagination(2, 12))
        // console.log(this.getPagination(3, 12))
        // console.log(this.getPagination(4, 12))
        // console.log(this.getPagination(5, 12))
        // console.log(this.getPagination(6, 12))
        // console.log(this.getPagination(7, 12))
        // console.log(this.getPagination(8, 12))
        // console.log(this.getPagination(9, 12))
        // console.log(this.getPagination(10, 12))
        // console.log(this.getPagination(11, 12))
        // console.log(this.getPagination(12, 12))
        // console.log(this.getPagination(1, 3))
        // console.log(this.getPagination(2, 3))
        // console.log(this.getPagination(3, 3))
        // console.log(this.getPagination(49, 50))
        // console.log(this.getPagination(50, 50))

        const handler = this.props.handler
        const newButtons = pagination.map((item) => {
            let name
            let disabled = false

            switch (item) {
                case '<<':
                    name = 'first'
                    if (page <= 1) disabled = true
                    break

                case '<':
                    name = 'prev'
                    if (page <= 1) disabled = true
                    break

                case '>':
                    name = 'next'
                    if (page >= totalPages) disabled = true
                    break

                case '>>':
                    name = 'last'
                    if (page >= totalPages) disabled = true
                    break

                default:
                    name = item
            }

            if (item === page) return <PagCurrentButton key={name} onClick={() => {handler(name)}}>{item}</PagCurrentButton>

            return <PagButton key={name} onClick={() => {handler(name)}} disabled={disabled}>{item}</PagButton>
        })

        return <div>{newButtons}</div>
    }
}