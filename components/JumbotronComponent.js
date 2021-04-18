import { Button } from "react-bootstrap"
import { Jumbotron } from "react-bootstrap"

function JumbotronComponent() {
    return (
        <Jumbotron className="text-center">
            <h1>SIPELITANAKER</h1>
            <p>Sistem Informasi Pelayanan Elektronik Terpadu Tenaga Kerja</p>
            <p><Button variant="primary" href="register">Pendaftaran AK1 (Kartu Kuning)</Button></p>
        </Jumbotron>
    )
}

export default JumbotronComponent