import React from 'react'
import { Container, Table } from 'react-bootstrap'
import fire from '../config/firebase'
import { string } from 'prop-types'

export class BioPrint extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    async componentDidMount() {
        const { nik } = this.props
        await fire
            .firestore().collection('ak')
            .where('nik', '==', nik)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const userData =
                    {
                        noPendaftaran: doc.id,
                        nik: doc.data().nik,
                        namaLengkap: doc.data().namaLengkap,
                        tempatLahir: doc.data().tempatLahir,
                        tanggalLahir: doc.data().tanggalLahir && doc.data().tanggalLahir.toDate().toDateString(),
                        jenisKelamin: doc.data().jenisKelamin,
                        status: doc.data().status,
                        agama: doc.data().agama,
                        alamat: doc.data().alamat,
                        pendidikanFormal:
                        {
                            sdSederajat: {
                                nama: doc.data().pendidikanFormal.sdSederajat.nama,
                                tahun: doc.data().pendidikanFormal.sdSederajat.tahun
                            },
                            smtpSederajat: {
                                nama: doc.data().pendidikanFormal.smtpSederajat.nama,
                                tahun: doc.data().pendidikanFormal.smtpSederajat.tahun
                            },
                            smtaD1Akta1: {
                                nama: doc.data().pendidikanFormal.smtaD1Akta1.nama,
                                tahun: doc.data().pendidikanFormal.smtaD1Akta1.tahun
                            },
                            smD2d3: {
                                nama: doc.data().pendidikanFormal.smD2d3.nama,
                                tahun: doc.data().pendidikanFormal.smD2d3.tahun
                            },
                            akta2: {
                                nama: doc.data().pendidikanFormal.akta2.nama,
                                tahun: doc.data().pendidikanFormal.akta2.tahun
                            },
                            akta3: {
                                nama: doc.data().pendidikanFormal.akta3.nama,
                                tahun: doc.data().pendidikanFormal.akta3.tahun
                            },
                            s3PascaS1Akta4D4: {
                                nama: doc.data().pendidikanFormal.s3PascaS1Akta4D4.nama,
                                tahun: doc.data().pendidikanFormal.s3PascaS1Akta4D4.tahun
                            },
                            doktor2Akta5: {
                                nama: doc.data().pendidikanFormal.doktor2Akta5.nama,
                                tahun: doc.data().pendidikanFormal.doktor2Akta5.tahun
                            }
                        },
                        keterampilan: {
                            keterampilan1: doc.data().keterampilan.keterampilan1,
                            keterampilan2: doc.data().keterampilan.keterampilan2,
                            keterampilan3: doc.data().keterampilan.keterampilan3
                        }
                    }
                    this.setState({ user: userData })
                });
            })
            .catch(err => console.log(err))
    }
    render() {
        const { user } = this.state
        return (
            <Container className="px-5 my-5">
                <h2 className="mb-4 text-center font-weight-bold">KARTU TANDA BUKTI PENDAFTARAN<br />PENCARI KERJA</h2>
                <h4 className="my-2">DATA PRIBADI</h4>
                <Table borderless size="sm">
                    <tbody>
                        <tr>
                            <td rowSpan={7}>
                                <img src="https://via.placeholder.com/250x300.png?text=Foto 3x4" />
                            </td>
                            <td>NIK</td>
                            <td className="font-weight-bold">: {user.nik}</td>
                        </tr>
                        <tr>
                            <td>Nama</td>
                            <td className="font-weight-bold">: {user.namaLengkap}</td>
                        </tr>
                        <tr>
                            <td>Tempat / Tanggal Lahir</td>
                            <td className="font-weight-bold">: {user.tempatLahir} / {user.tanggalLahir}</td>
                        </tr>
                        <tr>
                            <td>Jenis Kelamin</td>
                            <td className="font-weight-bold">: {user.jenisKelamin}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td className="font-weight-bold">: {user.status}</td>
                        </tr>
                        <tr>
                            <td>Agama</td>
                            <td className="font-weight-bold">: {user.agama}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td className="font-weight-bold">: {user.alamat}</td>
                        </tr>
                    </tbody>
                </Table>

                {
                    user.pendidikanFormal &&
                    <div className="mt-5">
                        <h4>PENDIDIKAN FORMAL</h4>
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-uppercase text-center">
                                    <th>#</th>
                                    <th>Jenjang Pendidikan</th>
                                    <th>Nama Jenjang Pendidikan</th>
                                    <th>Tahun Lulus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td>SD/SEDERAJAT</td>
                                    <td>{user.pendidikanFormal.sdSederajat.nama}</td>
                                    <td className="text-center">{user.pendidikanFormal.sdSederajat.tahun}</td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td>SMTP/SEDERAJAT</td>
                                    <td>{user.pendidikanFormal.smtpSederajat.nama}</td>
                                    <td className="text-center">{user.pendidikanFormal.smtpSederajat.tahun}</td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td>SMTA/D I/AKTA I</td>
                                    <td>{user.pendidikanFormal.smtaD1Akta1.nama}</td>
                                    <td className="text-center">{user.pendidikanFormal.smtaD1Akta1.tahun}</td>
                                </tr>
                                <tr>
                                    <td className="text-center">5</td>
                                    <td>SM/DII/D III</td>
                                    <td>{user.pendidikanFormal.smD2d3.nama}</td>
                                    <td className="text-center">{user.pendidikanFormal.smD2d3.tahun}</td>
                                </tr>
                                <tr>
                                    <td className="text-center">6</td>
                                    <td>AKTA II</td>
                                    <td>{user.pendidikanFormal.akta2.nama}</td>
                                    <td className="text-center">{user.pendidikanFormal.akta2.tahun}</td>
                                </tr>
                                <tr>
                                    <td className="text-center">7</td>
                                    <td>AKTA III</td>
                                    <td>{user.pendidikanFormal.akta3.nama}</td>
                                    <td className="text-center">{user.pendidikanFormal.akta3.tahun}</td>
                                </tr>
                                <tr>
                                    <td className="text-center">8</td>
                                    <td>S3/PASCA/S1/AKTA IV/DIV</td>
                                    <td>{user.pendidikanFormal.s3PascaS1Akta4D4.nama}</td>
                                    <td className="text-center">{user.pendidikanFormal.s3PascaS1Akta4D4.tahun}</td>
                                </tr>
                                <tr>
                                    <td className="text-center">9</td>
                                    <td>DOKTOR II/AKTA V</td>
                                    <td>{user.pendidikanFormal.doktor2Akta5.nama}</td>
                                    <td className="text-center">{user.pendidikanFormal.doktor2Akta5.tahun}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                }

                {
                    user.keterampilan &&
                    <div className="mt-5">
                        <h4>KETRAMPILAN</h4>
                        <ol>
                            {
                                user.keterampilan.keterampilan1 !== "" &&
                                <li>{user.keterampilan.keterampilan1}</li>
                            }
                            {
                                user.keterampilan.keterampilan2 !== "" &&
                                <li>{user.keterampilan.keterampilan2}</li>
                            }
                            {
                                user.keterampilan.keterampilan3 !== "" &&
                                <li>{user.keterampilan.keterampilan3}</li>
                            }
                        </ol>
                    </div>
                }
                <div className="my-5 text-center">
                    <div>Kepala Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu<br /> Kabupaten Maluku Barat Daya</div>

                    <img src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg" width={200} />

                    <div className="font-weight-bold">MACARIA LOUHENAPESSY, S.Sos</div>
                    <div>Pembina Tk. I</div>
                    <div>NIP.19651126 198603 2 008</div>
                </div>
            </Container>
        );
    }
}
BioPrint.propTypes = {
    nikx: string
}
BioPrint.defaultProps = {
    nikx: null
}