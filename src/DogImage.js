import * as React from 'react'
import './App.css'

export const DogImage = (props) => {
    const { url } = props
    return (
        <img src={url} />
    )
}