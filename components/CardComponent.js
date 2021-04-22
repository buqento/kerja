import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FaEdit, FaInfo } from 'react-icons/fa';
import { ImUserTie, ImNewspaper } from 'react-icons/im';
import { useRouter } from 'next/router'

function CardComponent() {
    const router = useRouter()

    const handleRegist = () => {
        let user = JSON.parse(localStorage.getItem('user'))
        const nik = user && user.nik
        if (user && nik !== null) {
            router.push("register")
        } else {
            router.push("login")
        }
    }
    return (
        <Container className="mt-4">
            <Row>
                <Col lg={4} sm={12} className="mb-3 text-center">
                    <Card>
                        <Card.Body>
                            <div className="mb-4"><FaEdit size={48} /></div>
                            <Card.Title>Kartu Pencari Kerja (AK/I)</Card.Title>
                            <Card.Text>
                                Pendaftaran Kartu Pencari Kerja (AK/I) secara On Line. Anda dapat membuat Kartu Pencai Kerja (AK/I) disini.
                            </Card.Text>
                            <Button variant="primary" onClick={handleRegist}>Pendaftaran</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} className="mb-3 text-center">
                    <Card>
                        <Card.Body>
                            <div className="mb-4"><ImUserTie size={48} /></div>
                            <Card.Title>Informasi Lowongan Kerja</Card.Title>
                            <Card.Text>
                                Informasi Lowongan Kerja Resmi oleh Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya.
                            </Card.Text>
                            <Button variant="primary" href="#">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} className="mb-3  text-center">
                    <Card>
                        <Card.Body>
                            <div className="mb-4"><ImNewspaper size={48} /></div>
                            <Card.Title>Berita dan Info Terkini</Card.Title>
                            <Card.Text>
                                Berita seputar tenaga kerja di Pemda Kabupaten Maluku Barat Daya, Provinsi dan Pusat dan regulasi terbaru.
                            </Card.Text>
                            <Button variant="primary" href="#">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardComponent