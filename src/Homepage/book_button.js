import React, {useState} from 'react';
import './book_button.css';
import  Book from '../specific_listing/specific_listing';
import {useNavigate} from 'react-router-dom'

function LoginButton(props) {
    const Navigate = useNavigate();
    return (
            <button type="button" class="btn btn-outline-success" onClick={() => {
               Navigate(props.dest)
            }}>Book NOW</button>
    )
}
export default LoginButton