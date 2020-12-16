import React, { useState } from 'react'
import { List } from './List'
import classes from './ClientPage.module.scss'
import { Article } from '../user/main_page/body/article_block/Article'
import { Modal } from './client_page_logout_modal/Modal'
import { Add, Logout, MyJobs, Saved } from '../../assets/svgs/Svgs'

export const ClientPage = props => {
    const [appear, setAppear] = useState()
    const handleAppearModal = e => {
        setAppear(true)
        e.preventDefault()
    }
    const user = props.user
    const vacancies = props.vacancies
    const userVacanciesNumber = vacancies.filter(v => v.ownerId === user.id).length
    const userSavedJobsNumber = props.savedVacancies !== 'undefined' && props.savedVacancies.length ? props.savedVacancies.split(', ').length : 0


    return (
        <>
            { <div className={classes.container}>
                { 
                        <div className={classes.wrapper}>
                            <div className={classes.linksWrapper}>
                               <MyJobs number={userVacanciesNumber} />
                                <Saved number={userSavedJobsNumber} />
                                <Add />
                                <Logout setAppear={handleAppearModal} />
                            </div>
                            <section>
                                <a href="https://www.work.ua/ru/how-to-find-a-job/">
                                    <h4><b>Ресурсы для соискателя</b></h4>
                                    <Article />
                                </a>
                            </section>
                            <section className={classes.list}>
                                <List />
                            </section>
                        </div>
                }
            </div>}
            {<Modal appear={appear} setAppear={setAppear} />}
        </>
    )
}