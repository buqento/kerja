import Head from 'next/head'
import React, { useRef } from 'react';
import FooterComponent from '../components/FooterComponent'
import ReactToPrint from 'react-to-print';
import { Button, Container } from 'react-bootstrap';
import { BioPrint } from '../components/BioPrint';
import NavComponent from '../components/NavComponent';

function Biodata() {
  const componentRef = useRef();
  let user = {}
  let nik = ""
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem('user'))
    nik = user.nik
  }
  return (
    <>
      <Head>
        <title>Daftar Pencari Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <Container className="mt-4">
        <BioPrint ref={componentRef} nik={nik.replace(/"/g, "")} />
        <ReactToPrint
          trigger={() => <Button block className="mb-4 lg" size="lg">Cetak Formulir AK.I</Button>}
          content={() => componentRef.current}
        />
      </Container>
      <FooterComponent />
    </>
  )
}

export default Biodata