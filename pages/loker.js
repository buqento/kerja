import Head from 'next/head'
import { Container } from 'react-bootstrap'
import NavComponent from '../components/NavComponent'

function Loker() {

  const data = [
    {
      title: 'Marketing Officer Bank Perkreditan Modern Ekspress',
      by: 'Bank Perkreditan Modern Ekspress',
      description: 'Bank Perkreditan Modern Ekspress membuka lowongan tenaga kerja profesional untuk posisi Marketing Officer. Lokasi kerja Kantor Cabang Tiakur. Pendaftaran ditutup pada tanggal 31 April 2021.',
      image: 'loker1.png',
      dateCreated: '20 April 2021'
    },
    {
      title: 'Seleksi pelatihan Balai Latihan Kerja Ambon 2021',
      by: 'Balai Latihan Kerja Ambon',
      description: 'Seleksi pelatihan berbasis kompetensi Balai Latihan Kerja Ambon tahun 2021. Pendaftaran ditutup pada tanggal 22 Mei 2021.',
      image: 'loker2.png',
      dateCreated: '16 April 2021'
    },
    {
      title: 'Staf administrasi, supervisor, dan fixed plant PT Batutua Kharisma Permai',
      by: 'PT Batutua Kharisma Permai',
      description: 'PT Batutua Kharisma Permai sedang mencari tenaga kerja profesional untuk bisa mengisi beberapa posisi kosong di perusahaan. Untuk posisi staf administrasi, supervisor, dan fixed plant.',
      image: 'loker3.png',
      dateCreated: '9 April 2021'
    }
  ]

  return (
    <>
      <Head>
        <title>Si Pelita MBD - Lowongan Kerja</title>
        <meta property="og:title" content="Si Pelita MBD - Lowongan Kerja" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipelitambd.com/" />
        <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <Container className="text-center">
        <h1 className="mt-5">LOWONGAN KERJA</h1>
        {
          data.map((item, index) =>
            <div className="my-5" key={index}>
              <h3 className="font-weight-bold text-capitalize">{item.title}</h3>
              <div>
                Tanggal posting: <strong>{item.dateCreated}</strong>
              </div>
              <div>{item.description}</div>
              <div className="pb-3">Penyelenggara: <strong className="text-capitalize">{item.by}</strong></div>
              <img src={`../images/loker/${item.image}`} className="img-fluid" width={600} />
              <hr />
            </div>
          )
        }
      </Container>
    </>
  )
}

export default Loker