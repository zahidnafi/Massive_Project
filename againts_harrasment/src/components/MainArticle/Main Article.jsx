import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from "../../assets/gambar/Artikel 1.webp"
import { Link } from 'react-router-dom';

const MainArticle = () => {
  return (
    <section id="popular-articles">
      <Container className="mt-5 mb-5">
        <h2 className="text-center">Artikel Populer</h2>
        <p className="text-center">Berikut artikel mengenai Self Defense yang bisa anda baca.</p>
        <Row className="justify-content-center">
          <Col className="mb-4">
            <Card className="popular-article-card">
              <Row>
                <Col md={6}>
                  <Card.Img src={Image} alt="Gambar Artikel Populer 1" />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title style={{ paddingTop: '100px' }}>Catcalling Bikin Resah, Bagaimana Cara Menyikapinya?</Card.Title>
                    <Card.Text>
                      “Ada beberapa hal yang dapat dilakukan guna menyikap catcalling. Salah satunya adalah dengan memutuskan terlebih dahulu apakah kamu perlu menghindar atau melawan.”
                    </Card.Text>
                    <Link to='/ArtikelUtama'><Button variant="secondary" style={{backgroundColor: '#632B50'}}>Baca Selengkapnya</Button></Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainArticle;
