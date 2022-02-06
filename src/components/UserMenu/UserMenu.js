import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from './UserMenu.module.css'
import Button from '../Button/Button'
import { userLogout } from '../../api/user'
import { NavLink } from 'react-router-dom'
import { ROUTERS } from '../../consts'

export default function UserMenu() {
  const dispatch = useDispatch()
  const isLogged = useSelector(store => store.userReducer.isLogged)
  const userEmail = useSelector(store => store.userReducer.userData.email)

  const onClickLogout = evt => {
    evt.preventDefault()
    dispatch(userLogout())
  }

  return (
    <div className={s.box}>
      {isLogged && <Fragment>
        <p className={s.email}>{userEmail}</p>
        <Button action={onClickLogout} name='logout' type='red'>Logout</Button>
      </Fragment>}
      {!isLogged && <Fragment>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.LOGIN} exact activeClassName={s.selected} className={s.link}>Login</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to={ROUTERS.REGISTER} exact activeClassName={s.selected} className={s.link}>SignUp</NavLink>
          </li>
        </ul>
      </Fragment>
      }
    </div>
  )
}