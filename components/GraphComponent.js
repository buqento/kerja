import React, { useState } from 'react'
import { Card, Col, Container, Row } from "react-bootstrap"
import fire from '../config/firebase'
import { Bar } from 'react-chartjs-2'

function GraphComponent() {

    const [num, setNum] = useState(null)
    const [numUser, setNumUser] = useState(null)
    const [sd, setNumSd] = useState(null)
    const [smp, setNumSmp] = useState(null)
    const [sma, setNumSma] = useState(null)
    const [diploma, setNumDiploma] = useState(null)
    const [s1, setNumS1] = useState(null)
    const [s2, setNumS2] = useState(null)
    const [s3, setNumS3] = useState(null)
    const [doktor, setNumDoktor] = useState(null)

    const refAcademy = fire.firestore().collection('ak')

    fire.firestore().collection('users').get().then(snap => {
        setNumUser(snap.size)
    });
    refAcademy.get().then(snap => { setNum(snap.size) });
    refAcademy
        .where("pendidikanFormal.sdSederajat.nama", "!=", "")
        .get().then(snap => { setNumSd(snap.size) });
    refAcademy
        .where("pendidikanFormal.smtpSederajat.nama", "!=", "")
        .get().then(snap => { setNumSmp(snap.size) });
    refAcademy
        .where("pendidikanFormal.smtaD1Akta1.nama", "!=", "")
        .get().then(snap => { setNumSma(snap.size) });
    refAcademy
        .where("pendidikanFormal.smD2d3.nama", "!=", "")
        .get().then(snap => { setNumDiploma(snap.size) });
    refAcademy
        .where("pendidikanFormal.akta2.nama", "!=", "")
        .get().then(snap => { setNumS1(snap.size) });
    refAcademy
        .where("pendidikanFormal.akta3.nama", "!=", "")
        .get().then(snap => { setNumS2(snap.size) });
    refAcademy
        .where("pendidikanFormal.s3PascaS1Akta4D4.nama", "!=", "")
        .get().then(snap => { setNumS3(snap.size) });
    refAcademy
        .where("pendidikanFormal.doktor2Akta5.nama", "!=", "")
        .get().then(snap => { setNumDoktor(snap.size) });
    const data = {
        labels: ['SD', 'SMP', 'SMA', 'Diploma', 'S1', 'S2', 'S3', 'Doktor'],
        title: {
            text: "Date Time Formatting"
        },
        datasets: [
            {
                label: 'Jenjang Pendidikan',
                data: [sd, smp, sma, diploma, s1, s2, s3, doktor],
                // tension: 0,
                // borderColor: "rgb(248,169,113)",
                backgroundColor: "blue",
                radius: 0,
                borderWidth: 1,
                pointHitRadius: 5
            }
        ]
    };


    const m = new Date().getMonth()
    let bulan
    switch (m) {
        case 0:
            bulan = "Januari";
            break;
        case 1:
            bulan = "Februari";
            break;
        case 2:
            bulan = "Maret";
            break;
        case 3:
            bulan = "April";
            break;
        case 4:
            bulan = "Mei";
            break;
        case 5:
            bulan = "Juni";
            break;
        case 6:
            bulan = "Juli";
            break;
        case 7:
            bulan = "Agustus";
            break;
        case 8:
            bulan = "September";
            break;
        case 9:
            bulan = "Oktober";
            break;
        case 10:
            bulan = "November";
            break;
        default:
            bulan = "Desember";
    }

    return (
        <Container className="mt-4">
            <h1 className="text-center my-5">Data Statistik</h1>

            <Row>

                <Col lg={4} sm={12} className="mb-3 text-center">
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '4rem' }}>{numUser}</Card.Title>
                            <Card.Text>
                                Pengguna Aplikasi
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} sm={12} className="mb-3 text-center">
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '4rem' }}>{num}</Card.Title>
                            <Card.Text>
                                Pencari Kerja Tahun 2021
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} sm={12} className="mb-3 text-center">
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '4rem' }}>{num}</Card.Title>
                            <Card.Text>
                                Pencari Kerja Bulan {bulan}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <div className="my-5 text-center">
                <h3 className="font-weight-bold my-4">
                    Pencari Kerja Berdasarkan Jenjang Pendidikan
                </h3>
                <Bar data={data} />
            </div>

        </Container>
    )
}

export default GraphComponent