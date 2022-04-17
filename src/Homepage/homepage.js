import Navbar from "../Navbar";
import './homepage.css'
import Listing from "../Homepage_listings/listing"
import logo from "../logo.png"
import Listing_page from '../specific_listing/specific_listing'
import LoginButton from "../loginbutton"
import Carousel from 'react-bootstrap/Carousel'
import BatmanBanner from '../batman_banner.jpg'
import DoctorStrangeBanner from '../DoctorStrangeBanner.jpg'
import FantasticBeastBanner from '../FantasticBeasts.jpg'
import {Link} from "react-router-dom"
import SOD from '../SOD.jpg'
import YN from '../YN.jpg'
import SV from '../SV.jfif'
import JT from '../JT.jpg'
import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './footer'

export default function Homepage(){
    useEffect(() => {
        AOS.init({
          duration: 2000
        });
    })
    return(
        <div className='main-App'>
            
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
      <div className="slideshow">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BatmanBanner}
            alt="First slide"
          />
          <Carousel.Caption>
            
            <p>"I am vengence! Book Batman at 50% off!"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={DoctorStrangeBanner}
            alt="Second slide"
          />

          <Carousel.Caption>
            
            <p>Explore Madness in Multiverse with benedict cumberbatch! Coming soon to your nearest theatres</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FantasticBeastBanner}
            alt="Third slide"
          />

          <Carousel.Caption>
            
            <p>Wizarding world is here once again with secrets of dumbledore! Explore at 75% discount!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className = 'black-bg'>
        <div className='container'>
          <div className = "row">
            <div className='col-6 listing_col'>
            <div className = "center-block" data-aos="fade-right">
            <Listing img_source ="https://pbs.twimg.com/media/FEALo09X0AAiaeQ.jpg:large" title = "Multiverse of Madness" desc = "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle." dest = "/book/multofmad"/>
            </div>
            </div>
            <div className='col-6 listing_col'>
            <div className = "center-block"data-aos="fade-left">
            <Listing img_source ="https://cdn-www.comingsoon.net/assets/uploads/gallery/the-batman-poster-stills/the-batman-poster.jpg" title = "The Batman" desc = "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. Watch him beat villains to a pulp in this exciting new film." dest = "book/batman"/>
            </div>
            </div>
            <div className='col-6 listing_col'>
            <div className = "center-block" data-aos="fade-right">
            <Listing img_source ={SOD} title = "Secrets of DumbleDore" desc = "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. " dest = "/book/dumbledore"/>
            </div>
            </div>
            <div className='col-6 listing_col'>
            <div className = "center-block" data-aos="fade-left">
            <Listing img_source ={YN} title = "Your Name" desc = "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person." dest = "book/yourname"/>
            </div>
            </div>
            <div className='col-6 listing_col'>
            <div className = "center-block"data-aos="fade-right">
            <Listing img_source ={SV} title = "Silent Voice" desc = "When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends." dest = "/book/silent"/>
            </div>
            </div>
            <div className='col-6 listing_col'>
            <div className = "center-block" data-aos="fade-left">
            <Listing img_source ={JT} title = "Josee the Tiger and the Fish" desc = "Tsuneo is a university student, and Josee is a young girl who has rarely gone out of the house by herself due to her being unable to walk. The two meet when Tsuneo finds Josee's grandmother taking her out for a morning walk." dest = "book/tigerfish"/>
            </div>
            </div>
            
          </div>
         
          
        </div>

        
       
      </div>
      <div className="footlogo">
          <Footer></Footer>
    </div>
    </div>
    );
}