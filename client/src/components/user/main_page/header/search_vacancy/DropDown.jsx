import React from 'react'
import classes from '../SearchVacancy.module.scss'


export const DropDown = props => {

    const filterLabel = () => {
       let city = props.cities.filter(c => c.label.toLowerCase().indexOf(props.cityInput.toLowerCase()) > -1)
       props.setAppear(true)
  return city.length ? (city.map(c =>
            <ul onClick={() => props.closeDropDown()}>
                <li>
                    {c.label}
                </li>
            </ul>
        )) : props.setAppear(false)

    }

    return (
         <span className={classes.dropDown}>
            { !props.cityInput ? props.cities.map((city, index) => 
              <ul onClick={() => props.handleSetCity(city)}>
            <li key={index}>
              <span >
              {   city.label }
              </span>
            </li>
                </ul>
            ) 
              :
                filterLabel()
            }
          </span> 
    )
}