import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    // Redirect or perform other actions after successful login
    console.log('Login logic goes here');
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <div className="text-center mb-5">
                <h2>Welcome to <strong>Againts Harrasment</strong></h2>
              </div>
              <h4>Login</h4>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Masukkan username" required />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Masukkan password" required />
                </Form.Group>
                <Link to="/Home"><Button type="submit" variant="primary" className="mt-3">
                  Login
                </Button></Link>
              </Form>
              <Link className="text-decoration-none" to="/Register"><p className="mt-3">
                Belum punya akun? <a href="landing_page.html">Daftar disini</a>
              </p></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
