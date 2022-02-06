import Input from '../Input/Input';
import Button from '../Button/Button'
import React, { useState, useEffect } from "react";
import { addContacts, editContacts } from '../../api/contacts';

import { useDispatch } from 'react-redux';
import FormBox from '../FormBox/FormBox';

const ContactForm = ({ action, contactId }) => {
  console.log(contactId);
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (contactId) {
      setName(contactId.name)
      setNumber(contactId.number)
    }
  }, [])

  const onInput = (evt) => {
    evt.target.name === "name" && setName(evt.target.value)
    evt.target.name === "number" && setNumber(evt.target.value)
  }

  const onEditContact = (evt) => {
    dispatch(editContacts({
      id: contactId.id,
      data: {
        name: name, number: number,
      },
    }

    ))
    action()
    console.log('edit');
  }

  const onAddContact = (evt) => {
    dispatch(addContacts(
      {
        name: name, number: number,
      }
    ))
    action()
  }

  return (
    <FormBox action={contactId ? onEditContact : onAddContact} buttonName={contactId ? 'Edit contact' : 'Add contact'} name={contactId ? 'editcontact' : 'addcontact'} title={contactId ? 'Edit contact' : 'Add contact'}>
      <Input name="name" value={name} placeholder={'Input new name'} inputData={onInput}>Name</Input>
      <Input name="number" value={number} placeholder={'Input new number'} tel='true' inputData={onInput}>Number</Input>
    </FormBox>
  )
}

export default ContactForm;
