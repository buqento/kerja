import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FaEdit } from 'react-icons/fa';
import { ImUserTie } from 'react-icons/im';
import { useRouter } from 'next/router'

function CardComponent() {
    const router = useRouter()
    let userdata = null
    if (typeof window !== "undefined") {
        userdata = JSON.parse(localStorage.getItem('userdata'))
    }
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
            <h1 className="text-center my-5">Layanan Publik</h1>
            <Row>
                <Col lg={6} sm={12} className="mb-3 text-center">
                    <Card>
                        <Card.Body>
                            <div className="mb-4"><FaEdit size={48} /></div>
                            <Card.Title>KARTU PENCARI KERJA (AK/I)</Card.Title>
                            <Card.Text>
                                Pendaftaran Kartu Pencari Kerja (AK/I). Anda dapat membuat Kartu Pencari Kerja (AK/I) disini.
                            </Card.Text>
                            <Button variant="primary" onClick={handleRegist}>{userdata ? 'Ubah Data Pencari Kerja' : 'Pendaftaran Pencari Kerja'}</Button>
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