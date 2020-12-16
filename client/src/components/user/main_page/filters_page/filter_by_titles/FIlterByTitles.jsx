import React from 'react'
import { Left } from '../../../../../assets/svgs/Svgs'
import classes from './FilterByTitles.module.scss'

export const FilterByTitles = props => {
    const vacancies = props.vacancies
    const vacanciesTitles = [...new Set(vacancies.map(v => v.position))] 

    return (
        <div  className={classes.container}>
            <div id="categories" className={classes.wrapper}>
            <span className={classes.link}><a href="/filters"><Left />Найти вакансии</a></span>
            <h4 className={classes.text}><b>Поиск вакансий по должностям</b></h4>
            <h5>Топ-100 должностей</h5>
            <ul  className={classes.titlesWrapper}>
           
                {vacanciesTitles.map(c => (
                    <li>
                        <a href={`/vacancies?position=${c.toLowerCase()}&by-titles=1&page=1`}>
                            {c}
                        </a>
                        <span>
                            {vacancies.filter(v => v.position === c).length}
                        </span>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}