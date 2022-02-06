import { Fragment, useState } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import Filter from '../../components/Filter/Filter'
import Modal from '../../components/Modal/Modal'
import Section from '../../components/Section/Section'






export function ContactsPage() {
  const [showModal, setShowModal] = useState(false)

  const toggleModalWindow = () => {
    setShowModal(!showModal)
    showModal && document.body.removeAttribute('style')
  };

  return (
    <Fragment>
      {showModal && (<Modal onCloseModal={toggleModalWindow}>
        <ContactForm action={toggleModalWindow} />
      </Modal>)}
      {/* <Section title={'Phonebook'}>
        <ContactForm />
      </Section> */}
      <Section title={'Contacts'}>
        <Filter action={toggleModalWindow} />
        <ContactList />
      </Section>
    </Fragment>
  )
}

