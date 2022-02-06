import { Fragment, useState } from 'react'
import { NavLink, Route } from 'react-router-dom';
import Section from '../../components/Section/Section'
import s from './HomePage.module.css'
import { ROUTERS } from '../../consts';
import { RegisterPage } from '../RegisterPage/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage';
import Modal from '../../components/Modal/Modal';
import welcomeImg from '../../images/welcome.jpg'




export function HomePage() {

  return (
    <Fragment>
      <Section title='Welcome !'>
        {/* <div className={s.pictureBox}> */}
        <img className={s.picture} alt='welcome' srcSet={welcomeImg} />
        {/* </div> */}
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.LOGIN} exact activeClassName={s.selected} className={s.link}>Login</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.REGISTER} exact activeClassName={s.selected} className={s.link}>SignUp</NavLink>
          </li>
        </ul>
      </Section>
    </Fragment>
  )
}

