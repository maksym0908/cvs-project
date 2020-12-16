import React from "react";
import { useParams } from "react-router-dom";
import { Left } from "../../../../assets/svgs/Svgs";
import classes from "./OpenedVacancy.module.scss";

export const OpenedVacancy = (props) => {
  const { id } = useParams()
  const vacancies = JSON.parse(localStorage.getItem('vacancies'))
  const job = vacancies.filter(v => v.id === id)[0]
  return (
    <div className={classes.container}>
    <div className={classes.opened} key={props.id} >
      <div className={classes.header}>
      <Left /> &nbsp;
        <a href="/vacancies?advs=1&page=1">
          Результаты поиска 
        </a> 
        <span> &middot; </span>  
        <a href="/filters">
          Вакансии 
        </a > 
        <span> &gt; </span>
        <a href={`/vacancies/?city=${job.cityValue}&by-city=1&page=1`} >
          в {job.cityLabel}
        </a>
        <span> &gt; </span>
        <a href={`/vacancies?position=${job.position.toLowerCase()}&by-titles=1&page=1`}>
          {job.position}
        </a>
      </div>
      <div className={classes.body}>
      <div className={classes.image}>
        <img alt="Company logo" src={`data:image/jpg;base64,${job.image}`}></img>
      </div>
      <span style={{ marginLeft: 10 }} id={classes.date} className="grey-text text-lighten-1">Вакансия от {job.createdAt}</span>
      <div className={classes.position}>
        <h4>
          {job.position}
        </h4>
      </div>
      <div className={classes.sallary}>
        <b onClick={() => props.test('test')}>{job.sallary}</b>
      </div>
      <div className={classes.company}>
        <span>
          <b>{job.companyName}</b>
        </span>
      </div>
      <div className={classes.address}>
        {job.address}
        </div>
      <div className={classes.contacts}>
        {job.ownerName} &middot;
            <span> {job.phone}</span>
      </div>
      <div className={classes.terms}>
        Полная занятость. Опыт работы от 1 года. Высшее образование
        </div>
      <div>
        <h5><b>Описание вакансии</b></h5>
        <p>{job.description}</p>
      </div>
      <div>
      </div>
    </div>
      </div>
    </div>

      
  )
}


