import React from 'react'
import classes from './SearchByPosition.module.scss'


export const PositionsDropDown = props => {
    const filterPosition = () => {
       let position = props.positions.filter(p => p.toLowerCase().indexOf(props.positionInput.toLowerCase()) > -1)
  return position.length ? (position.map(p =>
            <ul onClick={() => props.setFilteredPosition(p)}>
                <li >
                    {p}
                </li>
            </ul>
        )) : props.setAppearDropDown(false)

    }

    return (
         <span className={classes.dropDown}>
            { !props.positionInput ? props.positions.map((position, index) => 
              <ul onClick={() => props.handleSetPosition(position)}>
            <li key={index}>
              <span >
              { position }
              </span>
            </li>
                </ul>
            ) 
              :
              filterPosition()
            }
          </span> 
    )
}