import Head from 'next/head'
import FooterComponent from '../components/FooterComponent'
import ListuserComponent from '../components/ListuserComponent'

function ListUsers() {
  return (
    <>
      <Head>
        <title>Daftar Pencari Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListuserComponent />
      <FooterComponent />
    </>
  )
}

export default ListUsers