import React from 'react'
import "./listing.css"
import BookButton from "../Homepage/book_button"

function Listing(props){
    return(
        <div class="card">
            <div className = "row">
                <div className = "col-6 center-block">
            <img src={props.img_source} class="card-img-top" alt="..."></img>
            </div>
            <div className = "col-6">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <BookButton dest = {props.dest}/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Listing