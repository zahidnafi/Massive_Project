import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, CardFooter } from 'react-bootstrap';
import image1 from "../../assets/gambar/plus.png"
import icon from "../../assets/gambar/icon.png"
import komen from "../../assets/gambar/komen.png"

const RuangAman = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <>
            <section id="ruang-aman">
                <Container className="mt-5 mb-5">
                    <Row className="justify-content-center">
                        <Col>
                            <Card className="ruang-aman-card">
                                <Row>
                                    <Col>
                                        <Card.Body>
                                            <h2 className="card-title">Selamat Datang di Ruang Aman!</h2>
                                            <p className="card-text">Berani Bicara, Bersama Kita Kuat: Ajaklah Dunia Menyadari Masalah Pelcehan Seksual dengan Berbagi Ceritamu di Ruang Aman</p>
                                            <Button className="rounded-pill mt-3" onClick={handleShow} style={{ width: '140px', height: '50px', background: '#632B50', border: 'none', color: '#FAD9EC', marginBottom: '10px' }}>
                                                <img src={image1} alt="Tambah Cerita" /> Buat Cerita
                                            </Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Buat Cerita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={icon} style={{ position: 'absolute' }} alt="Anonymus Icon" />
                    <h5 style={{ marginLeft: '110px', paddingTop: '20px' }}>Anonymus</h5>
                    <Form.Group controlId="storyText">
                        <Form.Control style={{ marginTop: '70px' }} as="textarea" rows={5} placeholder="Tulis ceritamu di sini..." />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tutup
                    </Button>
                    <Button variant="primary" style={{ backgroundColor: '#632B50' }} onClick={handleClose}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>


            <section id="ruang-aman2">
                <Container className="mt-5 mb-5">
                    <Row className="justify-content-center">
                        <Col>
                            <Card className="ruang-aman2-card">
                                <Card.Body>
                                    <img src={icon} style={{ position: 'absolute' }} alt="Anonymus Icon" />
                                    <h5 style={{ marginLeft: '110px', paddingTop: '20px' }}>Anonymus</h5>
                                    <p style={{ marginLeft: '120px' }}>3 Menit</p>
                                    <p className="card-text" style={{ paddingTop: '30px' }}>Jadi di sini aku mau cerita kalau aku kena pelecehan seksual.
                                        Aku mau minta bantuan siapa saja yang bisa lacak orang ini, aku tahu akun kecil tapi semoga saja ada yang bisa bantu.
                                        Jadi awalnya ada yang DM aku di Instagram kayak gini. Aku kira orang iseng, akhirnya aku block dia dan selang beberapa hari ada lagi akun yang DM aku begini,
                                        dulu aku berani speak up cuman di 2nd account ku karena omongan dia kotor banget aku enggak enak mau up di mana-mana.</p>
                                </Card.Body>
                                <CardFooter>
                                    <img className="mt-1 mb-1" style={{ marginLeft: '10px' }} src={komen} alt="Komentar Icon" />
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5 mb-5">
                    <Row className="justify-content-center">
                        <Col>
                            <Card className="ruang-aman2-card">
                                <Card.Body>
                                    <img src={icon} style={{ position: 'absolute' }} alt="Anonymus Icon" />
                                    <h5 style={{ marginLeft: '110px', paddingTop: '20px' }}>Anonymus</h5>
                                    <p style={{ marginLeft: '120px' }}>3 Menit</p>
                                    <p className="card-text" style={{ paddingTop: '30px' }}>Bentuk kekerasan pertama yang gue dapetin itu di saat hubungan gue masuk 5 bulan pacaran, gue lupa penyebabnya waktu itu apa tapi yang gue ingat posisinya di rumah gue lagi nggak ada orang sama sekali terus dia dari ruang tamu narik gue ke ruang tengah, di situ gue dijambak bibir gue di tonjok alhasil berdarah badan gue memar karena dia megang lengan kaki dan lainnya kenceng, soalnya gue berontak kaya udah keburu ketakutan bakal mati. Iya itu si pertama yang gue dapet dan itu di rumah gue.
                                    </p>
                                </Card.Body>
                                <CardFooter>
                                    <img className="mt-1 mb-1" style={{ marginLeft: '10px' }} src={komen} alt="Komentar Icon" />
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5 mb-5">
                    <Row className="justify-content-center">
                        <Col>
                            <Card className="ruang-aman2-card">
                                <Card.Body>
                                    <img src={icon} style={{ position: 'absolute' }} alt="Anonymus Icon" />
                                    <h5 style={{ marginLeft: '110px', paddingTop: '20px' }}>Anonymus</h5>
                                    <p style={{ marginLeft: '120px' }}>3 Menit</p>
                                    <p className="card-text" style={{ paddingTop: '30px' }}>Suasana sore itu, aku berjalan pulang seorang diri setelah sehari yang panjang di kantor. Langit memerah menyambut matahari yang hendak tenggelam. Aku memutuskan untuk berjalan kaki sebentar, menikmati angin sepoi-sepoi yang menyapu jalan-jalan kecil di sekitar kawasan perumahan.

                                        Sambil berjalan, aku merasa ada mata yang mengawasiku. Aku mengabaikannya pada awalnya, berusaha memfokuskan pikiranku pada langkah-langkahku sendiri. Namun, semakin lama, suara-suara yang menyebalkan mulai terdengar.

                                        "Hey, cantik!"

                                        "Senyum dong, sayang!"

                                        Aku merasa tak nyaman. Ini bukan pertama kalinya aku mengalami situasi seperti ini, tetapi tetap saja, setiap kali membuat hatiku berdegup lebih cepat. Aku memilih untuk tetap melangkah, berharap mereka akan berhenti. Namun, teriakan-teriakan kasar itu terus berlanjut.

                                        Aku mencoba untuk tidak menanggapi, tetapi semakin lama, semakin sulit untuk menahan ketidaknyamanan dan kekesalan. Aku merasa seperti seonggok objek yang diawasi, bukan individu yang berhak dihormati.

                                        Mungkin suatu hari, dunia akan menjadi tempat di mana setiap orang bisa berjalan dengan aman tanpa harus khawatir tentang komentar tidak senonoh atau tatapan yang tidak pantas. Sementara itu, aku melangkah lebih cepat, berharap bahwa suatu saat, mereka yang melakukan catcalling akan menyadari dampak buruk yang mereka timbulkan pada orang lain..</p>
                                </Card.Body>
                                <CardFooter>
                                    <img className="mt-1 mb-1" style={{ marginLeft: '10px' }} src={komen} alt="Komentar Icon" />
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default RuangAman;
