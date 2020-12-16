import React, { useEffect } from 'react'
import { Vacancy } from './vacancy_block/Vacancies'
import { useHistory } from 'react-router-dom'
import { useRef, useState } from 'react'
import classes from './vacancy_block/Vacancies.module.scss'
import { Preloader } from '../../../assets/preloader/Preloader'
import { Options } from '../../../assets/OptionsList';
import { GetFilteredVacancies } from '../../../Filter';
import { Pagination } from './pagination/Pagination';
import { Params } from '../../../params'


export const VacanciesPage = (props) => {

    const { extended_search } = Params()
    let { categories } = Options()
    let inputRef = useRef()
    let [filterValue, setFilterValue] = useState([])
    let [filterLabel, setFilterLabel] = useState([])
    let [number, setNumber] = useState(5)
    let sp = document.getElementsByClassName('sp')
    let history = useHistory()
    const handleRemoveFilter = (c, label) => {
        if (c || label) {
            let indexOfLabel = filterLabel.findIndex(el => el === (label ? label : c.label))
            let category = categories.filter(v => v.label === (label ? label : c.label))[0]
            let indexOfValue = filterValue.findIndex(el => el === (category.value ? category.value : c.value)) 
            setFilterLabel(prevArray => [...prevArray.slice(0, indexOfLabel), ...prevArray.slice(indexOfLabel + 1)])
            setFilterValue(prevArray => [...prevArray.slice(0, indexOfValue), ...prevArray.slice(indexOfValue + 1)]) 
        }


        if (label) {
            let inputIndex = categories.findIndex(el => el.label === label)
                sp[inputIndex].checked = false
        } else if (!c && !label) {
            for (let el = 0; el < sp.length; el++) {
                sp[el].checked = false
            }
            setFilterLabel('')
            setFilterValue('')
            history.push(`/vacancies/?extended-search=1&page=1`)
        }      
    }
    
    let setHistory = (e, c) => {
        if (e.target.checked === true) {
            setFilterValue(prevArray => [...prevArray, c.value])
            setFilterLabel(prevArray => [...prevArray, c.label])
            
        } else if (e.target.checked === false) {
            handleRemoveFilter(c, null)
        }
    }
    let [vacancies, setVacancies] = useState([])
    let initialVacancies =  GetFilteredVacancies( vacancies, filterValue ) || vacancies
    useEffect(() => {
        setVacancies(props.vacancies)
    }, [props.vacancies])

    let vacanciesPerPage = 2

    const indexOfLastVacancy =  props.pagination.currentPage * vacanciesPerPage
    const indexOfFirstVacancy = indexOfLastVacancy - vacanciesPerPage
    const currentVacancies = initialVacancies.slice(indexOfFirstVacancy, indexOfLastVacancy)
    useEffect(() => {
        if (filterValue.length || filterLabel.length) {
            setFilterLabel(filterLabel)
            setFilterValue(filterValue)
        }
    }, [filterValue, filterLabel])

    return (

        <div className={classes.vacanciesPageContainer}>
            <div className={classes.vacanciesPageWrapper}>
                {props.emptyState ?
                    <>
                            
                            
                                    {filterLabel.length ? <div className={classes.labelFilter}>   
                                        {filterLabel.map(l => (
                                            <div className={classes.label}>
                                                <span className={classes.labelContent}>
                                                    <p>{l}</p>
                                                    <span onClick={() => handleRemoveFilter(null, l)}>&times;</span>
                                                </span>
                                            </div>
                                        ))}
                                        {filterLabel.length > 1 ? <span onClick={() => handleRemoveFilter()} className={classes.reset}>Сбросить все</span> : null}
                                    </div> : null}
                                    {initialVacancies.length ?
                                        <>
                                            {
                                                initialVacancies.length ?
                                                currentVacancies.map((v, i) => (
                                                        <div key={v.id} className={classes.vacancy}>
                                                            <Vacancy user={props.user} savedVacancies={props.savedVacancies} i={i} vacancy={v} saveVacancy={props.saveVacancy} removeSavedVacancy={props.removeSavedVacancy} />
                                                        </div>
                                                    ))
                                                    : null
                                            }
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <Pagination vacanciesPerPage={vacanciesPerPage} setCurrentPage={props.setCurrentPage} currentPage={props.pagination.currentPage}  vacancies={initialVacancies}/>
                                            </div>

                                        </> : <div style={{ textAlign: 'center', marginTop: '30px' }}><h4>По Вашему запросу нет результатов...</h4></div>}
                
                        </>
                   : <Preloader />}

            </div>
            {extended_search ? <div className={classes.search}>
                <ul>
                    <b>Категория</b>

                    {categories.slice(0, number).map(c => (
                        <li>
                            <label htmlFor="">
                                <input onClick={(e) => setHistory(e, c)} className="sp" ref={inputRef} type="checkbox" />
                                <label>{c.label}</label>
                                <span>{vacancies.filter(v => v.category === c.value).length}</span>
                            </label>
                        </li>
                    ))

                    }
                    {number === 5 ? 
                    <span onClick={() => setNumber(28)} className={classes.showMore}>Еще</span> 
                    : null}
                    </ul>
            </div> : ''}
        </div>


    )
}