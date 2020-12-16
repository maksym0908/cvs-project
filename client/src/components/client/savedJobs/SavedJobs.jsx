import React from 'react'
import { Link } from 'react-router-dom'
import { Delete, Left } from '../../../assets/svgs/Svgs'
import classes from './SavedJobs.module.scss'


export const SavedJobs = props => {
    const vacancies = props.vacancies
    const user = props.user
    const savedVacancies = props.savedVacancies
    const handleRemoveSavedVacancy = (vacancyId , userId, e) => {
        e.preventDefault()
        props.onRemoveSavedVacancy(vacancyId, userId)

    }
    return (

        <div className={classes.container}>

            <div className={classes.wrapper}>
                <span><Left /><a className={classes.goBack} href="/my/main-page">Личный раздел</a></span>
                <h4><b>Сохраненные вакансии</b></h4>
                {
                  savedVacancies !== 'undefined' && savedVacancies.length ?  vacancies.filter(v => savedVacancies.includes(v.id)).map(v =>
                        <Link to={`/job/${v.id}`}>
                            <div className={classes.vacancyWrapper}>
                                <div className={classes.header}>

                                    <h5 >
                                        <a href={`/job/${v.id}`}>
                                            <b>
                                                {v.position}
                                            </b>
                                        </a>
                                    </h5>

                                    <span onClick={e => handleRemoveSavedVacancy(v.id, user.id, e)}><Delete /></span>
                                </div>
                                <div className={classes.footer}>
                                    <span>
                                        <b>{v.companyName}</b>
                                        <span className={classes.middot}>&middot;</span>
                                        {v.cityLabel}
                                    </span>
                                    <span>
                                        Вакансия добавлена {v.createdAt}
                                    </span>
                                </div>

                            </div>
                        </Link>
                    )
               : 
               <div>
               <p>
               Пока у вас нет сохраненных вакансий.
               </p>
               <p>
               <a href="/vacancies?advs=1&page=1">Перейдите на страницу поиска вакансий</a>, или на страницу вакансии и нажмите «Сохранить», чтобы просмотреть вакансию позже и откликнуться на нее.
               </p>
           </div>
               }
            </div>




        </div>
    )
}