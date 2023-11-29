import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p style={{ color: 'black' }}>2023 CakraLentera Agency</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p style={{ color: 'black' }}>
              All Rights Reserved | <a href="#">Terms and Conditions</a> |{' '}
              <a href="#">Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;