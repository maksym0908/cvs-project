import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import { Header } from '../components/user/main_page/header/Header';
import { Body } from '../components/user/main_page/body/Body';
import { VacanciesPage } from '../components/user/vacancies/VacanciesPage';
import { FiltersPage } from '../components/user/main_page/filters_page/FiltersPage';
import { CategoriesBlock } from '../components/user/main_page/filters_page/filter_by_category/CategoriesBlock';
import { CitiesBlock } from '../components/user/main_page/filters_page/filter_by_city/CitiesBlock';
import { FilterByTitles } from '../components/user/main_page/filters_page/filter_by_titles/FIlterByTitles';
import { FilterByJobsForStudents } from '../components/user/main_page/filters_page/filter_by_jobs_for_students/FilterJobsForStudents';
import { FilterByRemoteJobs } from '../components/user/main_page/filters_page/filter_by_remote_jobs/FilterByRemoteJobs';
import { FilterByDisabilityJobs } from '../components/user/main_page/filters_page/filter_by_disability/FilterByDisabilityJobs';
import { FilterByCompanies } from '../components/user/main_page/filters_page/filter_by_companies/FilterByCompanies';
import { Register } from '../components/user/register/Register';
import { OpenedVacancy } from '../components/user/vacancies/opened_vacancy/OpenedVacancy';


export const UserRoutes = (props) => {
  const history = useHistory()
  const link = path => history.location.pathname.includes(path)
  const isGetIn = link('login') || link('register') || link('/my/create')


  return (
    <>
     {!isGetIn ? <Header vacancies={props.vacancies} user={props.user} /> : null}
      <Switch>
        <Route path="/" exact>
          <Body vacancies={props.vacancies} />
        </Route>
        <Route path="/vacancies/by-category" exact>
          <CategoriesBlock vacancies={props.vacancies} />
        </Route>
        <Route path="/vacancies/by-city" exact>
          <CitiesBlock vacancies={props.vacancies} />
        </Route>
        <Route path="/vacancies/by-companies">
          <FilterByCompanies vacancies={props.vacancies} />
        </Route>
        <Route path="/vacancies/by-titles">
          <FilterByTitles vacancies={props.vacancies} />
        </Route>
        <Route path="/vacancies/student">
          <FilterByJobsForStudents vacancies={props.vacancies} />
        </Route>
        <Route path="/vacancies/remote">
          <FilterByRemoteJobs vacancies={props.vacancies} />
        </Route>
        <Route path="/vacancies/disability">
          <FilterByDisabilityJobs vacancies={props.vacancies} />
        </Route>
        <Route path="/vacancies:params?">
          <VacanciesPage
          user={props.user}
           saveVacancy={props.saveVacancy}
            removeSavedVacancy={props.removeSavedVacancy}
             vacancies={props.vacancies}
             savedVacancies={props.savedVacancies}
             pagination={props.pagination}
             setCurrentPage={props.setCurrentPage}
             emptyState={props.emptyState}
              />
        </Route>
        <Route path="/filters" exact>
          <FiltersPage />
        </Route>
        <Route path="/job/:id">
          <OpenedVacancy/>
        </Route>
        <Route path="/register">
          <Register
          error={props.registerError}
          success={props.registerSuccess}
           handleRegister={props.onHandleRegister} />
        </Route>      
      </Switch>
    </>
  )
}



