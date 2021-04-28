import { Button } from "react-bootstrap"
import { Jumbotron } from "react-bootstrap"

function JumbotronComponent() {
    return (
        <Jumbotron fluid className="text-center" bg="info">
            <h1>Si Pelita MBD</h1>
            <h3>Sistem Pelayanan Informasi Tenaga Kerja<br />Maluku Barat Daya</h3>
            <Button variant="primary" className="mt-4" size="lg">Alur Pendaftaran Pencari Kerja</Button>
        </Jumbotron>
    )
}

export default JumbotronComponent