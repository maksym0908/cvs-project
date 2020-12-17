import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { ClientPage } from '../components/client/ClientPage';
import CreateVacancyForm from '../components/user/main_page/header/create_vacancy/CreateVacancyForm';
import { PostedJobs } from '../components/client/postedJobs/PostedJobs';
import { SavedJobs } from '../components/client/savedJobs/SavedJobs';
import { Footer } from '../components/user/main_page/footer/Footer';
import { LoginForm } from '../components/client/login/Login';

export const ClientRoutes = props => {

        return (
            <>
           <Switch>
            <Route path="/login" exact>
          <LoginForm 
          user={props.user}
          error={props.loginError}
          onHandleLogin={props.onHandleLogin}
          />
        </Route>       
         <Route path="/my/" >
          {props.user && props.user.token  ? 
          <>      
                  <Route path="/my/main-page" exact>
                    <ClientPage
                     user={props.user}
                     vacancies={props.vacancies}
                     savedVacancies={props.savedVacancies}
                      />
                  </Route>
                  <Route path="/my/create/" exact> 
                  <CreateVacancyForm
                   createVacancy={props.createVacancy} /> 
                </Route>
                <Route path="/my/posted-jobs/" exact>
                    <PostedJobs 
                    user={props.user}
                    vacancies={props.vacancies}
                    onDeleteVacancy={props.onDeleteVacancy}
                    /> 
                </Route>
                <Route path="/my/saved-jobs" exact>
                  <SavedJobs
                   user={props.user}
                   vacancies={props.vacancies}
                   savedVacancies={props.savedVacancies}
                   onRemoveSavedVacancy={props.onRemoveSavedVacancy}
                    />
                </Route>
                </>
          : <Redirect to="/login"/> }
      </Route>  
           
            </Switch>
            <Footer /> 
            </>
        )
    }
  

