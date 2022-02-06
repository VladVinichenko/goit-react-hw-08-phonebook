import React, { useEffect } from "react";
import s from './App.module.css'
import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { ROUTERS } from "./consts";
import { HomePage } from "./pages/HomePage/HomePage";
import { Error404 } from "./pages/Error404/Error404";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserMenu from "./components/UserMenu/UserMenu";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import { userCurrent } from "./api/user";




export const App = () => {
  const dispatch = useDispatch()
  const isLogged = useSelector(store => store.userReducer.isLogged)
  useEffect(() => {
    const token = localStorage.getItem('token')
    token && dispatch(userCurrent(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <header className={s.header}>
        <NavLink to={ROUTERS.HOME}>
          <h1 className={s.logo}><span className={s.preLogo}>the</span>Contacts</h1>
        </NavLink>
        {isLogged && <UserMenu />}

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
          <RegisterPage />
        </Modal>} />

        <Route path={ROUTERS.LOGIN} render={props => <Modal {...props} type={'sign'}>
          <LoginPage />
        </Modal>} />


        <Redirect to={ROUTERS.ERROR_404} />



      </Switch>

      <ToastContainer autoClose={2000} />

    </BrowserRouter >
  )
}