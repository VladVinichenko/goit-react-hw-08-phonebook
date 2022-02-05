import { Fragment, useState } from 'react'
import { NavLink, Route } from 'react-router-dom';
import Section from '../../components/Section/Section'
import s from './HomePage.module.css'
import { ROUTERS } from '../../consts';
import { RegisterPage } from '../RegisterPage/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage';
import Modal from '../../components/Modal/Modal';





export function HomePage() {

  const [showModal, setShowModal] = useState(true)

  const toggleModalWindow = () => {
    setShowModal(!showModal)
  };

  const onAction = () => {
    console.log('');
  }

  return (
    <Fragment>
      <Section>
        <li className={s.navItem}>
          <NavLink to={ROUTERS.REGISTER} exact activeClassName={s.selected} className={s.link}>Register</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to={ROUTERS.LOGIN} exact activeClassName={s.selected} className={s.link}>Login</NavLink>
        </li>

        <Route path={ROUTERS.REGISTER} render={props => <Modal {...props} type={'sign'}>
          <RegisterPage action={toggleModalWindow} />
        </Modal>} />

        <Route path={ROUTERS.LOGIN} render={props => <Modal {...props} type={'sign'}>
          <LoginPage action={toggleModalWindow} />
        </Modal>} />


      </Section>
    </Fragment>
  )
}

