import Input from '../Input/Input';
import Button from '../Button/Button'
import React, { useState, useEffect } from "react";
import { addContactsAction, getContactsAction } from '../../store/action';

import { useDispatch } from 'react-redux';
import FormBox from '../FormBox/FormBox';

const ContactForm = ({ action }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()

  const onInput = (evt) => {
    evt.target.name === "name" && setName(evt.target.value)
    evt.target.name === "number" && setNumber(evt.target.value)
  }

  useEffect(() => {
    dispatch(getContactsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const onAddContact = (evt) => {
    dispatch(addContactsAction(
      {
        name: name, phone: number,
      }
    ))
    action()
  }

  return (
    <FormBox action={onAddContact} buttonName={'Add contact'} name={'add_contact'} title={'Add Contact'}>
      <Input name="name" value={name} placeholder={'Input new name'} inputData={onInput}>Name</Input>
      <Input name="number" value={number} placeholder={'Input new number'} tel='true' inputData={onInput}>Number</Input>
    </FormBox>
  )
}

export default ContactForm;
