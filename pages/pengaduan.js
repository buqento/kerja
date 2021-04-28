import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { FaWhatsapp, FaFacebookSquare } from 'react-icons/fa'
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
        <h1 className="mt-5">Layanan Pengaduan</h1>
        <h4 className="mb-5">Sampaikan laporan Anda langsung kepada instansi pemerintah berwenang</h4>
        <div>
          <FaWhatsapp size={24} className="mb-1" color="#28a745" /> Whatsapp: <a href="https://wa.me/6281343418243"> 6281343418243</a>
        </div>
        <div>
          <HiOutlineMail size={24} className="mb-1" /> Email: nakertransmbd@yahoo.com
        </div>
        <div>
        <FaFacebookSquare size={20} className="mb-1" /> Facebook: <a href="https://web.facebook.com/lowongankerja.mbd" target="blank">Lowongan Kerja MBD</a>
        </div>
      </Container>
    </>
  )
}

export default Pengaduan