import React, { useState } from "react";

import './ContactForm.css';

export default function ContactForm() {
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            response: ''
        }
    )

    function onChange(event) {
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function onSubmitClick(event) {
        event.preventDefault();
        if(formData.name.trim() == '' || formData.email.trim() == '' || formData.response.trim() == '') {
            window.alert('Enter data in all fields!')
            return;
        }
        console.log(formData);
    }

    return(
        <div className="contact-form-container">
            <form className="my-form">
                <input onChange={onChange} type="text" name="name" id="name" placeholder="Your Name" required />
                <input onChange={onChange} type="email" name="email" id="email" placeholder="Your Email" required />
                <textarea onChange={onChange} placeholder="Tell us more..." name="response" id="response">
                </textarea>
                <button onClick={onSubmitClick}>SUBMIT</button>
            </form>
        </div>
    )
}