import Head from 'next/head'
import SlideComponent from '../components/SlideComponent'
import CardComponent from '../components/CardComponent'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'

function Home() {
  return (
    <>
      <Head>
        <title>Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <SlideComponent />
      <CardComponent />
      <FooterComponent />
    </>
  )
}

export default Home