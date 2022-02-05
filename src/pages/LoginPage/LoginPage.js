import { Fragment } from 'react'
import Button from '../../components/Button/Button'
import FormBox from '../../components/FormBox/FormBox'
import Input from '../../components/Input/Input'
import Section from '../../components/Section/Section'
import s from './LoginPage.module.css'

export function LoginPage() {


  return (
    <Fragment>
      <Section title={'Login'} >
        <FormBox buttonName={'Login'} name={'login_form'}>
          <Input placeholder={'Input your name'} name={'name'}>Name</Input>
          <Input placeholder={'Imput your password'} name={'password'}>Password</Input>
        </FormBox>
      </Section>
    </Fragment>
  )
}

