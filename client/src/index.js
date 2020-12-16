import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import AppContainer from './containers/AppContainer';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
      <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
