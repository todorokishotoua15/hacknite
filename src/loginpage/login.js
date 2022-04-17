import React, {useState} from 'react'
import Navbar from '../Navbar'
import "./login.css"
import logo from "../logo.png"
import {useNavigate} from 'react-router-dom'
import LoginButton from '../loginbutton'
import Footer from "../Homepage/footer"
export default function LoginPage() {
    const Navigate = useNavigate();
   


    return (
        <div className='main-App'>
          
      <div className='Nav nv'>
          <div className='Logo'>
              <img src={logo} className="logo1" onClick={() => Navigate("/")}></img>
          </div>
          
          {/* <div className='bodyy'>
            <p className='logintitle'>Login/Sign Up!</p>
          </div> */}
          <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" id='username'>Username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>
        
        <button type="submit" class="btn btn-outline sub" onClick={() => {

            let x = document.getElementById('username').value;
            
            console.log(x);
            Navigate("/")
        }}>Submit</button>
        </form>
          
      </div>
      <Footer></Footer>
      
    </div>
    )
}