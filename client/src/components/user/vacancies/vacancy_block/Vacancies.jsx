import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Right } from "../../../../assets/svgs/Svgs";
import classes from "./Vacancies.module.scss";

export const Vacancy = props => {

 const user = props.user
 const savedVacancies = props.savedVacancies 
 const [isLoggedIn, setIsLoggedIn] = useState()
 const handleRemove = (vacancyId, userId, event) => {
   event.preventDefault()
   props.removeSavedVacancy(vacancyId, userId)
 }
 const handleSave = (vacancyId, userId, event) => {
   event.preventDefault()
   props.saveVacancy(vacancyId, userId)
 }

  return (   
              <a href={`/job/${props.vacancy.id}`} className={classes.vacancyWrapper} >
                <div className={classes.header}>
                  <h5>
                   <b>{props.vacancy.position}</b> 
                  </h5>
                  <div className={classes.image}>
                  <img alt="company logo" src={`data:image/jpg;base64,${props.vacancy.image}`}></img>
                </div>
                </div>
                <div className={classes.body}>
                <div className={classes.sallary}> 
                <b>{props.vacancy.sallary}</b>
                  </div>
                  <div >
                    <span className={classes.company}>
                    <b>{props.vacancy.companyName}</b>
                    <span>
                    &middot;
                    </span>
                    <p>{props.vacancy.cityLabel}</p>
                    </span>
                    
                  </div>
                <div className={classes.description}>
                  <p>
                    { props.vacancy.description.slice(0, 280) + "..."}
                   <Right />
                  </p>
                </div>
                </div>
                <div className={classes.footer}>
                  <div className={classes.save}>
                  {
                savedVacancies && savedVacancies.includes(props.vacancy.id) ? 
                <span className={classes.remove} >
                  <span onClick={e => handleRemove(props.vacancy.id, user.id, e)} className={classes.removeIcon}></span>
                  <span><a href="/my/saved-jobs">В сохраненных</a></span> 
                </span> :
                   <span className={classes.saveVacancy} onClick={user ? e => handleSave(props.vacancy.id, user.id, e) :
                    e => {e.preventDefault()
                         setIsLoggedIn(false)} }>
                     <span className={classes.saveIcon}></span>
                     <span>Сохранить</span>
                     </span> 
                    }
                  </div>
                  {isLoggedIn === false ? <div className={classes.warning}>
                    <p>Чтобы сохранить вакансию, нужно <a href="/login">войти</a> или <a href="/register">зарегистрироваться</a>.</p>
                  </div> : null}
                </div>
                </a>
  );
};
