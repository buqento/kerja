import React from 'react'
import { Navbar, Nav, NavDropdown, DropdownButton } from 'react-bootstrap'
import Router from 'next/router'
import fire from '../config/firebase'

class NavComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        this.setState({ user: user })
    }

    handleLogout() {
        localStorage.removeItem("user");
        Router.push("/")
    }

    render() {
        const { user } = this.state
        return (
            <>

                <Navbar>
                    <Navbar.Brand href="/">SiPelita MBD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mr-auto justify-content-end">
                            <Nav.Link href="/">Beranda</Nav.Link>
                            <Nav.Link href="#">Informasi</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            {
                                user ?
                                    <DropdownButton variant="success" drop="left" title={user.username}>
                                        <NavDropdown.Item href="biodata">Lihat Kartu Pencari Kerja</NavDropdown.Item>
                                        <NavDropdown.Item onClick={this.handleLogout}>Keluar</NavDropdown.Item>
                                    </DropdownButton>
                                    :
                                    <Nav.Link href="login" variant="primary">Login</Nav.Link>
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default NavComponent