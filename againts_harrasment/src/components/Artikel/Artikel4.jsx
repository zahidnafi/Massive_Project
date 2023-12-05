import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Image1 from  "../../assets/gambar/artikel 7.webp"

const Artikel4 = () => {
    return (
        <Container className="mt-5 mb-5" style={{height:'160vh'}}>
            <Row>
                <Col md={12} style={{textAlign:'justify'}}>
                    <h2>5 Tips Menghadapi Catcalling</h2>
                    <Image className='mb-5' src={Image1} alt="Lapor Kekerasan" style={{height:"30%"}} />

                    <p>Catcalling atau pelecehan seksual secara verbal ini kerap dialami perempuan di jalanan dan ruang publik. Tindakan biasanya dilakukan dengan cara berkomentar cabul dan bersikap terang-terangan melecehkan korbannya.</p>

                    <p>Kekerasan seksual ini bisa meninggalkan luka emosional berkepanjangan, merusak harga diri, dan merampas rasa aman. Maka dari itu, perempuan bisa melakukan self defense (pertahanan diri) saat mengalami catcalling.</p>

                    <p>Dilansir dari situs resmi Repository Unair, pembelaan diri tersebut dapat digunakan untuk mempertahankan diri dari serangan orang lain yang jahil, menggoda, bahkan sampai membahayakan nyawa.</p>

                    <p>Kekerasan terhadap perempuan dan anak merupakan persoalan yang mendesak harus diselesaikan. Korban kasus kekerasan dan pelecehan seksual kerap kesulitan melaporkan dan menyuarakan apa yang dialami.</p>
                    
                    <h1>Tips Menghadapi Catcalling:</h1>
                    <p>Pertahanan diri bisa dijadikan tameng tangguh melawan catcalling. Berikut 5 tips menghadapi catcalling yang bisa kamu praktikkan saat mengalaminya.</p>

                    <h4>1. Tetap Tenang dan Jangan Bereaksi Terlalu Emosional</h4>
                    <p>Saat dihadapkan pada catcalling, yang terbaik adalah tetap tenang dan tidak memberi perhatian berlebihan kepada pelaku. Ingat, tujuan mereka ingin membuat kamu merasa terganggu dan tidak nyaman. Jangan memberikan reaksi emosional yang mereka harapkan.</p>

                    <h4>2. Jangan Berhenti atau Melambat</h4>
                    <p>Jika sedang berjalan atau berlari, teruskan perjalananmu. Jangan berhenti atau melambat untuk berbicara atau berdebat dengan pelaku. Ini bisa menghindarkan konfrontasi fisik yang berpotensi berbahaya.</p>

                    <h4>3. Jaga Diri dengan Membawa Semprotan Cabai</h4>
                    <p>Kita juga butuh alat untuk melindungi diri kita dari catcalling, apalagi kalau hal tersebut sudah parah, seperti mulai mendekat dan mencoba meraba tubuh kita. Alat untuk self defense yang sering digunakan biasanya semprotan cabai.Ini sangat berguna apabila kalian sedang sangat terancam. Semprotkan pada wajah pelaku apabila memang kondisinya sudah sangat tidak memungkinkan. Karena semprotan ini akan memberikan efek panas pada wajah pelaku.</p>

                    <h4>4. Laporkan kepada Otoritas</h4>
                    <p>Jika kamu merasa situasinya berpotensi berbahaya atau kamu telah menjadi korban pelecehan, laporkan insiden tersebut kepada polisi atau otoritas setempat. Mereka dapat membantu menyelidiki dan mengambil tindakan yang sesuai terhadap pelaku.</p>

                    <h4>5. Gunakan Ponsel Pintar</h4>
                    <p>Jika situasi semakin buruk, segera hubungi seseorang atau polisi menggunakan ponsel pintar kamu. Banyak ponsel memiliki fungsi panggilan darurat yang dapat diakses dengan cepat.</p>

        
                </Col>
            </Row>
        </Container>
    );
};

export default Artikel4;
