import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavComponent() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">SIPELITA MBD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Beranda</Nav.Link>
                        <Nav.Link href="#">Informasi</Nav.Link>
                        <Nav.Link href="login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavComponent