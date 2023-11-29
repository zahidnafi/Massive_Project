import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Artikel1 from "../../assets/gambar/artikel 2.webp"
import Artikel2 from "../../assets/gambar/artikel 3.jpg"
import Artikel3 from "../../assets/gambar/artikel 5.jpeg"
import Artikel4 from "../../assets/gambar/artikel 7.webp"
import Artikel5 from "../../assets/gambar/artikel 7.jpeg"
import Artikel6 from "../../assets/gambar/artikel 3.jpeg"

const MoreArticle = () => {
  return (
    <section id="latest-articles">
      <Container>
        <Row>
          <Col md={9}>
            <h2 className="latest-articles-title">Artikel Terbaru</h2>
          </Col>
          <Col md={3} className="article-nav">
            <a href="#">Terbaru</a> | <a href="#">Populer</a> | <a href="#">Artikel Lainnya</a>
          </Col>
        </Row>
        <Row>
          {/* Artikel 1 (Artikel Terbaru) */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img src={Artikel1} alt="Gambar Artikel Terbaru 1" className="card-img-top" />
              <Card.Body>
                <Card.Title>6 Tips Melindungi Diri dari Pelecehan Seksual</Card.Title>
                <Card.Text>
                  Ada begitu banyak jenis dan bentuk kekerasan terhadap perempuan dan anak. Salah satunya, kekerasan seksual atau pelecehan seksual. Kasus ini telah terjadi begitu marak di Indonesia sejak bertahun-tahun lalu...
                </Card.Text>
                <Button href="#" variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Artikel 2 (Artikel Terbaru) */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img src={Artikel2} alt="Gambar Artikel Terbaru 2" className="card-img-top" />
              <Card.Body>
                <Card.Title>8 Cara Mencegah Pelecehan Seksual, Lindungi Dirimu!</Card.Title>
                <Card.Text>
                  Pelecehan seksual bukan hanya menimbulkan rasa tidak nyaman, tapi juga membuat korban rentan mengalami berbagai gangguan psikis, meliputi gangguan cemas, depresi, PTSD (Post Traumatic Stress Disorder), dan histeria...
                </Card.Text>
                <Button href="#" variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Artikel 3 (Artikel Terbaru) */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img src={Artikel3} alt="Gambar Artikel Terbaru 3" className="card-img-top" />
              <Card.Body>
                <Card.Title>Cara Melaporkan Kasus Kekerasan dan Pelecehan Seksual</Card.Title>
                <Card.Text>
                  Kasus kekerasan dan pelecehan seksual yang dialami seseorang seperti fenomena gunung es. Kejadiannya banyak yang belum terungkap lantaran korban enggan atau tidak tahu bagaimana cara melaporkan kasus kekerasan dan pelecehan seksual yang dialaminya...
                </Card.Text>
                <Button href="#" variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Artikel 4 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img src={Artikel4} alt="Gambar Artikel 4" className="card-img-top" />
              <Card.Body>
                <Card.Title>Kekerasan terhadap Perempuan dan Anak, Jenis, dan Cara Melaporkannya</Card.Title>
                <Card.Text>
                  Data Sistem Informasi Online (SIMFONI) Kemen PPPA yang diakses Rabu (31/3/2021) menunjukkan, kasus kekerasan yang menimpa para korban terjadi di berbagai tempat...
                </Card.Text>
                <Button href="#" variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Artikel 5 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img src={Artikel5} alt="Gambar Artikel 5" className="card-img-top" />
              <Card.Body>
                <Card.Title>Asam Lambung, Penyakit ‘Umum’ di Kalangan Kantoran</Card.Title>
                <Card.Text>
                  Jika kamu disajikan sebuah pertanyaan tentang salah satu penyakit paling sering dialami oleh kaum pekerja dan....
                </Card.Text>
                <Button href="#" variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Artikel 6 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img src={Artikel6} alt="Gambar Artikel 6" className="card-img-top" />
              <Card.Body>
                <Card.Title>Penyakit Asam Lambung (GERD) - Penyebab, Risiko, dan Gejala</Card.Title>
                <Card.Text>
                  Gastroesophageal reflux disease atau GERD adalah istilah yang digunakan...
                </Card.Text>
                <Button href="#" variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MoreArticle;
