import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import s from './FormBox.module.css'

const FormBox = ({ children, buttonName, action, name, title }) => {
  const isLogged = useSelector(store => store.userReducer.isLogged)

  const onSubmit = evt => {
    evt.preventDefault()
    action(evt)
    console.log(isLogged);
  }

  return (
    <div className={s.box}>
      <form className={s.formBox} name={name} onSubmit={onSubmit}>
        {title && <h2 className={s.title}>{title}</h2>}
        {children}
        <button type='submit' className={s.button} >{buttonName}</button>
      </form>
    </div>
  )
}

export default FormBox;
