import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from "../../assets/gambar/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation-removebg-preview 1.png"
import image2 from "../../assets/gambar/seksual.png"
import image3 from "../../assets/gambar/fisik.png"
import image4 from "../../assets/gambar/psikis.png"
const ContentHome = () => {
  return (
    <>
      {/* Section 1 */}
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
              <Col md={4} style={{ marginTop: '7.5rem', marginLeft: '50px' }}>
                <h1>
                  <strong>Always Feel <br /> Safe Anywhere</strong>
                </h1>
                <p style={{ textAlign: 'justify' }}>
                  <strong>
                    Kami menghadirkan layanan edukasi terkait bagaimana menghindari dan melakukan perlawanan
                    apabila anda mendapatkan perlakuan tidak menyenangkan dari oknum tidak bertanggung jawab.
                  </strong>
                </p>
              </Col>
              <Col md={2}></Col>
              <Col md={6}>
                <img
                  src={image1}
                  alt=""
                />
              </Col>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Section 2 */}
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <div className="text-center">
              <h1>Kasus Korban Pelecehan Seksual di Indonesia</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="text-center mt-5">
            <div
              style={{
                backgroundColor: '#FAD9EC',
                padding: '20px',
                textAlign: 'left',
                borderRadius: '30px',
                display: 'flex',
              }}
            >
              <Col md={4}>
                <img src={image2} alt="" />
              </Col>
              <Col md={6} style={{ marginLeft: '10px', marginTop: '20px' }}>
                <h5>
                  <strong>Kekerasan Seksual</strong>
                </h5>
                <p style={{ textAlign: 'justify' }}>8.585 kasus</p>
              </Col>
            </div>
          </Col>

          <Col md={4} className="text-center mt-5">
            <div
              style={{
                backgroundColor: '#FAD9EC',
                padding: '20px',
                textAlign: 'left',
                borderRadius: '30px',
                display: 'flex',
              }}
            >
              <Col md={4}>
                <img src={image3} alt="" />
              </Col>
              <Col md={6} style={{ marginLeft: '10px', marginTop: '20px' }}>
                <h5>
                  <strong>Kekerasan fisik</strong>
                </h5>
                <p style={{ textAlign: 'justify' }}>6.621 kasus</p>
              </Col>
            </div>
          </Col>

          <Col md={4} className="text-center mt-5">
            <div
              style={{
                backgroundColor: '#FAD9EC',
                padding: '20px',
                textAlign: 'left',
                borderRadius: '30px',
                display: 'flex',
              }}
            >
              <Col md={4}>
                <img src={image4} alt="" />
              </Col>
              <Col md={6} style={{ marginLeft: '10px', marginTop: '20px' }}>
                <h5>
                  <strong>Kekerasan Psikis</strong>
                </h5>
                <p style={{ textAlign: 'justify' }}>6.068 kasus</p>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContentHome;
