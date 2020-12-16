import React from 'react'
import { CategorySvgIcon, CitySvgIcon, OfficeSvgIcon, WorkersSvgIcon, StudentSvgIcon, WfhSvgIcon, DisabledSvgIcon } from '../../../../assets/svgs/Svgs'
import classes from './FiltersPage.module.scss'

export const FiltersPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
            <CategorySvgIcon />
                <CitySvgIcon /> 
                <OfficeSvgIcon />
                <WorkersSvgIcon />
                <StudentSvgIcon />
                <WfhSvgIcon />
                <DisabledSvgIcon />
            </div>
        </div>
    )
}