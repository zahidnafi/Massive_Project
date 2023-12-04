import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Artikel from "../../assets/gambar/ooui_articles-ltr.png"
import Video from "../../assets/gambar/ph_video-fill.png"
import Alat from "../../assets/gambar/fluent_spray-can-16-filled.png"
import { Link } from 'react-router-dom';

const FeaturesContent = () => {
  return (
    <section className="Features">
      <Container className="mt-5 mb-5" >
        <Row style={{marginBottom: '38vh'}}>
          <Col md={12} style={{ textAlign: 'center' }}>
            <h1>Features</h1>
          </Col>
          <Col md={4} className="text-center mt-5">
            <div style={{ backgroundColor: '#FAD9EC', padding: '20px', textAlign: 'center', borderRadius: '30px' }}>
              <div>
                <img src={Artikel} alt="" className="img-fluid mx-auto d-block" />
              </div>
              <div style={{ marginTop: '20px' }}>
                <h5><strong>Artikel</strong></h5>
                <p style={{ textAlign: 'center' }}>Dapatkan edukasi mengenai cara menghadapi tindakan tidak menyenangkan di manapun anda berada dari oknum tidak bertanggung jawab.</p>
                <Link to="/Articles" ><Button variant="secondary" style={{backgroundColor: '#632B50'}} className="mt-3">Cek Disini</Button></Link>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center mt-5">
            <div style={{ backgroundColor: '#FAD9EC', padding: '20px', textAlign: 'center', borderRadius: '30px' }}>
              <div>
                <img src={Video} alt="" className="img-fluid mx-auto d-block" />
              </div>
              <div style={{ marginTop: '20px' }}>
                <h5><strong>Video Tutorial Self Defense</strong></h5>
                <p style={{ textAlign: 'center' }}>Teknik pertahanan yang ditampilkan dalam bentuk video untuk tindakan preventif apabila pelaku melakukan kontak fisik.</p>
              <Link to="/Video"><Button variant="secondary" style={{backgroundColor: '#632B50'}} className="mt-3">Cek disini</Button></Link>  
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center mt-5">
            <div style={{ backgroundColor: '#FAD9EC', padding: '20px', textAlign: 'center', borderRadius: '30px' }}>
              <div>
                <img src={Alat} alt="" className="img-fluid mx-auto d-block" />
              </div>
              <div style={{ marginTop: '20px' }}>
                <h5><strong>Rekomendasi Alat Self Defense</strong></h5>
                <p style={{ textAlign: 'center' }}>Alat yang direkomendasikan dan dapat dibawa kemana saja yang menjadi opsi untuk perlindungan dan pertahanan diri.</p>
                <Link to="/Tools"><Button  variant="secondary" style={{backgroundColor: '#632B50'}} className="mt-3">Cek disini</Button></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesContent;
