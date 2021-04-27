import Head from 'next/head'
import SlideComponent from '../components/SlideComponent'
import CardComponent from '../components/CardComponent'
import JumbotronComponent from '../components/JumbotronComponent'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'
import GraphComponent from '../components/GraphComponent'
import MapComponent from '../components/MapComponent'

function Home() {
  return (
    <>
      <Head>
        <title>Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <SlideComponent />
      <JumbotronComponent />
      <CardComponent />
      <GraphComponent />
      <MapComponent />
      <FooterComponent />
    </>
  )
}

export default Home