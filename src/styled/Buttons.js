import React from 'react'
import styled from 'styled-components'

const Button = styled.button.attrs({
    type: 'button',
    size: props => props.size || 'default'
})`
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export const GreenButton = Button.extend`
    background-color: #28a745;
    
    &:hover {
        color: #fff;
        background-color: #218838;
        border-color: #1e7e34;
    }
    
    &:active, &:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
`
export const RedButton = Button.extend`
    background-color: red;
`