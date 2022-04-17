import React, {useState} from 'react';
import './loginbutton.css';
import Login from './loginpage/login'
import {useNavigate} from 'react-router-dom'



function LoginButton(props) {

    const Navigate = useNavigate();
    const [name,setname] = useState("Login/SignUp")
    return (
        <div>
            <button type="button" class="btn btn-outline-success" onClick={() => {

               Navigate("/login")
            }}>{name}</button>
            <div>
                <h1 id='person_name'>
                    
                </h1>
            </div>
        </div>
    )
}
export default LoginButton