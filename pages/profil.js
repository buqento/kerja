import React from 'react'
import Head from 'next/head'
import { Col, Container, Jumbotron, Nav, Row } from 'react-bootstrap'
import NavComponent from '../components/NavComponent'
import RelatedComponent from '../components/RelatedComponent'
import fire from '../config/firebase'
import moment from 'moment'
import FooterComponent from '../components/FooterComponent'
import SlideComponent from '../components/SlideComponent'
import TopComponent from '../components/TopComponent'
import SlideInfoComponent from '../components/SlideInfoComponent'

class Profil extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: null
    }
  }

  componentDidMount() {
    fire.firestore().collection("news")
      .get()
      .then((querySnapshot) => {
        let listNews = []
        querySnapshot.forEach((doc) => {
          const newsData = {
            id: doc.id,
            data: doc.data()
          }
          listNews.push(newsData)
        });
        this.setState({ news: listNews })
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  render() {
    const { news } = this.state
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const dt = date + '/' + month + '/' + year
    return (
      <>
        <Head>
          <title>Si Pelita MBD - Berita dan Regulasi Terbaru</title>
          <meta property="og:title" content="Si Pelita MBD - Berita dan Regulasi Terbaru" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.sipelitambd.com/" />
          <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TopComponent />

        <Container>
          <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#17a2b8", width: "200px" }}>PROFIL</div>

          <h3 className="mt-3">Visi</h3>
          <p>
            Terwujudnya Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Cerdas, Adil, Sejahtera, Tangguh, Dan Lestari Yang Dijiwai Budaya Kalwedo, Dalam Keutuhan Negara Kesatuan Republik Indonesia.</p>

          <h3>Misi</h3>
          <ol>
            <li>Mewujudkan Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Cerdas</li>
            <li>Mewujudkan Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Adil</li>
            <li>Mewujudkan Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Sejahtera</li>
            <li>Mewujudkan Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Tangguh</li>
          </ol>

        </Container>
        <FooterComponent />

      </>
    )
  }
}

export default Profil