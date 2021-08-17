import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { mount, route } from 'navi';
import { Router } from 'react-navi';

import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import HomePage from './Menu/HomePage';
import { withAuthentication } from './Auth/authenticatedRoute';
import { BOUNCE_IT_TOKEN_KEY } from './Auth/auth.api';
import { FirstPage } from '@material-ui/icons';
import SecondPage from './Page/SecondPage';
import MenuHomeadmin from './Menu/MenuHomeadmin';
import MenuHomeuser from './Menu/MenuHomeuser';


const routes = mount ({
  "/": /*withAuthentication*/ (route({
    title: 'HomePage',
    view: <HomePage />
  })),

  "/login": route({
    title: 'Login',
    view: <LoginPage />
  }),

  "/register": route({
    title: 'Register',
    view: <RegisterPage />
  }),

  "/menuhomeadmin": /*withAuthentication*/ route({
    title: 'MenuHomeAdmin',
    view: <MenuHomeadmin />
  }),

  "/menuhomeuser": /*withAuthentication*/ route({
    title: 'MenuHomeUser',
    view: <MenuHomeuser />
  }),

  "/firstpage": route({
    title: 'firstpage',
    view: <FirstPage />
  }),

  "/secondpage": route({
    title: 'secondpage',
    view: <SecondPage />
  }),
  





})

ReactDOM.render(<>
  
  <Router context={{
    token: localStorage.getItem(BOUNCE_IT_TOKEN_KEY)
  }} routes={routes} /></>, document.getElementById('root'));


reportWebVitals();
