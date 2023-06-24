import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'; 
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import emailjs from '@emailjs/browser';
import validate from "validate.js";
import Box from "@mui/material/Box/Box";
import Snackbar from '@mui/material/Snackbar';


const Theme = createTheme({
    palette: {
      mode: "dark"
    },
    spacing: 6
});

let SERVICE_ID = 'calvincai'
let TEMPLATE_ID = 'template_07nyks7'
let USER_ID = 'Hfo06vknUNEUDO6MT'


const schema = {
    firstname: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 128,
      },
    },
    lastname: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum: 128,
        },
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: true,
      length: {
        maximum: 300,
      },
    },
    phone: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum: 20,
        },
      },
      message: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum: 1000,
        },
      },
};

const ContactForm = () => {

    const sendEmail = (e) => {

        e.preventDefault();
            emailjs.sendForm(
              SERVICE_ID,
              TEMPLATE_ID,
              e.target,
              USER_ID
            )
            .then()
            .catch(error => console.log('FAILED...', error));
    
            setFormState(formState => ({
              ...formState,
              isValid: false,
              values: {},
              touched: {},
              errors: {}
            }));
    }


    const failNotif = () => {

    }

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
      });
    
      useEffect(() => {
        const errors = validate(formState.values, schema);
    
        setFormState(formState => ({
          ...formState,
          isValid: errors ? false : true,
          errors: errors || {},
        }));
      }, [formState.values]);
    
      const handleChange = (e) => {
        e.persist();
    
        setFormState(formState => ({
          ...formState,
          values: {
            ...formState.values,
            [e.target.name]:
              e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value,
          },
          touched: {
            ...formState.touched,
            [e.target.name]: true,
          },
        }));
      };
    
      const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;


    return (
        <ThemeProvider theme = {Theme}>
            <form 
                headers='application/json'
                name="contact-form"
                onSubmit={sendEmail}
            >
                <div className = "container-sm">
                    <div className = "row" id = "contact-form">
                        <div className = "col-lg" id = "field">
                            <div className = "form">
                                <TextField
                                    fullWidth
                                    placeholder="First Name"
                                    label = "First Name"
                                    variant="outlined"
                                    size="medium"
                                    sx={{
                                        input: {
                                        color: "#4682B4"
                                        },
                                        width: { md: 330 }
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#ADD8E6' },
                                    }}
                                    name = "firstname"
                                    id = "firstname"
                                    helperText={
                                        hasError('firstname') ? formState.errors.firstname[0] : null
                                    }
                                    error={hasError('firstname')}
                                    onChange={handleChange}
                                    type="text"
                                    value={formState.values.firstname || ''}
                                />
                            </div>
                        </div>
                        <div className = "col-lg" id = "field">
                            <div className = "form">
                                <TextField
                                    fullWidth
                                    placeholder="Last Name"
                                    label = "Last Name"
                                    variant="outlined"
                                    size="medium"
                                    sx={{
                                        input: {
                                        color: "#4682B4"
                                        },
                                        width: { md: 330 }
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#ADD8E6' },
                                    }}
                                    name = "lastname"
                                    id = "lastname"
                                    helperText={
                                        hasError('lastname') ? formState.errors.lastname[0] : null
                                    }
                                    error={hasError('lastname')}
                                    onChange={handleChange}
                                    type="text"
                                    value={formState.values.lastname || ''}
                            />
                            </div>
                        </div>
                    </div>
                    <div className='row' id = "contact-form">
                        <div className = "col-lg" id = "field">
                            <div className = "form">
                                <TextField
                                    fullWidth
                                    placeholder="E-mail"
                                    label = "E-mail"
                                    variant="outlined"
                                    size="medium"
                                    sx={{
                                        input: {
                                        color: "#4682B4"
                                        },
                                        width: { md: 330 }
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#ADD8E6' },
                                    }}
                                    name = "email"
                                    id = "email"
                                    helperText={
                                        hasError('email') ? formState.errors.email[0] : null
                                    }
                                    error={hasError('email')}
                                    onChange={handleChange}
                                    type="text"
                                    value={formState.values.email || ''}
                            />
                            </div>
                        </div>
                        <div className = "col-lg" id = "field">
                            <div className = "form">
                                <TextField
                                    fullWidth
                                    placeholder="Phone Number"
                                    label = "Phone Number"
                                    variant="outlined"
                                    size="medium"
                                    sx={{
                                        input: {
                                        color: "#4682B4"
                                        },
                                        width: { md: 330 }
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#ADD8E6' },
                                    }}
                                    name = "phone"
                                    id = "phone"
                                    helperText={
                                        hasError('phone') ? formState.errors.phone[0] : null
                                    }
                                    error={hasError('phone')}
                                    onChange={handleChange}
                                    type="text"
                                    value={formState.values.phone || ''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className = "row" id = "contact-field">
                        <TextField
                            multiline
                            minRows={6}
                            maxRows={6}
                            fullWidth
                                placeholder="Message"
                                label = "Message"
                                variant="outlined"
                                size="medium"
                                sx={{
                                    input: {
                                    color: "#4682B4"
                                    },
                                    width: { md: 700 }
                                }}
                                InputLabelProps={{
                                    style: { color: '#ADD8E6' },
                                }}
                                name = "message"
                                id = "message"
                                helperText={
                                    hasError('message') ? formState.errors.message[0] : null
                                }
                                error={hasError('mesage')}
                                onChange={handleChange}
                                type="text"
                                value={formState.values.message || ''}
                        />
                    </div>
                    <div className = "centered">
                        <Button size="large"
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={!formState.isValid}
                            >
                                Submit
                        </Button>
                    </div>
                </div>
            </form>
        </ThemeProvider>
    )
}

export default ContactForm