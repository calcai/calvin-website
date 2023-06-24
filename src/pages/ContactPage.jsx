import React from 'react'
import Socials from '../components/Contact/Socials';
import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  return (
    <>
      <h1 className = "centered" id = "primary">Contact</h1>
      <ContactForm/>
      <Socials/>
    </>
  )
}

export default ContactPage 