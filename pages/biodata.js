import Head from 'next/head'
import React, { useRef } from 'react';
import FooterComponent from '../components/FooterComponent'
import ReactToPrint from 'react-to-print';
import { Button, Container } from 'react-bootstrap';
import { BioPrint } from '../components/BioPrint';
import NavComponent from '../components/NavComponent';

function Biodata() {
  const componentRef = useRef();
  return (
    <>
      <Head>
        <title>Daftar Pencari Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      <Container className="mt-4">
        <BioPrint ref={componentRef} />
        <ReactToPrint
          trigger={() => <Button block className="mb-4 lg" size="lg">Cetak Formulir Pendaftaran</Button>}
          content={() => componentRef.current}
        />
      </Container>

      <FooterComponent />
    </>
  )
}

export default Biodata