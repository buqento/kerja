import { Button, Card, Col, Container, Row } from "react-bootstrap"

function Cards() {
    return (
        <Container>
            <Row>

                <Col lg={4} sm={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://placeimg.com/100/60" />
                        <Card.Body>
                            <Card.Title>Pendaftaran AK1 (Kartu Kuning)</Card.Title>
                            <Card.Text>
                                Pendaftaran Pembuatan Kartu AK1 secara Online dengan sistem terkomputerisasi sehingga anda bisa membuat kartu AK1 dimanapun...
                            </Card.Text>
                            <Button variant="primary" href="listusers">Daftar Pencari Kerja</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} sm={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://loremflickr.com/100/60" />
                        <Card.Body>
                            <Card.Title>Pendaftaran BLK (Balai Latihan Kerja)</Card.Title>
                            <Card.Text>
                                Pendaftaran Pelatihan Kerja Oleh BLK secara Online dengan sistem terkomputerisasi sehingga anda bisa melakukan Pendaftaran dimanapun dan kapanpun
                            </Card.Text>
                            <Button variant="primary" href="#">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} sm={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.fillmurray.com/100/60" />
                        <Card.Body>
                            <Card.Title>Lowongan Kerja</Card.Title>
                            <Card.Text>
                                Lowongan Kerja Resmi Oleh Dinas Tenaga Kerja Kabupaten Maluku Barat Daya
                            </Card.Text>
                            <Button variant="primary" href="#">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default Cards