import React from "react";
import s from './App.module.css'
import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { ROUTERS } from "./consts";
import { HomePage } from "./pages/HomePage/HomePage";
import { Error404 } from "./pages/Error404/Error404";
// import CustomScroll from "react-custom-scroll";
// import { ToastContainer } from "react-toastify";
// import SimpleBar from 'simplebar-react';

// 
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
import Scrollbars from "react-custom-scrollbars-2";

export const App = () => {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <NavLink to={ROUTERS.HOME}>
          <h1 className={s.logo}><span className={s.preLogo}>the</span>Contacts</h1>
        </NavLink>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.REGISTER} exact activeClassName={s.selected} className={s.link}>Register</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.LOGIN} exact activeClassName={s.selected} className={s.link}>Login</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.CONTACTS} exact activeClassName={s.selected} className={s.link}>Contacts</NavLink>
          </li>
        </ul>
      </header >

      <Switch>
        <Route path={ROUTERS.ERROR_404} component={Error404} />
        <Route path={ROUTERS.REGISTER} component={RegisterPage} />
        <Route path={ROUTERS.LOGIN} component={LoginPage} />
        <Route path={ROUTERS.CONTACTS} component={ContactsPage} />
        <Route path={ROUTERS.HOME} component={HomePage} exact />
        <Redirect to={ROUTERS.ERROR_404} />
      </Switch>
      {/* <ToastContainer autoClose={4000} /> */}
    </BrowserRouter >
  )
}