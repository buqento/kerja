import Head from 'next/head'
import { Container, Image } from 'react-bootstrap'
import { FaWhatsapp, FaFacebookSquare, FaPhone, FaPhoneSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'
import TopComponent from '../components/TopComponent'

function Pengaduan() {

  return (
    <>
      <Head>
        <title>Si Pelita MBD - Layanan Pengaduan</title>
        <meta property="og:title" content="Si Pelita MBD - Layanan Pengaduan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipelitambd.com/" />
        <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopComponent />

      <Container className="text-center">

        <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#dc3545", width: "200px" }}>LAYANAN PENGADUAN</div>

        <Image src="../images/pengaduan-online.png" className="mb-5 img-fluid" />

        <div className="my-2">
          <FaPhoneSquareAlt size={20} className="mb-1" /> Telepon: 082189592765
        </div>
        <div className="my-2">
          <FaWhatsapp size={24} className="mb-1" /> Whatsapp: <a href="https://wa.me/6281343418243"> 6281343418243</a>
        </div>
        <div className="my-2">
          <HiOutlineMail size={24} className="mb-1" /> Email: nakertransmbd@yahoo.com
        </div>
        <div className="my-2">
          <FaFacebookSquare size={20} className="mb-1" /> Facebook: <a href="https://web.facebook.com/lowongankerja.mbd" target="blank">Lowongan Kerja MBD</a>
        </div>

        <div className="my-5">
          <div>Website Pemerintah Kabupaten Maluku Barat Daya</div>
          <a href="https://www.malukubaratdayakab.go.id/" target="blank">www.malukubaratdayakab.go.id</a>
        </div>

        <Image src="../images/pengaduan-masyarakat.jpg" className="mb-5 w-50 img-fluid" />

      </Container>

      <FooterComponent />
    </>
  )
}

export default Pengaduan