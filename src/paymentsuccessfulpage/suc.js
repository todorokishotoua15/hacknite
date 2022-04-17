import React from 'react'
import logo from '../logo.png'
import {useNavigate} from 'react-router-dom'
import './suc.css'

export default function Suc() {
    const Navigate = useNavigate();
    setTimeout(function() {
        Navigate("/")
    }, 2000);
    return (
        <div className = "mainpage">
            <div className='Nav nv'>
            <div className='logo111'>
              <img src={logo} className="logo11" onClick={() => Navigate("/")}></img>
            </div>
            <div>
                <h1 className='suctitle'>Success!</h1>
                <h3 className='sucsubtitle'>Redirecting you to the Home Page...</h3>
            </div>
            </div>
        </div>
    )
}