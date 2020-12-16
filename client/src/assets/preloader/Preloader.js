import React from 'react'
import image from './Spinner.gif'

export const Preloader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '20%'}}><img alt="Loading" style={{width: 100, height: 100 }} src={image} /></div>
    )
}



