import Head from 'next/head'
import { Container } from 'react-bootstrap'
import NavComponent from '../components/NavComponent'

function Alurpendaftaran() {

  return (
    <>
      <Head>
        <title>Si Pelita MBD - Alur Pendaftaran Pencari kerja</title>
        <meta property="og:title" content="Si Pelita MBD - Alur Pendaftaran Pencari kerja" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipelitambd.com/" />
        <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <Container className="text-center">
        <h1 className="my-5">ALUR PENDAFTARAN PENCARI KERJA</h1>
        <img src="../images/alurpendaftaran.jpg" className="img-fluid" width={600} />
      </Container>
    </>
  )
}

export default Alurpendaftaran