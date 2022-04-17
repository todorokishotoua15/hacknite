import './App.css';
import Homepage from './Homepage/homepage'
import LoginPage from './loginpage/login';
import PaymentPage from './paymentpage/paymentpage'
import PaySuc from './paymentsuccessfulpage/paysuc'
import Suc from './paymentsuccessfulpage/suc'
import { BrowserRouter, Routes, Route,useNavigate} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom'
import BookPage from './specific_listing/specific_listing'

var path_multofmad = "/book/multofmad";
var path_batman = "/book/batman";
var path_dumbledore = "/book/dumbledore"
var path_yourname = "/book/yourname"
var path_silent = "/book/silent"
var path_tigerfish = "/book/tigerfish"


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/hacknite" element={<Homepage/>} ></Route> 
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path='/payment' element={<PaymentPage/>}></Route>

      <Route path={path_multofmad} element={<BookPage link = "https://www.youtube.com/embed/aWzlQ2N6qqg" title = "Doctor Strange in the Multiverse of Madness"
      runtime = "2 hr 6 min" rating = "8.8"
      desc = "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle."/>}></Route>
      
      <Route path={path_batman} element={<BookPage link = "https://www.youtube.com/embed/mqqft2x_Aa4" title = "The Batman" runtime = "2 hr 58 min" rating = "8.7" desc = "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. Watch him beat villains to a pulp in this exciting new film."/>}></Route>

      <Route path={path_dumbledore} element={<BookPage link = "https://www.youtube.com/embed/Fo6TfHkLW6Y" title = "Secrets of DumbleDore"
      runtime = "2 hr 23 min" rating = "6.6"
      desc = "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches."/>}></Route>

      <Route path={path_yourname} element={<BookPage link = "https://www.youtube.com/embed/xU47nhruN-Q" title = "Your Name"
      runtime = "1 hr 52 min" rating = "8.4"
      desc = "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person."/>}></Route>

      <Route path={path_silent} element={<BookPage link = "https://www.youtube.com/embed/nfK6UgLra7g" title = "Silent Voice"
      runtime = "2 hr 10 min" rating = "8.1"
      desc = "When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends."/>}></Route>

      <Route path={path_tigerfish} element={<BookPage link = "https://www.youtube.com/embed/e-IK7x8LI50" title = "Josee the Tiger and the Fish"
      runtime = "1 hr 39 min" rating = "7.7"
      desc = "Tsuneo is a university student, and Josee is a young girl who has rarely gone out of the house by herself due to her being unable to walk. The two meet when Tsuneo finds Josee's grandmother taking her out for a morning walk."/>}></Route>
      <Route path="/paysuc" element = {<PaySuc />}></Route>
      <Route path="/suc" element= {<Suc />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
