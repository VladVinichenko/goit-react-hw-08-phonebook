import { useSelector, useDispatch } from 'react-redux'
import s from './ContactList.module.css'
import DeleteButton from '../DeleteButton/DeleteButton'
import propTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';
import { getContacts, deleteContacts } from '../../api/contacts';
import Modal from '../Modal/Modal';
import ContactForm from '../ContactForm/ContactForm';

const ContactList = () => {
  const [selectUserData, setSelectUserData] = useState('')
  const dispatch = useDispatch()
  const contacts = useSelector(store => store.contactReducer.contacts)
  const filter = useSelector(store => store.contactReducer.filter)

  console.log(selectUserData);

  console.log(selectUserData);

  const itemList = filter.length > 0 ? filter : contacts

  const [showModal, setShowModal] = useState(false)
  const toggleModalWindow = () => {
    setShowModal(!showModal)
    showModal && document.body.removeAttribute('style')
    showModal && setSelectUserData('')
  };

  const onClickDelete = payload => {
    dispatch(deleteContacts(payload))
  }

  const onClickItemChange = evt => {
    if (evt.target.dataset.name !== 'itemContact') {
      return
    }

    setSelectUserData(contacts.filter(el => el.id === evt.target.dataset.id)[0])
    toggleModalWindow()
  }

  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<Fragment>
    {itemList.length > 0 && !filter.error ? (<ul className={s.list}>
      {itemList.map((item) =>
        <li key={item.id} className={s.item} onClick={onClickItemChange} data-id={item.id} data-name='itemContact'>
          <div className={s.textBox} data-id={item.id} data-name='itemContact'>
            <p className={s.name} data-id={item.id} data-name='itemContact'>{item.name}</p>
            <p className={s.number} data-id={item.id} data-name='itemContact'>{item.number}</p>
          </div>
          <DeleteButton onDeleteContact={onClickDelete} id={item.id} />
        </li>
      )}
    </ul>) : (
      <p className={s.text}>no results</p>
    )}

    {showModal && (<Modal onCloseModal={toggleModalWindow}>
      <ContactForm action={toggleModalWindow} contactId={selectUserData} />
    </Modal>)}
  </Fragment>
  )
}

ContactList.propTypes = {
  contacts: propTypes.array
}

export default ContactList