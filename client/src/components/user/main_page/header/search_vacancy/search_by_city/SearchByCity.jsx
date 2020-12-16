import React, { useState, useRef, useEffect } from 'react'
import classes from './SearchByCity.module.scss'
import { Options } from '../../../../../../assets/OptionsList'
import { CitiesDropDown } from './CitiesDropDown'


export const SearchByCity = props => {

    const { cities } = Options()
    const [cityInput, setCityInput] = useState() 

    const [filteredCity, setFilteredCity] = useState()
    const cityRef = useRef()
    const handleSetCity =  (filter) => {
        let city = cities.filter(c => c.value === filter.value) 
        setFilteredCity(city[0].label)
        props.setCityValue(city[0].value)
        props.setAppearCitiesDropDown(false)
    
    }
      const handleFilterCity = (filter) => {  
      let city = filter ? cities.filter(c => c.label.toLowerCase().indexOf(filter.toLowerCase()) > -1) : []
      props.setCityLabel(city.length ? city[0].label : '') 
      props.setCityValue(city.length ? city[0].value : '')
      console.log(props.cityValue);
      setCityInput(filter)
      setFilteredCity(filter)
      
      }
    const handleCleanInput = () => {
      cityRef.current.value = ''
      setCityInput('')
      setFilteredCity('')
      props.setCityValue('')
      console.log(props.cityValue);
      props.setAppearCitiesDropDown(false)
    }
    
    const closeDropDown = () => {
      setFilteredCity('')
      setFilteredCity(props.cityLabel)
      props.setCityLabel('')
      props.setAppearCitiesDropDown(false)
    }

    useEffect(() => {
      props.setCityLabel(filteredCity)
      props.setCityValue(props.cityValue)
  }, [props.cityValue])


    return (

          <div className={classes.cities}>
          <div className={classes.cityInput}>
          <input
            value={filteredCity}
            placeholder="Город"
            ref={cityRef}
            onChange={() => handleFilterCity(cityRef.current.value)}
            onClick={() => props.setAppearCitiesDropDown(true)}
          />
          {filteredCity || cityInput || props.appearCitiesDropDown ? <span  className={classes.cleanInputField} onClick={handleCleanInput}>&#10006;</span> : null}

          </div>
          {  props.appearCitiesDropDown ? 
          <CitiesDropDown 
          cities={cities} 
          cityInput={cityInput}
          handleSetCity={handleSetCity}
          handleFilterCity={handleFilterCity}
          cityLabel={props.cityLabel}
          setCityLabel={props.setCityLabel}
          cityRef={cityRef}
          closeDropDown={closeDropDown}
          setAppearDropDown={props.setAppearCitiesDropDown}
          />  : null}
        </div>
    )
}