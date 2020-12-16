import React from 'react'
import { CategorySvgIcon, CitySvgIcon, StudentSvgIcon } from '../../../../../assets/svgs/Svgs'
import classes from './Categories.module.scss'

export const Categories = () => {

    return (
        <div className={classes.categories}>
            <div className={classes.wrap}>
            <CategorySvgIcon />
            </div>
            <div className={classes.wrap}>
            <CitySvgIcon />
            </div>
            <div className={classes.wrap}>
            <StudentSvgIcon />
            </div>
                
               
              
        </div>

    )

}