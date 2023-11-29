import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from "../../assets/gambar/Hero.png"
const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col className="text-center mt-5 mb-5">
            <div
              style={{
                backgroundColor: '#FAD9EC',
                padding: '20px',
                textAlign: 'left',
                borderRadius: '30px',
                display: 'flex',
              }}
            >
              <Col md={4} style={{ marginTop: '8rem', marginLeft: '50px' }}>
                <h1>
                  <strong>Selamat <br /> Datang</strong>
                </h1>
                <p style={{ textAlign: 'justify' }}>
                  <strong>
                    Kami akan selalu memberikan berbagai macam cara yang terbaik untuk melindungi anda dari
                    tindakan tidak menyenangkan, semua wanita memiliki hak untuk merasa aman dimanapun
                    berada.
                  </strong>
                </p>
              </Col>
              <Col md={2}></Col>
              <Col md={6}>
                <img src={image} alt="" />
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
