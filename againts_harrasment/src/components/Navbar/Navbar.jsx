import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
      <Navbar expand="lg" style={{backgroundColor: '#FAD9EC'}}>
        <Navbar.Brand href="landingpage.html">
          <strong style={{ marginLeft: '25px' }}>AGAINTS</strong>
          <br />
          <strong style={{ marginLeft: '40px' }}>HARRASMENT</strong>
          <br />
          <p style={{ fontSize: 'small', marginLeft: '40px' }}>Powered by Cakra Lentera</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto" style={{ marginRight: '17vh' }}>
            <Link className="text-decoration-none" to="/"><strong style={{marginRight:'20px', color: 'black', textDecoration:'none' }}>Home</strong></Link>
            <Link className="text-decoration-none" to="/About"><strong style={{marginRight:'20px', color: 'black',  }}>About</strong></Link>
            <Link className="text-decoration-none" to="/Features"><strong style={{marginRight:'20px', color: 'black',  }}>Features</strong></Link>
            <Link className="text-decoration-none" to="/Articles"><strong style={{marginRight:'20px', color: 'black',  }}>Article</strong></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default CustomNavbar;