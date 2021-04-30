import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FaEdit, FaBullhorn, FaRegAddressCard } from 'react-icons/fa';
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
                <Col lg={4} sm={12} className="mb-3 text-center">
                    <Card bg="warning" text="white">
                        <Card.Body>
                            <div className="mb-4"><FaRegAddressCard size={48} /></div>
                            <Card.Title>KARTU PENCARI KERJA (AK/I)</Card.Title>
                            <Card.Text>
                                Pendaftaran Kartu Pencari Kerja (AK/I). Anda dapat membuat Kartu Pencari Kerja (AK/I) disini.
                            </Card.Text>
                            <Button variant="dark" size="lg" onClick={handleRegist}>{userdata ? 'Ubah Data Pencari Kerja' : 'Pendaftaran Pencari Kerja'}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} className="mb-3 text-center">
                    <Card bg="success" text="white">
                        <Card.Body>
                            <div className="mb-4"><ImUserTie size={48} /></div>
                            <Card.Title>LOWONGAN KERJA</Card.Title>
                            <Card.Text>
                                Informasi Lowongan Kerja Resmi oleh Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya.
                            </Card.Text>
                            <Button variant="light" size="lg" href="loker">Lihat Lowongan Kerja</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} className="mb-3 text-center">
                    <Card bg="info" text="white">
                        <Card.Body>
                            <div className="mb-4"><FaBullhorn size={48} /></div>
                            <Card.Title>LAYANAN PENGADUAN</Card.Title>
                            <Card.Text>
                                Tenaga kerja dapat menyampaikan permasalahan yang terkait dengan ketenagakerjaan.
                            </Card.Text>
                            <Button variant="light" size="lg" href="pengaduan">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardComponent