import React from 'react';
import { Link } from "react-router-dom";

import { data, images } from '../../constants';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Container } from 'react-bootstrap';


const Header = () => {
    return (
  
           <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
                <Container>
                    <Navbar.Brand href="#home" className="ps-5"><Link to='/' > <img src={images.logo} alt="logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav  className="ms-auto pe-5">
                            {data.Menu.map((item, index) => (
                                <Link to={item.link} ><button type="button" className="btn btn-dark brdn"><span className="px-3">{item.text} </span></button></Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

     
    )
}

export default Header