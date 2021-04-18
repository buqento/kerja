import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb, Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import FooterComponent from '../components/FooterComponent';

const FormRegist = () => {

    const router = useRouter()
    const [nik, setNik] = useState("")
    const [namaLengkap, setNamaLengkap] = useState("")
    const [tempatLahir, setTempatLahir] = useState("")
    const [tanggalLahir, setTanggalLahir] = useState("")
    const [jenisKelamin, setJenisKelamin] = useState("")
    const [status, setStatus] = useState("")
    const [agama, setAgama] = useState("")
    const [alamat, setAlamat] = useState("")
    const [telepon, setTelepon] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nik !== "" && namaLengkap !== "" && tempatLahir !== "" && tanggalLahir !== "" && alamat !== "" && telepon !== "") {
            fetch("https://607a5938bd56a60017ba295f.mockapi.io/users", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nik: nik,
                    namaLengkap: namaLengkap,
                    tempatLahir: tempatLahir,
                    tanggalLahir: tanggalLahir,
                    jenisKelamin: jenisKelamin,
                    status: status,
                    agama: agama,
                    alamat: alamat,
                    telepon: telepon,
                    createdAt: Date.now()
                })
            })
                .then(() => {
                    setNik("")
                    setNamaLengkap("")
                    setTempatLahir("")
                    setTanggalLahir("")
                    setJenisKelamin("")
                    setStatus("")
                    setAgama("")
                    setAlamat("")
                    setTelepon("")
                    router.push("listusers")
                })
                .catch(err => console.log(err))
        } else {
            alert('Inputan data tidak sesuai!')
        }
    }

    return (<div>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Pendaftaran AK1 (Kartu Kuning)</Breadcrumb.Item>
        </Breadcrumb>
        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col lg={6} sm={12}>
                        {/* nik */}
                        <Form.Group>
                            <Form.Label>NIK</Form.Label>
                            <Form.Control
                                size="lg"
                                id="nik"
                                type="text"
                                placeholder="Nomor Induk Kependudukan"
                                value={nik}
                                onChange={(e) => setNik(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
                        {/* nama lengkap */}
                        <Form.Group>
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control
                                size="lg"
                                id="namaLengkap"
                                type="text"
                                placeholder="Nama Lengkap"
                                value={namaLengkap}
                                onChange={(e) => setNamaLengkap(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                        {/* tempat lahir */}
                        <Form.Group>
                            <Form.Label>Tempat Lahir</Form.Label>
                            <Form.Control
                                size="lg"
                                id="tempatLahir"
                                type="text"
                                placeholder="Tempat Lahir"
                                value={tempatLahir}
                                onChange={(e) => setTempatLahir(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
                        {/* tanggal lahir */}
                        <Form.Group>
                            <Form.Label>Tanggal Lahir</Form.Label>
                            <Form.Control
                                size="lg"
                                id="tanggalLahir"
                                type="text"
                                placeholder="Tanggal Lahir"
                                value={tanggalLahir}
                                onChange={(e) => setTanggalLahir(e.target.value)}
                            />
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                        {/* jenis kelamin */}
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={jenisKelamin}
                                onChange={(e) => setJenisKelamin(e.target.value)}>
                                <option>Laki-laki</option>
                                <option>Perempuan</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
                        {/* status */}
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Agama</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <option>Menikah</option>
                                <option>Belum Menikah</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                        {/* agama */}
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Agama</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={agama}
                                onChange={(e) => setAgama(e.target.value)}>
                                <option>Kristen</option>
                                <option>Katolik</option>
                                <option>Islam</option>
                                <option>Hindu</option>
                                <option>Budha</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
                        {/* alamat */}
                        <Form.Group>
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control
                                size="lg"
                                id="alamat"
                                type="text"
                                placeholder="Alamat"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                        {/* telepon */}
                        <Form.Group>
                            <Form.Label>Telepon</Form.Label>
                            <Form.Control
                                size="lg"
                                id="telepon"
                                type="text"
                                placeholder="Telepon"
                                value={telepon}
                                onChange={(e) => setTelepon(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className="my-2">Kirim Data</Button>
            </Container>

        </Form>
    </div>)
}

class Register extends React.Component {

    render() {
        return (
            <>
                <Container>
                    <h1>Pendaftaran AK1 (Kartu Kuning)</h1>
                    <FormRegist />
                </Container>
                <FooterComponent />
            </>
        )
    }
}

export default Register