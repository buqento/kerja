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
    const [pendidikanTerakhir, setPendidikanTerakhir] = useState("")
    const [tahunKelulusan, setTahunKelulusan] = useState("")
    const [keterampilan, setKeterampilan] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nik !== "" && namaLengkap !== "" && tempatLahir !== "" && tanggalLahir !== "" && alamat !== "" && telepon !== "") {
            fetch("https://607a5938bd56a60017ba295f.mockapi.io/users", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    createdAt: Date.now(),
                    nik: nik,
                    namaLengkap: namaLengkap,
                    tempatLahir: tempatLahir,
                    tanggalLahir: tanggalLahir,
                    jenisKelamin: jenisKelamin,
                    status: status,
                    agama: agama,
                    alamat: alamat,
                    telepon: telepon,
                    pendidikanTerakhir: pendidikanTerakhir,
                    tahunKelulusan: tahunKelulusan,
                    keterampilan: keterampilan
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

    return (<div className="my-4">
        <Form onSubmit={handleSubmit}>

            <h2>Data Pribadi</h2>
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
                            <Form.Label>Status Pernikahan</Form.Label>
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

                <h2>Pendidikan Formal</h2>
                <Row>
                    <Col lg={6} sm={12}>
                        {/* telepon */}
                        <Form.Group>
                            <Form.Label>Pendidikan Terakhir</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={pendidikanTerakhir}
                                onChange={(e) => setPendidikanTerakhir(e.target.value)}>
                                <option>SD</option>
                                <option>SMP</option>
                                <option>SMA</option>
                                <option>SMK</option>
                                <option>D1</option>
                                <option>D2</option>
                                <option>D3</option>
                                <option>S1</option>
                                <option>S2</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
                        {/* agama */}
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunKelulusan}
                                onChange={(e) => setTahunKelulusan(e.target.value)}>
                                <option>2020</option>
                                <option>2021</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <h2>Keterampilan</h2>
                <Row>
                    <Col lg={6} sm={12}>
                        {/* telepon */}
                        <Form.Group>
                            <Form.Label>Keterampilan/Kursus/Pengalaman Kerja</Form.Label>
                            <Form.Control
                                size="lg"
                                id="telepon"
                                type="text"
                                placeholder="Keterampilan/Kursus/Pengalaman Kerja"
                                value={keterampilan}
                                onChange={(e) => setKeterampilan(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button size="lg" variant="primary" type="submit" className="my-2" block>Kirim Data</Button>
            </Container>

        </Form>
    </div>)
}

class Register extends React.Component {

    render() {
        return (
            <>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Form Pendaftaran AK.1</Breadcrumb.Item>
                </Breadcrumb>
                <Container>
                    <h1 className="mt-4">FORM PENDAFTARAN AK.1</h1>
                    <p>Formulir AK.1 Online diisi dengan data sebenar-benarnya mohon baca petunjuk dengan baik.</p>
                    <FormRegist />
                </Container>
                <FooterComponent />
            </>
        )
    }
}

export default Register