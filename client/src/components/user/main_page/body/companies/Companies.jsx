import React from 'react'
import classes from './Companies.module.scss'
import { Right } from '../../../../../assets/svgs/Svgs'

export const Companies = props => {
    return (
        <div className={classes.container}>
        <div className={classes.gridContainer}>
            {props.vacancies.map(v => (
                <div className={classes.wrapper}>
                    <a href={`/vacancies/?company-name=${v.companyName}&page=1`}>
                        <img src={`data:image/jpg;base64,${v.image}`} />
                    </a>    
                </div>
            ))}
        </div>
        <div className={classes.filter}>
        <a href="/vacancies/by-companies"> <span>Поиск работы по компаниям</span><Right /></a>
        </div>
        </div>
    )
}