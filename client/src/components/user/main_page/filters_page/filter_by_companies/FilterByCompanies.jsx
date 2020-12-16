import React, { useEffect, useRef, useState } from 'react'
import { Left } from '../../../../../assets/svgs/Svgs'
import classes from './FilterByCompanies.module.scss'

export const FilterByCompanies = props => {

    const inputRef = useRef()
    const vacancies = props.vacancies
    const uniqCompanies = [...new Set(vacancies.map(v => v.companyName))]
    const filtered = vacancies.filter((v, i) => uniqCompanies.indexOf(v.companyName) === i)
    const [filteredVacancies, setFilteredVacancies] = useState(filtered)
    const handleFilterVacancies = input => {
        let value = input.target.value
        let res = filtered.filter(v => v.companyName.toLowerCase().indexOf(value.toLowerCase()) > -1)
      setFilteredVacancies(res)
    }

    useEffect(() => {
        setFilteredVacancies(filtered)
    }, [vacancies])


    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
            <a className={classes.link} href="/filters"><Left /> Найти вакансии </a>
            <h4><b>Поиск по компаниям</b></h4>
            <input placeholder="Название компании" type="text" ref={inputRef} onChange={handleFilterVacancies} />
            <div className={classes.itemWrapper}>
                {
                   filteredVacancies.map(v => 
                    (
                        <a href={`/vacancies/?company-name=${v.companyName}&page=1`} className={classes.item}>
                        <img src={`data:image/jpg;base64,${v.image}`} alt={v.companyName}/>
                        <h6>{v.companyName}</h6>
                        <span>{vacancies.filter(f => f.companyName === v.companyName).length}</span>
                        </a>
                    ))
                }
            </div>
            </div>
        </div>
    )
}