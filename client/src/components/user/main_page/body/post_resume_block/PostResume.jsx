import React from 'react'
import classes from './PostResume.module.scss'
import { PostSvg } from './PostSvgIcon'

export const PostResumeBlock = () => {
    return (
        <div className={classes.container}>
            <div className={classes.gridContainer}>
                <a href="/my/create" className={classes.post}>
                    <PostSvg />
                <div className={classes.text}>
                    <h5> <b>Разместите вакансию</b></h5>
                    <span>Самый простой способ найти сотрудника - создать вакансию.</span>
                </div>
                </a>
                    <div className={classes.btn}>
                    <a href="/my/create">Создать вакансию</a>
                    </div>
                    
            </div>
        </div>

    )
}