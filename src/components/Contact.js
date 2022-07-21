/* eslint-disable jsx-a11y/alt-text */
// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({name,phone,email,photo}) => {
    return <div class="contact">
        <div class="box center">
            <img src={`${photo}`}/>
            <div class="detail">
                <p>{name}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
        
    </div>
}

export default Contact;