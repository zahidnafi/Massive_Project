import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Tools1 from '../../assets/gambar/pngwing 1.png'
import Tools2 from '../../assets/gambar/pngwing 3.png'
import Tools3 from '../../assets/gambar/pngwing 2.png'

const Tools = () => {
    return (
        <section className="Alat" style={{ height: '80vh' }}>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col md={12} className="text-center">
                        <h1>Self Defense Stuff</h1>
                    </Col>
                    <Col md={4} className="text-center mt-5">
                        <Card style={{ backgroundColor: '#FAD9EC', padding: '20px', textAlign: 'center', borderRadius: '30px' }}>
                            <div>
                                <img src={Tools1} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <h5><strong>Pepper Spray</strong></h5>
                                <p style={{ textAlign: 'center' }}>
                                    Pepper spray adalah semprotan aerosol yang mengandung senyawa capsaicin dari cabai, dirancang untuk digunakan sebagai alat pertahanan pribadi dengan efek sementara yang mencakup iritasi mata, hidung, dan kulit untuk menangkal serangan atau ancaman.
                                </p>
                                <Button variant="secondary" style={{ backgroundColor: '#632B50' }} href="https://www.tokopedia.com/armormilitary/pepper-spray-usa-semprotan-cabai-merica-selfdefense-nato-60ml?extParam=ivf%3Dfalse&src=topads" className="mt-3">
                                    Beli disini
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="text-center mt-5">
                        <Card style={{ backgroundColor: '#FAD9EC', padding: '20px', textAlign: 'center', borderRadius: '30px' }}>
                            <div>
                                <img src={Tools2} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <h5><strong>Taser</strong></h5>
                                <p style={{ textAlign: 'center' }}>
                                    Taser adalah perangkat elektroshock yang dirancang untuk memberikan serangan jarak jauh
                                    dengan memberikan kejutan listrik, digunakan oleh petugas kepolisian dan individu untuk
                                    mengatasi ancaman atau melumpuhkan sementara target.
                                </p>
                                <Button variant="secondary" style={{ backgroundColor: '#632B50' }} href="https://www.tokopedia.com/a-yongse/stun-gun-taser-alat-kejut-listrik-stuns-guns-setrum-jarak-jauh?extParam=ivf%3Dfalse&src=topads" className="mt-3">
                                    Beli disini
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="text-center mt-5">
                        <Card style={{ backgroundColor: '#FAD9EC', padding: '20px', textAlign: 'center', borderRadius: '30px' }}>
                            <div>
                                <img src={Tools3} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <h5><strong>Baton</strong></h5>
                                <p style={{ textAlign: 'center' }}>
                                    Baton adalah alat tongkat teleskopik atau kaku yang digunakan sebagai alat pertahanan diri
                                    atau oleh petugas keamanan untuk mengontrol, menahan, atau membela diri dalam situasi tertentu.
                                </p>
                                <Button variant="secondary" style={{ backgroundColor: '#632B50' }} href="https://www.tokopedia.com/self-defense-shop/baton-stick-automatic-solid-titanium-steel-26-inch-self-defense-shop?extParam=ivf%3Dtrue&src=topads" className="mt-3">
                                    Beli disini
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Tools;
