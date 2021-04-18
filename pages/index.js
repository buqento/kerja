import Head from 'next/head'
import Jtron from '../components/Jtron'
import Cards from '../components/Cards'
import Slide from '../components/Slide'
import Footer from '../components/Footer'

function Home({ users }) {
  return (
    <>
      <Head>
        <title>Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slide />
      <Jtron />
      <Cards />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://607a5938bd56a60017ba295f.mockapi.io/users')
  const users = await res.json()
  return {
    props: {
      users
    }
  }
}

export default Home