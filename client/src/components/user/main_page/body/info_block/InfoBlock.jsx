import React from 'react'
import classes from './InfoBlock.module.scss'

export const InfoBlock = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.links}>
                <h5> <b>Статьи и новости</b></h5>
                <ul>
                    <li>
                        <a href="https://www.work.ua/ru/articles/career/2519/">
                        Кого ищут ведущие компании: 18 вакансий от лидеров рынка
                            </a>
                    </li>
                    <li>
                        <a href="https://www.work.ua/ru/articles/career/2518/">
                        Ольга Сердюк: «Преграды и стеклянные потолки женщина встречает только внутри себя»
                            </a>
                    </li>
                    <li>
                        <a href="https://www.work.ua/ru/articles/work-in-team/2515/">
                        Какими должны быть толерантность и разнообразие в коллективе — опыт Priton Krasy
                            </a>
                    </li>
                </ul>
                <hr />
                <span>
                    <a href="https://www.work.ua/ru/articles/">
                        Все статьи
                            </a>
                    <span> &middot; </span>
                    <a href="https://www.work.ua/ru/news/ukraine/">
                        Новости рынка труда
                            </a>
                </span>
            </div>
            <div className={classes.info_circle}>
                <a href="https://www.work.ua/ru/salary/">
                    <h5><b>Средняя зарплата</b></h5>
                    <div className={classes.circle}>
                        <b>12 500</b> <br /> грн
                </div>
                    <span>Подробнее по должностям</span>
                </a>
            </div>
            <div className={classes.info_circle}>
                <a href="https://www.work.ua/ru/holidays/liquidator-day/">
                <h5><b>Праздник!</b></h5>
                <div className={classes.circle}>
                    <b>14</b> <br /> декабря
                </div>
                <span> День ликвидатора</span>
                </a>
            </div>
        </div>
    )
}