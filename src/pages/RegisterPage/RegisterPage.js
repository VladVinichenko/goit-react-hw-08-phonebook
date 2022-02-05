import { Fragment } from 'react'
import Button from '../../components/Button/Button'
import FormBox from '../../components/FormBox/FormBox'
import Input from '../../components/Input/Input'
import Section from '../../components/Section/Section'
import s from './RegisterPage.module.css'

export function RegisterPage() {
  console.log('registerPage');

  return (
    <FormBox buttonName={'Sign Up'} name={'signup_form'} title={'Sign Up'}>
      <Input placeholder={'Input your name'} name={'name'}>Name</Input>
      <Input type={'email'} placeholder={'Input your email'} name={'email'}>Email</Input>
      <Input type={'password'} placeholder={'Imput your password'} name={'password'}>Password</Input>
    </FormBox>
  )
}

