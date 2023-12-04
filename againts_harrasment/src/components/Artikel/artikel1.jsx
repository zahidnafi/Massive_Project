import React from 'react';
import { Container, Row, Col,  Image } from 'react-bootstrap';
import image1 from "../../assets/gambar/artikel 2.webp"

const Artikel1 = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col md={12} >
                    <h2>6 Tips Melindungi Diri dari Pelecehan Seksual</h2>
                        <Image src={image1} alt="Gambar Artikel" className="image-article" />
                        
                            <p>
                                Ada begitu banyak jenis dan bentuk kekerasan terhadap perempuan dan anak. Salah satunya, kekerasan seksual atau pelecehan seksual. Kasus ini di Indonesia begitu marak sejak bertahun-tahun lalu.<br />
                                <br />
                                Sebut saja kasus Baiq Nuril di tahun 2012, Vokalis Tika & The Dissidents Tika Jahja yang tidak berani membuka diri kepada publik usai menyuarakan kekerasan seksual yang pernah terjadi pada dirinya. Lalu, ada juga kasus Agni di tahun 2017 yang mengalami pelecehan seksial pada saat menjalani KKN di UGM. Hingga, kasus Pemerkosaan Bintaro dan pelecehan fetish kain jarik yang terjadi beberapa bulan lalu.<br />
                                <br />
                                Selain menyuarakan dukungan terhadap pengesahan RUU PKS, Sahabat Fimela juga harus dapat menjaga diri sendiri agar terhindari dari berbagai jenis pelecehan seksual. Berikut 6 cara yang tercantum dalam the Guidebook: Understanding Sexual Violence in Indonesia oleh the Body Shop.
                            </p>
                            <h4>1. Hindari tempat sepi</h4>
                            <p>Usahakan untuk tidak berjalan di tempat sepi sendirian, apalagi jalan dan tempatnya sangat gelap. Cobalah untuk memilih jalan yang lebih ramai dan terang.</p>
                            <h4>2. Waspada</h4>
                            <p>Jangan melamun. Selalu waspada dengan lingkungan sekitarmu. Baik di jalan, dalam kendaraan umum, atau juga di tempat publik. Sehingga, jika ada orang dan gerak-geriknya mencurigakan, kamu masih punya waktu untuk menghindar. </p>

                            <h4>3. Senjata</h4>
                            <p>Demi keamanan, usahakan selalu sedia senjata. Bukan senjata api dan benda tajam, namun benda apa saja yang bisa kamu gunakan untuk membela diri. Seperti payung, semprotan cabai, atau kejut listrik. </p>

                            <h4>4. Tarik Perhatian</h4>
                            <p>Ketika mengalami pelecehan seksual di tempat umum, jangan ragu untuk berteriak atau mengambil perhatian orang sekitar dengan cara lain. Seperti meminta tolong, memberi kode, atau lainnya. </p>

                            <h4>5. Nomor Telepon Darurat</h4>
                            <p>Pastikan kamu sudah mengatur nomor telepon darurat. Sehingga, jika ada seseorang mencurigakan atau kamu sudah terancam keselamatannya, bisa langsung menghubungi orangtua, teman, atau juga polisi dengan cepat. </p>

                            <h4>6. Rekam, Tatap, Foto</h4>
                            <p>angan takut untuk merekam atau memfoto orang yang mencurigakan. Cara ini juga bisa sebagai bukti jika pihak berwenang meminta bukti. Juga, jangan takut untuk menatap orang yang mencurigakan. Cara ini membuat pelaku merasa diawasi dan mungkin saja akan berhenti. Tunjukkan kalau kamu tidak takut. </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Artikel1;
