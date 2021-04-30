import Head from 'next/head'
import { Container, Button } from 'react-bootstrap'
import NavComponent from '../components/NavComponent'
import { useRouter } from 'next/router'
import RelatedComponent from '../components/RelatedComponent'

function Alurpendaftaran() {
  const router = useRouter()
  let userdata = null
  if (typeof window !== "undefined") {
    userdata = JSON.parse(localStorage.getItem('userdata'))
  }
  const handleRegist = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    const nik = user && user.nik
    if (user && nik !== null) {
      router.push("register")
    } else {
      router.push("login")
    }
  }
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
      <RelatedComponent />
      <Container className="text-center">
        <h1 className="my-5">ALUR PENDAFTARAN<br />KARTU PENCARI KERJA (AK/I)</h1>
        <div>
          <img src="../images/alurpendaftaran.jpg" className="img-fluid" width={600} />
        </div>
        <hr />
        <Button variant="primary" size="lg" className="my-5" onClick={handleRegist}>{userdata ? 'Ubah Data' : 'Pendaftaran'} Kartu Pencari Kerja (AK/I)</Button>
      </Container>
    </>
  )
}

export default Alurpendaftaran