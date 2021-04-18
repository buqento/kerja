import { Button } from "react-bootstrap"
import { Jumbotron } from "react-bootstrap"

function Jtron() {
    return (
        <div className="mt-10">
            <Jumbotron>
                <h1>SIPELITANAKER</h1>
                <p>Sistem Informasi Pelayanan Elektronik Terpadu Tenaga Kerja</p>
                <p><Button variant="primary" href="register">Pendaftaran AK1 (Kartu Kuning)</Button></p>
            </Jumbotron>
        </div>
    )
}

export default Jtron