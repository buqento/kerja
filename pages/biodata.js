import Head from 'next/head'
import React, { useRef, useState } from 'react';
import FooterComponent from '../components/FooterComponent'
import ReactToPrint from 'react-to-print';
import { Button, Container } from 'react-bootstrap';
import { BioPrint } from '../components/BioPrint';
import NavComponent from '../components/NavComponent';
import fire from '../config/firebase'
import { useRouter } from 'next/router'

function Biodata() {
  const router = useRouter()
  const componentRef = useRef();
  const [userData, setUserdata] = useState(null)
  const [loading, setLoading] = useState(true)
  let nik = null
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem('user'))
    nik = user && user.nik
  }
  if (nik) {
    fire
      .firestore().collection('ak')
      .where('nik', '==', nik)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          querySnapshot.forEach((doc) => {
            const userdata =
            {
              noPendaftaran: doc.id,
              nik: doc.data().nik,
              namaLengkap: doc.data().namaLengkap,
              tempatLahir: doc.data().tempatLahir,
              tanggalLahir: doc.data().tanggalLahir && doc.data().tanggalLahir.toDate().toDateString(),
              jenisKelamin: doc.data().jenisKelamin,
              status: doc.data().status,
              agama: doc.data().agama,
              alamat: doc.data().alamat,
              pendidikanFormal:
              {
                sdSederajat: {
                  nama: doc.data().pendidikanFormal.sdSederajat.nama,
                  tahun: doc.data().pendidikanFormal.sdSederajat.tahun
                },
                smtpSederajat: {
                  nama: doc.data().pendidikanFormal.smtpSederajat.nama,
                  tahun: doc.data().pendidikanFormal.smtpSederajat.tahun
                },
                smtaD1Akta1: {
                  nama: doc.data().pendidikanFormal.smtaD1Akta1.nama,
                  tahun: doc.data().pendidikanFormal.smtaD1Akta1.tahun
                },
                smD2d3: {
                  nama: doc.data().pendidikanFormal.smD2d3.nama,
                  tahun: doc.data().pendidikanFormal.smD2d3.tahun
                },
                akta2: {
                  nama: doc.data().pendidikanFormal.akta2.nama,
                  tahun: doc.data().pendidikanFormal.akta2.tahun
                },
                akta3: {
                  nama: doc.data().pendidikanFormal.akta3.nama,
                  tahun: doc.data().pendidikanFormal.akta3.tahun
                },
                s3PascaS1Akta4D4: {
                  nama: doc.data().pendidikanFormal.s3PascaS1Akta4D4.nama,
                  tahun: doc.data().pendidikanFormal.s3PascaS1Akta4D4.tahun
                },
                doktor2Akta5: {
                  nama: doc.data().pendidikanFormal.doktor2Akta5.nama,
                  tahun: doc.data().pendidikanFormal.doktor2Akta5.tahun
                }
              },
              keterampilan: {
                keterampilan1: doc.data().keterampilan.keterampilan1,
                keterampilan2: doc.data().keterampilan.keterampilan2,
                keterampilan3: doc.data().keterampilan.keterampilan3
              }
            }
            setUserdata(userdata)
            setLoading(false)
          });
        } else {
          router.push('register')
        }
      })
      .then(() => {
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <Head>
        <title>Daftar Pencari Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      {
        loading ?
          <Container className="mt-5 text-center">Menunggu data...</Container>
          :
          <div>
            <Container className="mt-4">
              <BioPrint ref={componentRef} user={userData} />
              <ReactToPrint
                trigger={() => <Button block className="mb-4 lg" size="lg">Cetak</Button>}
                content={() => componentRef.current}
              />
            </Container>
            <FooterComponent />
          </div>
      }
    </>
  )
}

export default Biodata