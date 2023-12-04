import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Image1 from "../../assets/gambar/Lapor_kekerasan.png"

const Artikel5 = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={12}>
                    <h2>Cara Melaporkan Kekerasan Fisik/Seksual terhadap Perempuan dan Anak?</h2>
                    <Image src={Image1} alt="Lapor Kekerasan" className="image-article" fluid />

                    <p align="justify">Kekerasan terhadap perempuan dan anak merupakan persoalan yang perlu diselesaikan. Kerap kali, korban kekerasan tidak menyuarakan apa yang mereka alami, baik itu kekerasan secara fisik, mental, maupun seksual. Banyak di antara korban yang kesulitan melapor atau tak berani untuk melaporkan kekerasan yang mereka alami.</p>

                    <p align="justify">Berdasarkan informasi dari Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (Kemen PPPA) para korban kekerasan dapat melapor melalui layanan call center Sahabat Perempuan dan Anak (SAPA) 129. Selain melapor ke layanan SAPA 129, masyarakat bisa melapor kekerasan yang dialami atau yang diketahui melalui WhatsApp 08111129129. Call center SAPA 129 melayani 24 jam dan bisa diakses tidak hanya oleh korban kekerasan tapi juga keluarga, masyarakat dan siapa saja yang menduga, mendeteksi atau melihat kasus-kasus kekerasan khususnya terhadap perempuan dan anak.</p>

                    <p align="justify">Dengan adanya akses layanan tersebut, berharap masyarakat terutama para korban tidak lagi takut melaporkan kekerasan. “Sudah seharusnya penyintas atau pelapor diberikan kemudahan dalam mengadukan kasusnya sehingga bisa ditangani sesegera mungkin. Kami dorong para korban untuk berani melaporkan kekerasan yang mereka alami,” ujar Menteri PPPA Bintang Puspayoga. call center SAPA 129 ini bertujuan mempermudah akses bagi korban atau pelapor dalam melakukan pengaduan kasus kekerasan terhadap perempuan dan anak, serta pendataan kasusnya.</p>

                    <p align="justify">Kemen PPPA telah menyusun proses layanan rujukan akhir yang komprehensif bagi perempuan dan anak. Setidaknya terdapat enam layanan standar dalam penyediaan layanan rujukan akhir bagi perempuan korban kekerasan dan anak yang memerlukan perlindungan khusus. Yakni pelayanan pengaduan, penjangkauan, pengelolaan kasus, akses penampungan sementara, pelayanan mediasi, dan pelayanan pendampingan korban.</p>

                    <p>Referensi:</p>

                    <p align="justify"><cite>Kompas.com Diakses pada 2023. Kekerasan terhadap Perempuan dan Anak, Jenis, dan Cara Melaporkannya.</cite></p>
                </Col>
            </Row>
        </Container>
    );
};

export default Artikel5;
