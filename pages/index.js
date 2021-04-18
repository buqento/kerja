import Head from 'next/head'
import SlideComponent from '../components/SlideComponent'
import JumbotronComponent from '../components/JumbotronComponent'
import CardComponent from '../components/CardComponent'
import FooterComponent from '../components/FooterComponent'

function Home() {
  return (
    <>
      <Head>
        <title>Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SlideComponent />
      <JumbotronComponent />
      <CardComponent />
      <FooterComponent />
    </>
  )
}

export default Home