import Head from 'next/head'
import { Container } from 'react-bootstrap'
import NavComponent from '../components/NavComponent'
import RelatedComponent from '../components/RelatedComponent'

function News() {

  const data = [
    {
      title: 'GUBERNUR MALUKU LANTIK BUPATI DAN WAKIL BUPATI TERPILIH KABUPATEN MALUKU BARAT DAYA',
      by: 'Admin',
      description: 'Tiakur-malukubaratdayakab.go.id- Gubernur Maluku, Irjen Pol (Purn) Drs. Murad Ismail melantik Benyamin Thomas Noach, S.T dan Drs. Agustinus Lekwardai Kilikily, M.Si sebagai Bupati dan Wakil Bupati Maluku Barat Daya yang berlangsung di Aula Lantai 7 Kantor Gubernur Maluku, Senin (26/04/2021).',
      image: 'berita2.jpg',
      dateCreated: '26 April 2021'
    },
    {
      title: 'BPJAMSOSTEK Maluku dan Pemkap MBD Komitmen Implementasi Instruksi Presiden no 2 Tahun 2021',
      by: 'Admin',
      description: 'KBRN,Ambon: Mengimplementasikan instruksi Presiden no 2 tahun 2021, terkait perlindungan jaminan kerja, Bupati Maluku Barat Daya Benyamin Thomas Noach bersama Waki Bupati Agustinus Kilikily memastikan bakal melindungi para pekerja yang ada di OPD, jasa konstruksi dan perusahaan yang memperkerjakan banyak pekerja ke dalam program perlindungan BPJAMSOSTEK.',
      image: 'berita1.jpg',
      dateCreated: '20 April 2021'
    },
    {
      title: 'BUPATI MBD HADIRI RAPAT UMUM PEMEGANG SAHAM PT. BPD MALUKU DAN MALUKU UTARA TAHUN 2021',
      by: 'Admin',
      description: 'Bupati Maluku Barat Daya, Benyamin Th. Noach S.T, menghadiri Rapat Umum Pemegang Saham Tahunan dan Luar Biasa PT. Bank Pembangunan Daerah Maluku dan Maluku Utara. Rapat ini dihadiri oleh Gubernur Maluku, Murad Ismail selaku Pemegang Saham Pengendali dan juga dihadiri oleh seluruh Bupati /Walikota se Provinsi Maluku, Dewan Komisaris dan Direksi PT. BPD Maluku-Maluku Utara  yang dilaksanakan di Hotel Mandarin, Jakarta Pusat, Selasa (6/4/2021)',
      image: 'berita3.jpg',
      dateCreated: '6 April 2021'
    }
  ]

  return (
    <>
      <Head>
        <title>Si Pelita MBD - Berita dan Regulasi Terbaru</title>
        <meta property="og:title" content="Si Pelita MBD - Berita dan Regulasi Terbaru" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipelitambd.com/" />
        <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <RelatedComponent />
      <Container className="text-center">
        <h1 className="mt-5">BERITA &amp; REGULASI TERBARU</h1>
        {
          data.map((item, index) =>
            <div className="my-5" key={index}>
              <h3 className="font-weight-bold text-capitalize">{item.title}</h3>
              <div>
                <strong>{item.dateCreated} | Oleh: {item.by}</strong>
              </div>
              <img src={`../images/news/${item.image}`} className="img-fluid" width={500} />
              <div className="py-3">{item.description}</div>

              <hr />
            </div>
          )
        }
      </Container>
    </>
  )
}

export default News