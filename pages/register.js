import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb, Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import FooterComponent from '../components/FooterComponent';
import NavComponent from '../components/NavComponent';
import { storage } from '../config/firebase'
import fire from '../config/firebase'

const FormRegist = (props) => {

    const [nik, setNik] = useState()
    const [namaLengkap, setNamaLengkap] = useState("")
    const [tempatLahir, setTempatLahir] = useState("")
    const [tanggalLahir, setTanggalLahir] = useState("")
    const [jenisKelamin, setJenisKelamin] = useState("")
    const [status, setStatus] = useState("")
    const [agama, setAgama] = useState("")
    const [alamat, setAlamat] = useState("")
    const [telepon, setTelepon] = useState("")
    const [sdSederajat, setSdSederajat] = useState("")
    const [smtpSederajat, setSmtpSederajat] = useState("")
    const [smtaD1Akta1, setSmtaD1Akta1] = useState("")
    const [smD2d3, setSmD2d3] = useState("")
    const [akta2, setAkta2] = useState("")
    const [akta3, setAkta3] = useState("")
    const [s3PascaS1Akta4D4, setS3PascaS1Akta4D4] = useState("")
    const [doktor2Akta5, setDoktor2Akta5] = useState("")
    const [tahunSdSederajat, setTahunSdSederajat] = useState("")
    const [tahunSmtpSederajat, setTahunSmtpSederajat] = useState("")
    const [tahunSmtaD1Akta1, setTahunSmtaD1Akta1] = useState("")
    const [tahunSmD2d3, setTahunSmD2d3] = useState("")
    const [tahunAkta2, setTahunAkta2] = useState("")
    const [tahunAkta3, setTahunAkta3] = useState("")
    const [tahunS3PascaS1Akta4D4, setTahunS3PascaS1Akta4D4] = useState("")
    const [tahunDoktor2Akta5, setTahunDoktor2Akta5] = useState("")
    const [keterampilan, setKeterampilan] = useState("")
    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    let tahun = []
    for (let y = 1990; y < 2022; y++) { tahun.push(y) }
    const handleFireBaseUpload = e => {
        e.preventDefault()

        // send document
        let found = false
        const docRef = fire
            .firestore().collection('ak')
            .where('nik', '==', nik)
        docRef.onSnapshot(snap => {
            const data = snap.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }))
            data.length > 0 && (found = true)
        })
        docRef.get()
            .then(() => {
                if (!found) {
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
                            keterampilan: keterampilan,
                            foto: imageAsFile.name
                        })
                        .then(() => {
                            // router.push("/")
                            console.log('file save');
                        })
                        .catch((error) => { alert(error.message) })
                } else {
                    alert('NIK telah terdaftar!')
                }
            })
            .catch(err => console.log(err))
        // end send document

        // send image
        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed',
            (snapShot) => {
                console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                storage.ref('images').child(imageAsFile.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                    })
            })
        // end send image
    }
    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
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
                                // value={props.nik.replace(/"/g, "")}
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
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.File id="foto" label="Foto" onChange={handleImageAsFile} />
                        </Form.Group>
                    </Col>
                </Row>

                <h2>Pendidikan Formal</h2>
                <Row>
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.Label>SMTP Sederajat</Form.Label>
                            <Form.Control
                                size="lg"
                                id="smtpSederajat"
                                type="text"
                                placeholder="smtpSederajat"
                                value={smtpSederajat}
                                onChange={(e) => setSmtpSederajat(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
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
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.Label>SD Sederajat</Form.Label>
                            <Form.Control
                                size="lg"
                                id="sdSederajat"
                                type="text"
                                placeholder="sdSederajat"
                                value={sdSederajat}
                                onChange={(e) => setSdSederajat(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
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
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.Label>SMTA D1 Akta 1</Form.Label>
                            <Form.Control
                                size="lg"
                                id="smtaD1Akta1"
                                type="text"
                                placeholder="smtaD1Akta1"
                                value={smtaD1Akta1}
                                onChange={(e) => setSmtaD1Akta1(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
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
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.Label>SM D2 D3</Form.Label>
                            <Form.Control
                                size="lg"
                                id="smD2d3"
                                type="text"
                                placeholder="smD2d3"
                                value={smD2d3}
                                onChange={(e) => setSmD2d3(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
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
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.Label>Akta 2</Form.Label>
                            <Form.Control
                                size="lg"
                                id="akta2"
                                type="text"
                                placeholder="akta2"
                                value={akta2}
                                onChange={(e) => setAkta2(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
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
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.Label>Akta 3</Form.Label>
                            <Form.Control
                                size="lg"
                                id="akta3"
                                type="text"
                                placeholder="akta3"
                                value={akta3}
                                onChange={(e) => setAkta3(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
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
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.Label>S3 Pasca S1 Akta 4 D4</Form.Label>
                            <Form.Control
                                size="lg"
                                id="s3PascaS1Akta4D4"
                                type="text"
                                placeholder="s3PascaS1Akta4D4"
                                value={s3PascaS1Akta4D4}
                                onChange={(e) => setS3PascaS1Akta4D4(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
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
                    <Col lg={6} sm={12}>
                        <Form.Group>
                            <Form.Label>Doktor 2 Akta 5</Form.Label>
                            <Form.Control
                                size="lg"
                                id="doktor2Akta5"
                                type="text"
                                placeholder="doktor2Akta5"
                                value={doktor2Akta5}
                                onChange={(e) => setDoktor2Akta5(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={12}>
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
                    <Col lg={6} sm={12}>
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


    constructor(props) {
        super(props)
        this.state = {
            nik: ""
        }
    }
    componentDidMount() {

        const dataNik = localStorage.getItem('nik')
        this.setState({ nik: dataNik })
        // if (localUsername !== null) {
        //     router.push("register")
        // } else {
        //     router.push("login")
        // }
    }

    render() {
        const { nik } = this.state
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
                    <FormRegist nik={nik} />
                </Container>
                <FooterComponent />
            </>
        )
    }
}

export default Register