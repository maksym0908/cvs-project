import React from 'react'
import classes from './SearchByCity.module.scss'


export const CitiesDropDown = props => {

    const filterLabel = () => {
       let city = props.cities.filter(c => c.label.toLowerCase().indexOf(props.cityInput.toLowerCase()) > -1)
       props.setAppearDropDown(true)
  return city.length ? (city.map(c =>
            <ul onClick={() => props.handleSetCity(c)}>
                <li>
                    {c.label}
                </li>
            </ul>
        )) : props.setAppearDropDown(false)

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