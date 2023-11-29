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
          <Col md={12} style={{ textAlign: 'center' }}>
            <h2>Tentang Kami</h2>
            <p>
              Kami adalah platform yang berkomitmen untuk mengatasi isu pelecehan seksual dan catcalling. Melalui situs
              ini, kami menyediakan ruang aman untuk berbagi pengalaman, sumber daya edukatif, dan dukungan komunitas.
              Tujuan kami adalah menciptakan kesadaran tentang dampak negatif pelecehan seksual dan mengedukasi
              masyarakat agar dapat bersama-sama mengatasi masalah ini. Dengan fokus pada pencegahan, kami berupaya
              menciptakan lingkungan yang lebih aman dan mendukung bagi semua individu.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptates adipisci eius dolorem
              quas, aliquid commodi porro nulla error minus doloribus velit qui id deserunt omnis optio consequuntur
              cumque nesciunt sed modi illum culpa temporibus veniam. Eius, praesentium obcaecati maiores sed at a
              incidunt magnam perspiciatis molestias aliquid, earum debitis consequatur, quibusdam nostrum. Cupiditate
              maxime nesciunt quibusdam distinctio. Quia ipsum illum omnis voluptatum quibusdam esse, debitis dolorum
              fugiat veritatis, distinctio obcaecati, dicta voluptatibus? Ipsum nesciunt dolorem non reiciendis, illum
              nemo id enim saepe ad beatae doloremque explicabo, libero illo fugit. Delectus, labore saepe odio eligendi
              magnam doloremque expedita cupiditate eum.
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
