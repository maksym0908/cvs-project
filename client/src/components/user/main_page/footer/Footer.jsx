import React, { useState, useEffect } from 'react'
import classes from './Footer.module.scss'
import android from '../../../../assets/main-page-assets/android.png'
import ios from '../../../../assets/main-page-assets/ios.png'
import { Right, Up, Down } from '../../../../assets/svgs/Svgs'

export const Footer = () => {
    const [language, setLanguage] = useState()

    useEffect(() => {
        let footer = document.getElementById("footer")
        document.addEventListener('click', function (event) {
            let isClickInside = footer.contains(event.target)
            if (!isClickInside) {
                setLanguage(false)
            }

        })
    }, [])



    return (
        <div className={classes.container}>
                <div id="footer" className={classes.wrapper} onClick={language ? () => setLanguage(false) : null}>
            <div className={classes.links}>
                <div className={classes.lng}>
                    <span onClick={() => setLanguage(!language ? true : false)}>Русский</span>
                    {!language ? <Down/> : <Up />}
                    {language ? <div className={classes.dropDown}>

                        <a href="">Украинский</a>

                        <a href="">Русский</a>

                        <a href="">English</a>


                    </div> : null}
                </div>
                <div>
                    <a href="https://apps.apple.com/us/app/work-ua-%D0%BF%D0%BE%D1%88%D1%83%D0%BA-%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B8/id1466748992">
                        <img src={ios} alt="Download from appStore" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=ua.work.mobileClient">
                        <img src={android} alt="Download from playmarket" />
                    </a>
                    <a className={classes.btn} href="https://www.work.ua/ru/employer/">
                        Работодателю 
                        <Right />
                    </a>
                </div>

            </div>
            <section className={classes.nav}>
                <a href="https://www.work.ua/ru/jobseeker/resources/">Ресурсы</a>
                <span> &middot; </span>
                <a href="https://www.work.ua/ru/about-us/contact/">Контакты</a>
                <span> &middot; </span>
                <a href="https://www.work.ua/ru/about-us/">О нас</a>
                <span> &middot; </span>
                <a href="https://www.work.ua/ru/news/site/"> Новости Work.ua</a>
                <span> &middot; </span>
                <a href="https://www.work.ua/ru/help/">Помощь</a>
                <span> &middot; </span>
                <a href="https://www.work.ua/ru/about-us/conditions/">Условия использования</a>
            </section>
            <div>
                <span>
                    &#169; 2006-2020 Work.ua. Сайт для поиска работы №1 в Украине.
                </span>
            </div>
            <hr />
            <div className={classes.bottom}>
                <span>
                    Сделано в компании &#171;<a href="https://github.com/maksym0908">Криворук</a>&#187;.
                </span>
                <span>
                    <a href="https://www.education.ua/">Образование</a>
                    <span> &middot; </span>
                    <a href="https://www.trn.ua/">Треннинги</a>
                    <span> &middot; </span>
                    <a href="https://www.ratatype.com/">Typing tutor</a>
                </span>
            </div>
        </div>
        </div>
        
    )

}