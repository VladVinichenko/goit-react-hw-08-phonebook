import React, { useEffect, useState } from "react";
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
import { testApi } from "./api/user";
import UserMenu from "./components/UserMenu/UserMenu";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import { userCurrent } from "./api/user";

// testApi()

// 

export const App = () => {
  const [showModal, setShowModal] = useState(true)
  const dispatch = useDispatch()
  const toggleModalWindow = () => {
    setShowModal(!showModal)
  };

  const isLogged = useSelector(store => store.userReducer.isLogged)

  useEffect(() => {
    const token = localStorage.getItem('token')
    token && dispatch(userCurrent(token))
  }, [])

  return (
    <BrowserRouter>
      <header className={s.header}>
        <NavLink to={ROUTERS.HOME}>
          <h1 className={s.logo}><span className={s.preLogo}>the</span>Contacts</h1>
        </NavLink>
        <UserMenu />

      </header >

      <Switch>
        <Route exact path='/'>
          {isLogged ? <Redirect to={ROUTERS.CONTACTS} /> : <HomePage />}
        </Route>
        <Route path={ROUTERS.ERROR_404} component={Error404} />
        <Route exact path={ROUTERS.CONTACTS}>
          {!isLogged ? <Redirect to={ROUTERS.HOME} /> : <ContactsPage />}
        </Route>
        {/* <Route path={ROUTERS.CONTACTS} component={ContactsPage} /> */}
        <Route exact path={ROUTERS.HOME} component={HomePage} />

        <Route path={ROUTERS.REGISTER} render={props => <Modal {...props} type={'sign'}>
          <RegisterPage action={toggleModalWindow} />
        </Modal>} />

        <Route path={ROUTERS.LOGIN} render={props => <Modal {...props} type={'sign'}>
          <LoginPage action={toggleModalWindow} />
        </Modal>} />


        <Redirect to={ROUTERS.ERROR_404} />



      </Switch>

      {/* <ToastContainer autoClose={4000} /> */}

    </BrowserRouter >
  )
}