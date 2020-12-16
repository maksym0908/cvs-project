import React from 'react'
import { Link } from 'react-router-dom'
import { Delete, Left } from '../../../assets/svgs/Svgs'
import classes from './PostedJobs.module.scss'
export const PostedJobs = props => {

    const vacancies = props.vacancies
    const postedJobs = vacancies.filter(v => v.ownerId === props.user.id)
    const handleRemoveVacancy = (id, e) => {
        e.preventDefault()
        props.onDeleteVacancy(id)
    }
    
    return (
        <div className={classes.container}>
                        <div className={classes.wrapper}>
                          <span><Left /><a className={classes.goBack} href="/my/main-page">Личный раздел</a></span>
                          <h4><b>Размещенные вакансии</b></h4>
                        { postedJobs.length && postedJobs !== 'undefined' ?  postedJobs.map(v =>
                        <Link to={`/job/${v.id}`}>
                        <div className={classes.vacancyWrapper}>
                        <div className={classes.header}>
                        <span >
                        <h5 >
                           <b>
                           {v.position}
                               </b></h5>
                        </span>
                        <span onClick={e => handleRemoveVacancy(v.id, e)}><Delete /></span>
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
                            Вы пока не добавили ни одной вакансии
                        </p>
                        <p>
                        <a href="/my/create">Перейдите на страницу с формой размещения вакансии</a>, заполните ее и нажмите «Разместить вакансию», чтобы она появилась в списке других вакансий.
                        </p>
                    </div>
                }
                        </div>
   

                        

        </div>
    )
}