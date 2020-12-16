import React from 'react'
import { Article } from './article_block/Article'
import classes from './Body.module.scss'
import { DownloadAd } from './download_app_ad/DownloadAd'
import { Categories } from './categories/Categories'
import { Companies } from './companies/Companies'
import { InfoBlock } from './info_block/InfoBlock'
import { PostResumeBlock } from './post_resume_block/PostResume'



export const Body = props => {

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                    <DownloadAd />
                    <Categories />
                    <Companies vacancies={props.vacancies} />
                    <PostResumeBlock />
                    <Article />
                    <InfoBlock />
            </div>
        </div>
    )
}