import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";


const CustomNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FAD9EC' }}>
      <Navbar.Brand href="landingpage.html">
        <strong style={{ marginLeft: '25px' }}>AGAINTS</strong>
        <br />
        <strong style={{ marginLeft: '40px' }}>HARRASMENT</strong>
        <br />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto align-items-center" style={{ marginRight: '17vh' }}>
          <Link className="text-decoration-none" to="/Home">
            <strong style={{ marginRight: '20px', color: 'black', textDecoration: 'none' }}>Home</strong>
          </Link>
          <Link className="text-decoration-none" to="/About">
            <strong style={{ marginRight: '20px', color: 'black' }}>About</strong>
          </Link>
          <Link className="text-decoration-none" to="/Features">
            <strong style={{ marginRight: '20px', color: 'black' }}>Features</strong>
          </Link>
          <Link className="text-decoration-none" to="/Articles">
            <strong style={{ marginRight: '20px', color: 'black' }}>Article</strong>
          </Link>
          <NavDropdown
            title={<VscAccount />}
            id="userDropdown"
            style={{ marginLeft: '20px', color: 'black' }}
          >
            <NavDropdown.Item><Link to="/ChangePass" className="text-decoration-none" style={{color:'black'}}>Ganti Password</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/" className="text-decoration-none" style={{color:'black'}}>Keluar</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
