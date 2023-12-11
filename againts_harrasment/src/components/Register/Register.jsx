import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        // handle
      }
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/register",
        data: { name, email, password }
      })
      if (data === 'Succes create account') navigate('/')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Form className="border-form" onSubmit={handleRegister}>
                <div className="form-group">
                  <h2 className="mb-4">Register</h2>
                  <Form.Label htmlFor="username">Email</Form.Label>
                  <Form.Control type="text" id="email" placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <Form.Label htmlFor="username">Username</Form.Label>
                  <Form.Control type="text" id="username" placeholder="Masukkan username" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control type="password" id="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <Form.Label htmlFor="confirm-password">Konfirmasi Password</Form.Label>
                  <Form.Control type="password" id="confirm-password" placeholder="Konfirmasi password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <Button className="mt-3" style={{ backgroundColor: '#632B50' }} variant="secondary" type="submit">
                  Daftar
                </Button>
              </Form>
              <Link className="text-decoration-none" style={{ color: '#632B50' }} to="/"><p className="mt-3">
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