import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { SearchVacancy } from "./search_vacancy/SearchVacancy";
import { Right, Up, Down } from '../../../../assets/svgs/Svgs'
import { useHistory } from "react-router-dom";

export const Header = props => {
  const data = props.user
  const vacancies = props.vacancies
  const history = useHistory()
  const userPage = history.location.pathname.includes('/my')
  const check = present => history.location.pathname.includes(present)
  const onVacanciesPage = check('filters') || check('vacancies')
  const onUserPage = check('my')
  const border = {
     borderBottom: '4px red solid'
  }
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [language, setLanguage] = useState()
  const [appearCitiesDropDown, setAppearCitiesDropDown] = useState()
  const [appearPositionsDropDown, setAppearPositionsDropDown] = useState()
  const closeDropDown = () => {
        if (appearCitiesDropDown) {
          setAppearCitiesDropDown(false)
        } else if (appearPositionsDropDown) {
          setAppearPositionsDropDown(false)
        }
        else return null
  }
  
  useEffect(() => {
      let header = document.getElementById("header")
      document.addEventListener('click', function(event) {
          let isClickInside = header.contains(event.target)
          if (!isClickInside) {
              setLanguage(false)
              setAppearCitiesDropDown(false)
              setAppearPositionsDropDown(false)
          }
      })
  }, [])

   useEffect(() => {
    if (data && data.token) {
      setFirstName(data.name)
      setLastName(data.surname)
    }
  }, [firstName])

  return (
    <div id="header" className={classes.container} onClick={() => closeDropDown() }>
<div className={classes.wrapper} onClick={ language ? () => setLanguage(false) : null}>
      <div className={classes.nav}>
        <span className={classes.links}>
          <div onClick={() => setLanguage(!language ? true : false)}> <span>Русский</span> 
          {!language ? <Down /> : <Up />}
          </div>
   
          {language ? <div className={classes.dropDown}>
                        <div><a href="">Украинский</a></div>
                        <div><a href="">Русский</a></div>
                        <div><a href="">English</a></div>
                </div> : null}
         
          <a href="https://www.work.ua/ru/employer/"><span>Работодателю</span> 
          <Right />
          </a>
        </span>
          <a href="/" className={classes.img}>
            <img alt="work.ua logo" src="https://st.work.ua/i/press_kit/work_dark_bgs.png"/>
          </a>   
        <div className={classes.btns}>
          <a className={classes.search} style={onVacanciesPage ? border : null} href="/filters"><span>Найти вакансии</span></a>
          { data ? <a className={classes.name} style={onUserPage ? border : null} href="/my/main-page"><span>{ `${firstName} ${lastName}` }</span></a>
            : <a className={classes.login} href="/login"><span>Войти</span> </a>}
        </div>
        <hr />
      </div>
    
 {!userPage ?
 <>
 <div className={classes.site}>
      <h4><b>Сайт для поиска работы №1 в Украине</b></h4>
      <span>Сейчас у нас {vacancies.length} актуальных вакансий.</span>
      </div> 
          <SearchVacancy
           appearCitiesDropDown={appearCitiesDropDown}
            setAppearCitiesDropDown={setAppearCitiesDropDown}
            appearPositionsDropDown={appearPositionsDropDown}
            setAppearPositionsDropDown={setAppearPositionsDropDown}
             vacancies={vacancies} />
             </>
            : <h4 style={{color: '#fff', fontWeight: '700'}}>Добро пожаловать, {firstName}!</h4> 
            } 
            

    </div>
    </div>
    

  );
};

