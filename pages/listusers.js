import Head from 'next/head'
import ListUser from '../components/ListUser'
import Footer from '../components/Footer'

function ListUsers({ users }) {
  return (
    <>
      <Head>
        <title>Daftar Pencari Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListUser />
      <Footer />
    </>
  )
}

export default ListUsers