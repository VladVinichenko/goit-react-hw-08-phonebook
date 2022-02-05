import { Fragment, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import FormBox from '../../components/FormBox/FormBox'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import Section from '../../components/Section/Section'
import s from './LoginPage.module.css'

export function LoginPage() {
  console.log('loginPage');


  return (
    <FormBox buttonName={'Login'} name={'login_form'} title={'Login'}>
      <Input placeholder={'Input your name'} name={'name'}>Name</Input>
      <Input placeholder={'Imput your password'} name={'password'}>Password</Input>
    </FormBox>
  )
}

