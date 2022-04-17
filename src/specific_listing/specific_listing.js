import React from "react";
import './specific_listing.css';import Navbar from "../Navbar";
import logo from "../logo.png";
import { useNavigate,Link } from "react-router-dom";
import {useState} from "react";
import LoginButton from "../loginbutton";
import Footer from "../Homepage/footer"



export default function Listing_page(props){
    const Navigate = useNavigate();


    const[showTime,setshowTime] = useState("1000 hrs");

    function handletime(val){
        setshowTime(val);
        console.log(showTime)
    }

    const[seatNum,setseatNum] = useState("30");

    function handleseat(val){
        setseatNum(val);
        console.log(seatNum)
    }

    const timings = [];
    for(var i=10;i<=22;i+=2){
        const num = i-9;
        const reference = i+"00 hrs"
        var idnum = "btnradio"+num;
        timings[i] = (
            <>
            <input  type="radio" class="btn-check" name="btnradio" id={idnum} autocomplete="off"
            onClick = {()=>handletime(reference)}></input>
    <label class="btn btn-outline-light timing_buttons" for={idnum}>{i+"00 hrs"}</label>
    </>
        );
}



var seats = [];
var aisle =[];
for(var i=0;i<5;i++){
    aisle = [];
    for(var j=0;j<6;j++){
        var num = i*6 + j;
        var idnum = "btnradioseat"+num;
        const seatref = i*6+j+1;
        aisle.push((
            <>
            <input type="radio" class="btn-check" name="btnradio" id={idnum} autocomplete="off"
            onClick = {()=>handleseat(seatref)}></input>
            <label class="btn btn-outline-light btn-sm" for={idnum}>{i*6+j+1}</label>
    </>
        ))
    }

    seats.push((
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            {aisle}
        </div>
    ))
}






    return(
        <div className = "main-App">
        <div className='Nav'>
          <div className='Logo'>
              <Link to = "/">
              <img src={logo} className="logo"></img>
            </Link>
          </div>
          <Navbar />
          <div className="loginbtn">
              <LoginButton />
          </div>
      </div>
        
        <div className = "black-banner">
            <div className = "container">
                <div className = "row">

                    <div className = 'col'>
                    <iframe className = "trailer" width="560" height="315" src={props.link} title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>
                    </div>
                    
                    <div className = 'col'>
                    <h3 className="movie_title">{props.title}</h3>

                    <div className = 'row deetsoverall'>
                        <div className = 'col'>
                            <p className = "description">{props.desc}</p>
                        </div>
                        <div className = 'col'>
                        <p className = "deets">
                        <h5>{props.runtime}</h5>
                        <h5>Rated {props.rating} on IMDB</h5>
                    </p>
                        </div>
                    </div>
                    
                    </div>

                    
            
                </div>      

                <div className = 'row picker'>
                    <div className = 'col-6'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title pick-timings">PICKED TIMING : {showTime}</h5>
                                <div class="btn-group-vertical timings" role="group" aria-label="Basic radio toggle button group">
                                {timings}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className = 'col-6'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title pick-seats">PICKED SEAT : {seatNum}</h5>
                                {seats}

                            </div>
                        </div>
                    </div>
                </div>
                <div className = "ticket_details">
                <div class="card">
                    <h5 class="card-header ticket-header">Your Ticket Details:</h5>
                    <div class="card-body">
                        <h5 class="card-title ticket-title">{props.title}</h5>
                        <div className = 'row'>
                            <div className = 'col'>
                            <p class="card-text">
                            Show Time : {showTime}
                            <br></br>
                            Seat Number : {seatNum}
                        </p>
                            </div>
                            <div className = 'col'>
                                <img className= "ticket-logo" src = {logo} alt = "parallax"></img>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
                <button type="button" className="btn btn-primary paynowbtn btnnn" onClick={() => Navigate('/payment')}><h3 className="btnnn">Pay</h3></button>
            </div>
            </div>

            <Footer></Footer>
            </div>
            
    )}