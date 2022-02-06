import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button/Button'
import FormBox from '../../components/FormBox/FormBox'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import Section from '../../components/Section/Section'
import s from './LoginPage.module.css'
import { userLogin } from '../../api/user'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onInput = (evt) => {
    evt.target.name === "email" && setEmail(evt.target.value)
    evt.target.name === "password" && setPassword(evt.target.value)
  }

  const onSubmitLogin = () => {
    dispatch(userLogin(
      {
        email: email, password: password
      }
    ))
    // action()
  }

  return (
    <div>
      <FormBox buttonName={'Login'} name={'login_form'} title={'Login'} action={onSubmitLogin}>
        <Input value={email} inputData={onInput} placeholder={'Input your email'} name={'email'}>Email</Input>
        <Input value={password} inputData={onInput} placeholder={'Imput your password'} name={'password'}>Password</Input>
      </FormBox>
    </div>
  )
}

