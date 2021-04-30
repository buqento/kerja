import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { FaWhatsapp, FaFacebookSquare, FaPhone, FaPhoneSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import NavComponent from '../components/NavComponent'

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
      <NavComponent />
      <Container className="text-center">
        <h1 className="mt-5">LAYANAN PENGADUAN</h1>
        <h4 className="mb-5">Layanan Aspirasi dan Pengaduan Tenaga Kerja</h4>

        <img src="../images/pengaduan-online.png" className="mb-5 img-fluid"/>

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

        
      </Container>
    </>
  )
}

export default Pengaduan