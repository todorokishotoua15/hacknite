import React from "react"
import logo from '../logo.png'
import './paymentpage.css'
import card from '../card.png'
import { useNavigate } from "react-router-dom"
import Footer from "../Homepage/footer"

export default function PaymentPage() {
    const Navigate = useNavigate();
    return (
        <div className = "main-payment">
          <div className='Nav nv'>
          <div className='logo111'>
              <img src={logo} className="logo11" onClick={() => Navigate("/")}></img>
          </div>
          <div>
              <label for="Debit Card Number" id="debit" className="field1 fieldname1">Enter Credit/Debit card number:</label>
              <input type="text" className="field1 input1"></input>
          </div>
          <div>
              <label for="Debit Card Number" id="debit" className="field1 fieldname2">Enter Card Holder's name:</label>
              <input type="text" className="field1 input2"></input>
          </div>
          <div>
              <label for="Debit Card Number" id="debit" className="field1 fieldname3">Expiry Date</label>
              <input type="text" className="field1 input3"></input>
              <label for="Debit Card Number" id="debit" className="field1 fieldname4">CVV</label>
              <input type="text" className="field1 input4"></input>
          </div>
          <div>
          <button type="button" class="btn btn-outline-success fieldname5" onClick={() => Navigate("/paysuc")}>Submit</button>

          </div>
          <div>
              <img src={card} className="card1"></img>
          </div>

          </div> 
        </div>
        
    )
}