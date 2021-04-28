import Head from 'next/head'
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from '../components/ComponentToPrint'
import { Button, Container } from 'react-bootstrap';

function ListUsers() {
  const componentRef = useRef();
  return (
    <>
      <Head>
        <title>Administrator - Daftar Pencari Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-4">
        <ReactToPrint
          trigger={() => <Button>Cetak Daftar Pencari Kerja</Button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </Container>

    </>
  )
}

export default ListUsers