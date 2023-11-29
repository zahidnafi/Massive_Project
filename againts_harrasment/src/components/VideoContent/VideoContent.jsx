import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const VideoContent = () => {
  return (
    <section id="VideoSection">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="latest-articles-title mt-5 mb-3" style={{ textAlign: 'center' }}>
              Video Rekomendasi
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-3 mb-5">
            <Card>
              <iframe
                width=""
                height="700"
                src="https://www.youtube.com/embed/AaTYHDI-o1w?si=d1x0AL1DGQScq1iX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <h5 className="card-title">Saatnya Berani Tangkal Pelecehan Seksual⁣ | Catatan Najwa</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <h2 className="latest-articles-title">Video Terkait</h2>
          </Col>
        </Row>
        <Row>
          {/* Video 1 */}
          <Col md={4} className="mb-4">
            <Card>
              <iframe
                width=""
                height="315"
                src="https://www.youtube.com/embed/xxX16EoB000?si=pNebO_ZWmpHpgHyq"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <h5 className="card-title">3 Alat Perlindungan Diri yang WAJIB Punya!</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Video 2 */}
          <Col md={4} className="mb-4">
            <Card>
              <iframe
                width=""
                height="315"
                src="https://www.youtube.com/embed/x9Qkfh4fUQs?si=XILzplWI2K9bomN1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <h5 className="card-title">Cara Mengatasi Trauma Akibat Pelecehan Seksual !!</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Video 3 */}
          <Col md={4} className="mb-4">
            <Card>
              <iframe
                width=""
                height="315"
                src="https://www.youtube.com/embed/B7pdkyeOZok?si=vfeNZg16qZFy3skS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <h5 className="card-title">Apa Yang Harus Dilakukan Jika Mengalami Kekerasan Seksual?</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Video 4 */}
          <Col md={4} className="mb-4">
            <Card>
              <iframe
                width=""
                height="315"
                src="https://www.youtube.com/embed/dV3tJ8idpeQ?si=bqBFeixyJapLmGTY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <h5 className="card-title">Catcall Bukan Pujian, Itu Pelecehan | SPEAK UP</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Video 5 */}
          <Col md={4} className="mb-4">
            <Card>
              <iframe
                width=""
                height="315"
                src="https://www.youtube.com/embed/-V4vEyhWDZ0?si=q3Q_hFmFo-Xzj-sO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <h5 className="card-title">5 Pertahanan Choke Hold yang Wajib Diketahui Wanita | Bela Diri | Aja Dang</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Video 6 */}
          <Col md={4} className="mb-4">
            <Card>
              <iframe
                width=""
                height="315"
                src="https://www.youtube.com/embed/JJ5oH4PB368?si=EXxkuuGdJbM6Hsi0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <h5 className="card-title">Women’s Self-Defense (BJJ Punch Protection)</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VideoContent;
