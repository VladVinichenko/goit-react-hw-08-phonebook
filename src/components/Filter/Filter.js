import Input from '../Input/Input'
import { useDispatch } from 'react-redux'
import React, { useState } from "react";
import { filterContacts } from '../../store/contacts';
import Button from '../Button/Button';
import s from './Filter.module.css'


const Filter = ({ action }) => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')

  const onInputFilter = payload => {
    dispatch(filterContacts(payload.target.value.trim()))
    setFilter(payload.target.value)
  }

  return (
    <div>

      <div className={s.firstBox}>
        <div className={s.inputBox}>
          <Input className={s.input} name="filter" value={filter} inputData={onInputFilter} placeholder={'Search'}>Find contacts by name</Input>
        </div>


        <Button action={action}>Add contact</Button>
      </div>


    </div>
  )
}

export default Filter;
