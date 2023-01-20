import React from 'react'
import {Outlet,Link} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Service from './Service'
import About from './About'
import Contact from './Contact'

function Menu() {
  return (
  <>
 
    
          {/* <Navbar bg="dark" variant="dark">
              {/* <Navbar bg="dark" variant="lght">  */}
              {/* <Container>


                  <Nav className="me-auto">
   <Nav.Link  to="/">Home</Nav.Link>/
    <Nav.Link  to="/service">Service</Nav.Link>
    <Nav.Link to="/about">About Us</Nav.Link>
    <Nav.Link to="/contact">Content Us</Nav.Link> */} 
    <nav>
        <ul>
                <li> <Link to="/" className='link1'>Home</Link></li> 
                <li> <Link to="/service" className='link1'>Service</Link></li> 
                <li>  <Link to="/about" className='link1'>About Us</Link></li> 
                <li> <Link to="/contact" className='link1'>Contact Us</Link></li> 
                  </ul>
     </nav>

              {/* </Nav>
          </Container> */}


      <Outlet />

      </>
    
  )
}

export default Menu