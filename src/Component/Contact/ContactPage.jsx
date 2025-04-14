import React from 'react'
import "../../assets/Css/Contact.css";
import HOC from '../Main/HOC';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function ContactPage() {
    return (
        <>
            <ContactInfo />
            <ContactForm />
        </>
    )
}

export default HOC(ContactPage)