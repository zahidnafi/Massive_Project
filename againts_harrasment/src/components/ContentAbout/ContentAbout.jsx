import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContentAbout.css';
import Hana from "../../assets/gambar/Hana.jpg"
import Furqon from "../../assets/gambar/Furqon.jpg"
import Aluthfi from "../../assets/gambar/Aluthfi.jpg"
import Zahid from "../../assets/gambar/Zahid.jpg"
import Risma from "../../assets/gambar/Risma.png"
import Arif from "../../assets/gambar/arif.jpg"

const ContentAbout = () => {
  return (
    <>
      {/* Tentang Kami */}
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={12} >
            <h2 className='mb-5' style={{ textAlign: 'center' }}>Tentang Kami</h2>
            <p style={{ textAlign: 'justify' }}>
              Kami adalah platform yang berkomitmen untuk mengatasi isu pelecehan seksual dan catcalling. Situs kami
              hadir sebagai wadah yang aman bagi individu untuk berbagi pengalaman, mendapatkan sumber daya edukatif,
              dan merasakan dukungan dari komunitas. Melalui upaya kami, tujuan utama adalah menciptakan kesadaran luas
              tentang dampak negatif pelecehan seksual serta memberikan edukasi kepada masyarakat.
              Kami percaya bahwa dengan bersama-sama mengatasi masalah ini, kita dapat menciptakan lingkungan yang lebih
              aman dan mendukung bagi semua individu.
            </p>
            <p style={{ textAlign: 'Justify' }}>
              Fokus kami terutama pada pencegahan, dengan keyakinan bahwa langkah-langkah proaktif dapat membantu mencegah
              terjadinya pelecehan seksual. Dengan mengedukasi masyarakat tentang pentingnya penghargaan dan kesetaraan, 
              kami berharap dapat membentuk norma yang lebih baik dalam hubungan antarindividu.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Our Team */}
      <section id="experts">
        <Container className="mt-3 mb-5">
          <h2 className="text-center" style={{ paddingTop: '20px' }}>
            Our Team
          </h2>
          <p className="text-center" style={{ marginBottom: '30px' }}>
            Tim kami yang telah bekerjasama membuat website ini
          </p>
          <Row>
            {/* Team Members */}
            {/* Member 1 */}
            <Col md={4} className="mb-4">
              <div className="circle-profile">
                <img src={Hana} className="circle-image" alt="Gambar Hustler" />
              </div>
              <h5 className="text-center mt-3">Hana suci fujiarti</h5>
              <p className="text-center">Hustler</p>
            </Col>

            {/* Member 2 */}
            <Col md={4} className="mb-4">
              <div className="circle-profile">
                <img src={Furqon} className="circle-image" alt="Gambar Hacker 1" />
              </div>
              <h5 className="text-center mt-3">muhammad forqun huwaidy</h5>
              <p className="text-center">Hacker</p>
            </Col>

            {/* Member 3 */}
            <Col md={4} className="mb-4">
              <div className="circle-profile">
                <img src={Aluthfi} className="circle-image" alt="Gambar Hipster 1" />
              </div>
              <h5 className="text-center mt-3">Aluthfi Fadilah</h5>
              <p className="text-center">Hipster</p>
            </Col>

            {/* Member 4 */}
            <Col md={4} className="mb-4">
              <div className="circle-profile">
                <img src={Zahid} className="circle-image" alt="Gambar Hacker 2" />
              </div>
              <h5 className="text-center mt-3">Zahid Humamun Nafi</h5>
              <p className="text-center">Hacker</p>
            </Col>

            {/* Member 5 */}
            <Col md={4} className="mb-4">
              <div className="circle-profile">
                <img src={Risma} className="circle-image" alt="Gambar Ahli 2" />
              </div>
              <h5 className="text-center mt-3">Risma Bidayatul Hidayah</h5>
              <p className="text-center">Hipster</p>
            </Col>

            {/* Member 6 */}
            <Col md={4} className="mb-4">
              <div className="circle-profile">
                <img src={Arif} className="circle-image" alt="Gambar Ahli 2" />
              </div>
              <h5 className="text-center mt-3">Muhammad Arif Maulana</h5>
              <p className="text-center">Hipster</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContentAbout;
