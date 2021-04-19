import React from 'react'
import { Container, Table } from 'react-bootstrap'

export class BioPrint extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }
    async componentDidMount() {
        const res = await fetch('https://607a5938bd56a60017ba295f.mockapi.io/users/1')
        const user = await res.json()
        this.setState({ user: user })
    }
    render() {
        const { user } = this.state
        return (
            <Container className="text-center px-5 my-5">

                <h1 className="mb-4">
                    Formulir Kartu Pencari Kerja (AK/I)
                </h1>
                <div className="my-4">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60" />
                </div>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>NIK</td>
                            <td>{user.nik}</td>
                        </tr>
                        <tr>
                            <td>Nama</td>
                            <td>{user.namaLengkap}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>{user.alamat}</td>
                        </tr>
                        <tr>
                            <td>Jenis Kelamin</td>
                            <td>{user.jenisKelamin}</td>
                        </tr>
                        <tr>
                            <td>Telepon</td>
                            <td>{user.telepon}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{user.status}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="my-4">
                    <img src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg" width={200} />
                    <div>Kepala Dinas Penanaman Modal dan PTSP<br/> Kabupaten Maluku Barat Daya</div>
                </div>
            </Container>
        );
    }
}