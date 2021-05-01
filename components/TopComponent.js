import React from 'react'
import { Col, Container, Jumbotron, Nav, Row } from 'react-bootstrap'
import MarqueeComponent from './MarqueeComponent';

class TopComponent extends React.Component {

  render() {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const dt = date + '/' + month + '/' + year
    return (
      <>
        <Container>

          <Row>
            <Col className="mt-3">
              <div>Hari ini: {dt}</div>
            </Col>
          </Row>

          <Row className="text-left p-3">
            <Col lg={2} style={{ backgroundColor: "red", color: "#fff" }} className="text-center">
              Breaking News
            </Col>
            <Col ls={10} style={{ backgroundColor: "#777", color: "#fff" }}>
              <MarqueeComponent />
            </Col>
          </Row>

          <Jumbotron fluid className="p-3">
            <h2>Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu</h2>
            <h4>Pemerintah Kabupaten Maluku Barat Daya</h4>
          </Jumbotron>

          <Row>
            <Col className="text-left">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link href="/">Beranda</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="profil" href="profil">Profil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="news" href="news">Berita</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="regulasi" href="regulasi">Regulasi Terbaru</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

        </Container>

      </>
    )
  }
}

export default TopComponent