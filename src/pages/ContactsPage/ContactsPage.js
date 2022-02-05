import { Fragment } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import Filter from '../../components/Filter/Filter'
import Section from '../../components/Section/Section'
import s from './ContactsPage.module.css'






export function ContactsPage() {


  return (
    <Fragment>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </Fragment>
  )
}

