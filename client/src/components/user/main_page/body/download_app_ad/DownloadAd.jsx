import React from 'react'
import classes from './DownloadAd.module.scss'
import image from '../../../../../assets/main-page-assets/workua-mob.png'

export const DownloadAd = () => {
    return (
        <div className={classes.container}>
            <a href="https://www.work.ua/ru/mobile-app/" className={classes.wrapper}>
            <div className={classes.link}>
                <div>
                    <h5> Скачивайте мобильное приложение Krivoruk.ua</h5>
                </div>
            </div>
            <div className={classes.image}>
                <img src={image} alt="work-ua icon"/>
            </div>
            <div className={classes.btn}>
                <span>Подробнее</span>
            </div>
            </a>
        </div>
    )
}