import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './SearchVacancy.module.scss'
import { SearchByCity } from './search_by_city/SearchByCity'
import { SearchByPosition } from './search_by_position/SearchByPosition'


export const SearchVacancy = (props) => {

  const [link, setLink] = useState('')
  const [cityLabel, setCityLabel] = useState()
  const [cityValue, setCityValue] = useState()
  const [position, setPosition] = useState()
  const [example, setExample] = useState()
  const handleSetExample = (value) => {
    setExample(value)
  }

  useEffect(() => {
        setLink( `${cityValue && !position ? `?city=${cityValue}` : cityValue && position ? `?city=${cityValue}&` : ''}` + `${position && !cityValue ? `?position=${position}` : position && cityValue ? `position=${position}` : '' }`)
        setPosition(position)
    }, [cityValue, position])

  return (
    <>
      <form className={classes.search} >
        <div className={classes.searchVacancy}>
          <SearchByPosition
            position={position}
            example={example}
            setExample={setExample}
            setPosition={setPosition}
            data={props} />
          <SearchByCity
            cityValue={cityValue}
            setCityValue={setCityValue}
            cityLabel={cityLabel}
            setCityLabel={setCityLabel}
            appearCitiesDropDown={props.appearCitiesDropDown}
            setAppearCitiesDropDown={props.setAppearCitiesDropDown}
            />
        </div>
        <div className={classes.button}>
          <a
            href={`/vacancies${link ? link + "&advs=1&page=1" : "?advs=1&page=1"}`}
          >
          Найти вакансии 
          </a>
        </div>
      </form>
      <div className={classes.example}>
        <span>
          Например:
                             <i onClick={() => handleSetExample('закупщик')}> закупщик</i>,&nbsp; 
                             <i onClick={() => handleSetExample('администратор')}> администратор </i> и тп.
                           </span>
      
          <a href='/vacancies/?extended-search=1&page=1' className={classes.search}>
            <span>
            Расширенный поиск
            </span>
        
          </a>

      </div>
    </>

  )
}