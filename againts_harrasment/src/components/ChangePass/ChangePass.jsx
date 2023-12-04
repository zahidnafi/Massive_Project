import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ChangePasswordForm = () => {
    return (
        <Container className="mt-5" style={{ height: '77vh' }}>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header>Ganti Password</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="currentPassword">
                                    <Form.Label>Password Saat Ini</Form.Label>
                                    <Form.Control type="password" placeholder="Password Saat Ini" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="newPassword">
                                    <Form.Label>Password Baru</Form.Label>
                                    <Form.Control type="password" placeholder="Password Baru" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Konfirmasi Password Baru</Form.Label>
                                    <Form.Control type="password" placeholder="Konfirmasi Password Baru" />
                                </Form.Group>
                                <Button variant="secondary" href="login.html" style={{backgroundColor: '#FAD9EC',  color: 'black'}}>Simpan Perubahan</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ChangePasswordForm;
