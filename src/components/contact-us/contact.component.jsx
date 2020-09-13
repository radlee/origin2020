import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import { Container } from 'reactstrap';

class ContactForm extends Component {
    state = {
        email: '',
        subject: '',
        message: ''
    }

    handleSubmit(e) {
        e.preventDefault()


        emailjs.send(
            'gmail',
            'contact_form',
            'templateParams',
            'user_DWOuhEd9UNjZKbOHm5NyC'
        )

        this.resetForm()
        alert('Message Sent')
    }

    resetForm() {
        this.setState({
            
        })
        
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {
        return(
            <div data-aos="fade-up" data-aos-duration="4000">
                <Container id="contact">
                    <h1 className="h1">Get in Touch</h1>
                    <hr className="heading-horizon" />
                    <h3 className="insta"> <span className="handle">Instagram Handle: @proriginallee</span></h3>
                </Container>
            </div>

            
        )
    }
}

export default ContactForm;

