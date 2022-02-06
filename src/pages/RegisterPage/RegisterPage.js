import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormBox from '../../components/FormBox/FormBox'
import Input from '../../components/Input/Input'
import { userSignUp } from '../../api/user'


export function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onInput = (evt) => {
    evt.target.name === "name" && setName(evt.target.value)
    evt.target.name === "email" && setEmail(evt.target.value)
    evt.target.name === "password" && setPassword(evt.target.value)
  }

  const onSubmitRegister = evt => {
    // console.log({ name: name, email: email, password: password, });
    dispatch(userSignUp(
      {
        name: name, email: email, password: password,
      }
    ))
    // action()
  }

  return (
    <FormBox buttonName={'Sign Up'} name={'signup_form'} title={'Sign Up'} action={onSubmitRegister}>
      <Input value={name} inputData={onInput} placeholder='Input your name' name='name'>Name</Input>
      <Input value={email} inputData={onInput} type='email' placeholder='Input your email' name='email'>Email</Input>
      <Input value={password} inputData={onInput} type='password' placeholder='Imput your password' name='password'>Password</Input>
    </FormBox>
  )
}

