import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="md" collapseOnSelect>
            <Container>
              <Navbar.Brand href="/">taxPro</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link>
                  <Link to="/" className='text-white'><i className="fas fa-home"></i>Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                  <Link to="/services" className='text-white'><i className="fab fa-servicestack"></i>Services</Link>
                  </Nav.Link>
                  <Nav.Link>
                  <Link to="/login" className='text-white'><i className="fas fa-user"></i>Sign In</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    )
}

export default Header;
