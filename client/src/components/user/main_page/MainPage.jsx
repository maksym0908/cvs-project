import React from 'react'
import { Header } from './header/Header'
import { Body } from './body/Body'
import { Footer } from './footer/Footer'

export const MainPage = (props) => {
    return (
        <>
            <Header data={props.data} />
            <Body />
            <Footer />
        </>

    )
}