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
        const detail = await fire
            .firestore().collection('ak')
            .where('nik', '==', nik)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data());
                    this.setState({ user: doc.data() })
                });
            })
            .catch(err => console.log(err))

    }
    render() {
        const { user } = this.state
        console.log(user.pendidikanFormal);
        return (
            <Container className="px-5 my-5">
                <h2 className="mb-4 text-center font-weight-bold">KARTU TANDA BUKTI PENDAFTARAN<br />PENCARI KERJA</h2>

                <h4 className="my-2">DATA PRIBADI</h4>

                <Table borderless>
                    <tbody>
                        <tr>
                            <td rowSpan={7}>
                                <img src="https://via.placeholder.com/300x400.png?text=Foto 3x4" />
                            </td>
                            <td>NIK</td>
                            <td>: {user.nik}</td>
                        </tr>
                        <tr>
                            <td>Nama</td>
                            <td>: {user.namaLengkap}</td>
                        </tr>
                        <tr>
                            <td>Tempat dan Tanggal Lahir</td>
                            <td>: {user.tempatLahir} / {user.tanggalLahir}</td>
                        </tr>

                        <tr>
                            <td>Jenis Kelamin</td>
                            <td>: {user.jenisKelamin}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>: {user.status}</td>
                        </tr>
                        <tr>
                            <td>Agama</td>
                            <td>: {user.agama}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>: {user.alamat}</td>
                        </tr>
                    </tbody>
                </Table>

                <h4 className="my-2">PENDIDIKAN FORMAL</h4>

                {
                    user.pendidikanFormal &&
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
                                <td>{user.pendidikanFormal.sdSederajat.tahun}</td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>SMTP/SEDERAJAT</td>
                                <td>{user.pendidikanFormal.smtpSederajat.nama}</td>
                                <td>{user.pendidikanFormal.smtpSederajat.tahun}</td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>SMTA/D I/AKTA I</td>
                                <td>{user.pendidikanFormal.smtaD1Akta1.nama}</td>
                                <td>{user.pendidikanFormal.smtaD1Akta1.tahun}</td>
                            </tr>
                            <tr>
                                <td className="text-center">5</td>
                                <td>SM/DII/D III</td>
                                <td>{user.pendidikanFormal.smD2d3.nama}</td>
                                <td>{user.pendidikanFormal.smD2d3.tahun}</td>
                            </tr>
                            <tr>
                                <td className="text-center">6</td>
                                <td>AKTA II</td>
                                <td>{user.pendidikanFormal.akta2.nama}</td>
                                <td>{user.pendidikanFormal.akta2.tahun}</td>
                            </tr>
                            <tr>
                                <td className="text-center">7</td>
                                <td>AKTA III</td>
                                <td>{user.pendidikanFormal.akta3.nama}</td>
                                <td>{user.pendidikanFormal.akta3.tahun}</td>
                            </tr>
                            <tr>
                                <td className="text-center">8</td>
                                <td>S3/PASCA/S1/AKTA IV/DIV</td>
                                <td>{user.pendidikanFormal.s3PascaS1Akta4D4.nama}</td>
                                <td>{user.pendidikanFormal.s3PascaS1Akta4D4.tahun}</td>
                            </tr>
                            <tr>
                                <td className="text-center">9</td>
                                <td>DOKTOR II/AKTA V</td>
                                <td>{user.pendidikanFormal.doktor2Akta5.nama}</td>
                                <td>{user.pendidikanFormal.doktor2Akta5.tahun}</td>
                            </tr>
                        </tbody>
                    </Table>
                }

                <h4 className="my-2">KETRAMPILAN</h4>
                <ol>
                    <li>{user.keterampilan}</li>
                </ol>

                <div className="my-5 text-center">
                    <div>Kepala Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu<br /> Kabupaten Maluku Barat Daya</div>

                    <img src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg" width={200} />

                    <div>MACARIA LOUHENAPESSY, S.Sos</div>
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