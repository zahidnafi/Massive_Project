import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/login",
        data: {name, password}
      })
      localStorage.setItem('token', data.access_token)
      navigate('/home')
    } catch (error) {
      console.error('Login Gagal:', error.response.data)
    }
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
                  <Form.Control type="text" placeholder="Masukkan username" required value={name} onChange={(e)=> setName(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Masukkan password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="secondary" className="mt-3" style={{backgroundColor: '#632B50'}}>
                  Login
                </Button>
              </Form>
              <p className="mt-3">
                Belum punya akun? <Link className="text-decoration-none" style={{color: '#632B50'}} to="/Register">Daftar disini</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;