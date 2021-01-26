import React, { useEffect } from 'react';
import 'materialize-css'
import { UserRoutes } from './routes/user-routes';
import { ClientRoutes } from './routes/client-routes';

const App = props => {
  const getVacancies = props.onGetVacancies
  const setCurrentPage = props.onSetCurrentPage
  const getVacanciesFromLocalStorage = props.onGetVacanciesFromLocalStorage
  const initializeApp = () => {
    if (!JSON.parse(localStorage.getItem('vacancies'))) {
      getVacancies()
    } else return getVacanciesFromLocalStorage()
    
    setCurrentPage(1)
  }

  useEffect(
    initializeApp, [getVacancies, setCurrentPage]
  )

  return (
    <>
        <UserRoutes
        savedVacancies={props.savedVacancies}
        user={props.user}
        vacancies={props.vacancies}
        saveVacancy={props.onSaveVacancy}
        removeSavedVacancy={props.onRemoveSavedVacancy}
        pagination={props.pagination}
        setCurrentPage={props.onSetCurrentPage}
        emptyState={props.emptyState}
        registerError={props.registerError}
        registerSuccess={props.registerSuccess}
        onHandleRegister={props.onHandleRegister}
        />
        <ClientRoutes
        loginError={props.loginError}
        onHandleLogin={props.onHandleLogin}
        user={props.user}
        vacancies={props.vacancies}
        savedVacancies={props.savedVacancies}
        createVacancy={props.onCreateVacancy}
        onDeleteVacancy={props.onDeleteVacancy}
        onRemoveSavedVacancy={props.onRemoveSavedVacancy}

        />
    </>

  )
}

export default App
