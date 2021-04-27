import Head from 'next/head'
import SlideComponent from '../components/SlideComponent'
import CardComponent from '../components/CardComponent'
import JumbotronComponent from '../components/JumbotronComponent'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'
import GraphComponent from '../components/GraphComponent'
import MapComponent from '../components/MapComponent'
import { FaWhatsapp } from 'react-icons/fa'

function Home() {

  const cStyle = {
    position: 'fixed',
    padding: '10px',
    bottom: '60px',
    right: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: '50px',
    textAlign: 'center',
    zIndex: '1'
  }

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
      <a href="https://wa.me/6281343418243" style={cStyle}><FaWhatsapp size={40} /></a>
    </>
  )
}

export default Home