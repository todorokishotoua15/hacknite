import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './paysuc.css'
import logo from '../logo.png'
import { useNavigate } from "react-router-dom"
//import {Navigate} from 'react-router-dom'


export default function PaySuc() {
    const Navigate = useNavigate();
    setTimeout(function() {
        Navigate("/suc")
    }, 2000);
    return (
        <div className = "mainpage">
            <div className='Nav nv'>
            <div className='logo111'>
              <img src={logo} className="logo11" onClick={() => Navigate("/")}></img>
            </div>
            <div className='spindiv'>
                <Spinner animation="border" role="status" className='spin' variant="success">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <div>
                <p className='loading'>Loading please wait...</p>
            </div>
            </div>
            
            
        </div>
    )
}