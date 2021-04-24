import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
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
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">SIPELITA MBD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Beranda</Nav.Link>
                            <Nav.Link href="#">Informasi</Nav.Link>
                            {
                                user !== null ?
                                    <NavDropdown title={user.username} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="biodata">Lihat Kartu Pencari Kerja</NavDropdown.Item>
                                        <NavDropdown.Item onClick={this.handleLogout}>Keluar</NavDropdown.Item>
                                    </NavDropdown>
                                    :
                                    <Nav.Link href="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default NavComponent