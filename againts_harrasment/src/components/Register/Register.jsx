import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
         <Card>
            <Card.Body>
            <Form className="border-form">
            <div className="form-group">
              <h2 className="mb-4">Register</h2>
              <Form.Label htmlFor="username">Email</Form.Label>
              <Form.Control type="text" id="username" placeholder="Masukkan Email" />
            </div>
            <div className="form-group">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control type="text" id="username" placeholder="Masukkan username" />
            </div>
            <div className="form-group">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" id="password" placeholder="Masukkan password" />
            </div>
            <div className="form-group">
              <Form.Label htmlFor="confirm-password">Konfirmasi Password</Form.Label>
              <Form.Control type="password" id="confirm-password" placeholder="Konfirmasi password" />
            </div>
            <Link to="/Login"><Button className="mt-3" href="login.html" variant="primary" type="button">
              Daftar
            </Button></Link>
          </Form>
          <Link  className="text-decoration-none" to="/Login"><p className="mt-3">
            Sudah punya akun? <a href="login.html">Login disini</a>
          </p></Link>
            </Card.Body>
         </Card>
          
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;