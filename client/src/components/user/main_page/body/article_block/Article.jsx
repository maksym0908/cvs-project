import React from 'react'
import classes from './Article.module.scss'
import image from '../../../../../assets/main-page-assets/business-person.png'

export const Article = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
            <div className={classes.link}>
                <div>
                    <h3> <b>Как найти работу</b> </h3>
                    <h5>Суперинструкция от Work.ua &#62;</h5>
                </div>
            </div>
            <div className={classes.image}>
                <img src={image} alt="business-person"/>
            </div>
            <div className={classes.btn}>
                <span>Подробнее</span>
            </div>
            </div>
        </div>
    )
}