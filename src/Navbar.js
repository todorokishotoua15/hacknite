import React from 'react'
import "./navbar.css"
import {useNavigate} from 'react-router-dom'

function Navbar() {
    const Navigate = useNavigate();
    return (
        
        <nav>
            
            <form class="d-flex searchbar">
                <input class="form-control me-2" type="search" placeholder="Look for your favourite movies now!!" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            {/* <ul  className='navtabs' >
                <div className='tabss'>
                    <li>
                        <a href='#'><p className='tab'>TAB1</p></a>
                    </li>
                    <li>
                        <a href='#'><p className='tab'>TAB2</p></a>
                    </li>
                    <li>
                        <a href='#'><p className='tab'>TAB3</p></a>
                    </li>
                    <li>
                        <a href='#'><p className='tab'>TAB4</p></a>
                    </li>
                    <li>
                        <a href='#'><p className='tab'>TAB5</p></a>
                    </li>
                    <li>
                        <a href='#'><p className='tab'>TAB6</p></a>
                    </li>
                </div>

            </ul> */}
        </nav>

    )
}

export default Navbar