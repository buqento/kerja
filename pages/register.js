import React, { useState, useEffect } from 'react'
import { Breadcrumb, Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import FooterComponent from '../components/FooterComponent';
import NavComponent from '../components/NavComponent';
import fire from '../config/firebase'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/router'

const FormRegist = (props) => {
    const router = useRouter()
    const nik = props.nik.replace(/"/g, "")
    const [namaLengkap, setNamaLengkap] = useState("")
    const [tempatLahir, setTempatLahir] = useState("")
    const [tanggalLahir, setTanggalLahir] = useState(new Date())
    const [jenisKelamin, setJenisKelamin] = useState("Laki-laki")
    const [status, setStatus] = useState("Menikah")
    const [agama, setAgama] = useState("Kristen")
    const [alamat, setAlamat] = useState("")
    const [sdSederajat, setSdSederajat] = useState("")
    const [smtpSederajat, setSmtpSederajat] = useState("")
    const [smtaD1Akta1, setSmtaD1Akta1] = useState("")
    const [smD2d3, setSmD2d3] = useState("")
    const [akta2, setAkta2] = useState("")
    const [akta3, setAkta3] = useState("")
    const [s3PascaS1Akta4D4, setS3PascaS1Akta4D4] = useState("")
    const [doktor2Akta5, setDoktor2Akta5] = useState("")
    const [tahunSdSederajat, setTahunSdSederajat] = useState("1980")
    const [tahunSmtpSederajat, setTahunSmtpSederajat] = useState("1980")
    const [tahunSmtaD1Akta1, setTahunSmtaD1Akta1] = useState("1980")
    const [tahunSmD2d3, setTahunSmD2d3] = useState("1980")
    const [tahunAkta2, setTahunAkta2] = useState("1980")
    const [tahunAkta3, setTahunAkta3] = useState("1980")
    const [tahunS3PascaS1Akta4D4, setTahunS3PascaS1Akta4D4] = useState("1980")
    const [tahunDoktor2Akta5, setTahunDoktor2Akta5] = useState("1980")
    const [keterampilan1, setKeterampilan1] = useState("")
    const [keterampilan2, setKeterampilan2] = useState("")
    const [keterampilan3, setKeterampilan3] = useState("")

    let tahun = []
    for (let y = 1980; y < 2022; y++) { tahun.push(y) }
    const handleFireBaseUpload = e => {
        e.preventDefault()
        if (namaLengkap !== "") {
            props.user ?
                fire.firestore().collection("ak")
                    .doc(props.user && props.user.id)
                    .update({
                        date_modified: Date.now(),
                        noPendaftaran: '',
                        nik: nik,
                        namaLengkap: namaLengkap,
                        tempatLahir: tempatLahir,
                        tanggalLahir: tanggalLahir,
                        jenisKelamin: jenisKelamin,
                        status: status,
                        agama: agama,
                        alamat: alamat,
                        pendidikanFormal:
                        {
                            sdSederajat: {
                                nama: sdSederajat,
                                tahun: tahunSdSederajat
                            },

                            smtpSederajat: {
                                nama: smtpSederajat,
                                tahun: tahunSmtpSederajat
                            },
                            smtaD1Akta1: {
                                nama: smtaD1Akta1,
                                tahun: tahunSmtaD1Akta1
                            },
                            smD2d3: {
                                nama: smD2d3,
                                tahun: tahunSmD2d3
                            },
                            akta2: {
                                nama: akta2,
                                tahun: tahunAkta2
                            },
                            akta3: {
                                nama: akta3,
                                tahun: tahunAkta3
                            },
                            s3PascaS1Akta4D4: {
                                nama: s3PascaS1Akta4D4,
                                tahun: tahunS3PascaS1Akta4D4
                            },
                            doktor2Akta5: {
                                nama: doktor2Akta5,
                                tahun: tahunDoktor2Akta5
                            }
                        },
                        keterampilan: {
                            keterampilan1: keterampilan1,
                            keterampilan2: keterampilan2,
                            keterampilan3: keterampilan3
                        }
                    })
                    .then(() => { router.push("biodata") })
                    .catch(err => { console.log(err) })
                :
                fire.firestore().collection("ak")
                    .add({
                        date_modified: Date.now(),
                        noPendaftaran: '',
                        nik: nik,
                        namaLengkap: namaLengkap,
                        tempatLahir: tempatLahir,
                        tanggalLahir: tanggalLahir,
                        jenisKelamin: jenisKelamin,
                        status: status,
                        agama: agama,
                        alamat: alamat,
                        pendidikanFormal:
                        {
                            sdSederajat: {
                                nama: sdSederajat,
                                tahun: tahunSdSederajat
                            },

                            smtpSederajat: {
                                nama: smtpSederajat,
                                tahun: tahunSmtpSederajat
                            },
                            smtaD1Akta1: {
                                nama: smtaD1Akta1,
                                tahun: tahunSmtaD1Akta1
                            },
                            smD2d3: {
                                nama: smD2d3,
                                tahun: tahunSmD2d3
                            },
                            akta2: {
                                nama: akta2,
                                tahun: tahunAkta2
                            },
                            akta3: {
                                nama: akta3,
                                tahun: tahunAkta3
                            },
                            s3PascaS1Akta4D4: {
                                nama: s3PascaS1Akta4D4,
                                tahun: tahunS3PascaS1Akta4D4
                            },
                            doktor2Akta5: {
                                nama: doktor2Akta5,
                                tahun: tahunDoktor2Akta5
                            }
                        },
                        keterampilan: {
                            keterampilan1: keterampilan1,
                            keterampilan2: keterampilan2,
                            keterampilan3: keterampilan3
                        }
                    })
                    .then(() => { router.push("biodata") })
                    .catch((error) => { alert(error.message) })
        } else {
            alert('Data tidak sesuai')
        }

    }


    return (<div className="my-4">
        <Form onSubmit={handleFireBaseUpload}>

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
                                disabled
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
                            <div>
                                <DatePicker
                                    id="tanggalLahir"
                                    className="form-control form-control-lg"
                                    selected={tanggalLahir}
                                    dateFormat="dd/MM/yyy"
                                    onChange={date => setTanggalLahir(date)} />
                            </div>
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

                <h2>Pendidikan Formal</h2>
                <Row>
                    <Col lg={10} sm={12}>
                        <Form.Group>
                            <Form.Label>SMTP Sederajat</Form.Label>
                            <Form.Control
                                size="lg"
                                id="smtpSederajat"
                                type="text"
                                placeholder=""
                                value={smtpSederajat}
                                onChange={(e) => setSmtpSederajat(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunSmtpSederajat}
                                onChange={(e) => setTahunSmtpSederajat(e.target.value)}>
                                {tahun.map(tahun => (<option>{tahun}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} sm={12}>
                        <Form.Group>
                            <Form.Label>SD Sederajat</Form.Label>
                            <Form.Control
                                size="lg"
                                id="sdSederajat"
                                type="text"
                                placeholder=""
                                value={sdSederajat}
                                onChange={(e) => setSdSederajat(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunSdSederajat}
                                onChange={(e) => setTahunSdSederajat(e.target.value)}>
                                {tahun.map(tahun => (<option>{tahun}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} sm={12}>
                        <Form.Group>
                            <Form.Label>SMTA D1 Akta 1</Form.Label>
                            <Form.Control
                                size="lg"
                                id="smtaD1Akta1"
                                type="text"
                                placeholder=""
                                value={smtaD1Akta1}
                                onChange={(e) => setSmtaD1Akta1(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunSmtaD1Akta1}
                                onChange={(e) => setTahunSmtaD1Akta1(e.target.value)}>
                                {tahun.map(tahun => (<option>{tahun}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} sm={12}>
                        <Form.Group>
                            <Form.Label>SM D2 D3</Form.Label>
                            <Form.Control
                                size="lg"
                                id="smD2d3"
                                type="text"
                                placeholder=""
                                value={smD2d3}
                                onChange={(e) => setSmD2d3(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunSmD2d3}
                                onChange={(e) => setTahunSmD2d3(e.target.value)}>
                                {tahun.map(tahun => (<option>{tahun}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} sm={12}>
                        <Form.Group>
                            <Form.Label>Akta 2</Form.Label>
                            <Form.Control
                                size="lg"
                                id="akta2"
                                type="text"
                                placeholder=""
                                value={akta2}
                                onChange={(e) => setAkta2(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunAkta2}
                                onChange={(e) => setTahunAkta2(e.target.value)}>
                                {tahun.map(tahun => (<option>{tahun}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} sm={12}>
                        <Form.Group>
                            <Form.Label>Akta 3</Form.Label>
                            <Form.Control
                                size="lg"
                                id="akta3"
                                type="text"
                                placeholder=""
                                value={akta3}
                                onChange={(e) => setAkta3(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunAkta3}
                                onChange={(e) => setTahunAkta3(e.target.value)}>
                                {tahun.map(tahun => (<option>{tahun}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} sm={12}>
                        <Form.Group>
                            <Form.Label>S3 Pasca S1 Akta 4 D4</Form.Label>
                            <Form.Control
                                size="lg"
                                id="s3PascaS1Akta4D4"
                                type="text"
                                placeholder=""
                                value={s3PascaS1Akta4D4}
                                onChange={(e) => setS3PascaS1Akta4D4(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunS3PascaS1Akta4D4}
                                onChange={(e) => setTahunS3PascaS1Akta4D4(e.target.value)}>
                                {tahun.map(tahun => (<option>{tahun}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} sm={12}>
                        <Form.Group>
                            <Form.Label>Doktor 2 Akta 5</Form.Label>
                            <Form.Control
                                size="lg"
                                id="doktor2Akta5"
                                type="text"
                                placeholder=""
                                value={doktor2Akta5}
                                onChange={(e) => setDoktor2Akta5(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Tahun Kelulusan</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={tahunDoktor2Akta5}
                                onChange={(e) => setTahunDoktor2Akta5(e.target.value)}>
                                {tahun.map(tahun => (<option>{tahun}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <h2>Keterampilan</h2>
                <Row>
                    <Col lg={12} sm={12}>
                        <Form.Group>
                            <Form.Label>Keterampilan 1</Form.Label>
                            <Form.Control
                                size="lg"
                                id="keterampilan1"
                                type="text"
                                placeholder=""
                                value={keterampilan1}
                                onChange={(e) => setKeterampilan1(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <Form.Group>
                            <Form.Label>Keterampilan 2</Form.Label>
                            <Form.Control
                                size="lg"
                                id="keterampilan2"
                                type="text"
                                placeholder=""
                                value={keterampilan2}
                                onChange={(e) => setKeterampilan2(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <Form.Group>
                            <Form.Label>Keterampilan 3</Form.Label>
                            <Form.Control
                                size="lg"
                                id="keterampilan3"
                                type="text"
                                placeholder=""
                                value={keterampilan3}
                                onChange={(e) => setKeterampilan3(e.target.value)}
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

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            nik: ""
        }
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({ nik: user.nik })
        fire.firestore().collection("ak").where("nik", "==", user.nik)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const user = {
                        id: doc.id,
                        data: doc.data()
                    }
                    this.setState({ user: user })
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

    render() {
        const { nik, user } = this.state
        return (
            <>
                <NavComponent />
                <Container>
                    <h1 className="mt-4">FORM PENDAFTARAN AK.1</h1>
                    <p>Formulir AK.1 Online diisi dengan data sebenar-benarnya mohon baca petunjuk dengan baik.</p>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Beranda</Breadcrumb.Item>
                        <Breadcrumb.Item active>Form Pendaftaran AK.1</Breadcrumb.Item>
                    </Breadcrumb>
                    <FormRegist nik={nik} user={user} />
                </Container>
                <FooterComponent />
            </>
        )
    }
}

export default Register