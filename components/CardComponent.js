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
            <h1 className="text-center my-5">Layanan</h1>
            <Row>
                <Col lg={6} sm={12} className="mb-3 text-center">
                    <Card>
                        <Card.Body>
                            <div className="mb-4"><FaEdit size={48} /></div>
                            <Card.Title>KARTU PENCARI KERJA (AK/I)</Card.Title>
                            <Card.Text>
                                Pendaftaran Kartu Pencari Kerja (AK/I). Anda dapat membuat Kartu Pencai Kerja (AK/I) disini.
                            </Card.Text>
                            <Button variant="primary" onClick={handleRegist}>Mulai Pendaftaran</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} sm={12} className="mb-3 text-center">
                    <Card>
                        <Card.Body>
                            <div className="mb-4"><ImUserTie size={48} /></div>
                            <Card.Title>LOWONGAN KERJA</Card.Title>
                            <Card.Text>
                                Informasi Lowongan Kerja Resmi oleh Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya.
                            </Card.Text>
                            <Button variant="primary" href="#">Lihat Lowongan Kerja</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardComponent