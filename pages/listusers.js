import Head from 'next/head'
import Jtron from '../components/Jtron'
import Cards from '../components/Cards'
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