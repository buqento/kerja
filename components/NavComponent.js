import React from 'react'
import { Navbar, Nav, NavDropdown, DropdownButton } from 'react-bootstrap'
import Router from 'next/router'
import { HiOutlineHome } from 'react-icons/hi'
class NavComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            userdata: null
        }
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        let userdata = JSON.parse(localStorage.getItem('userdata'))
        this.setState({ user: user, userdata: userdata })
    }

    handleLogout() {
        localStorage.removeItem("user");
        localStorage.removeItem("userdata");
        Router.push("/")
    }

    render() {
        const { user, userdata } = this.state
        return (
            <>
                <Navbar sticky="top" bg="light">
                    <Navbar.Brand href="/">
                        <HiOutlineHome className="mb-1 mr-2" size={28} color="#007bff" />Si Pelita MBD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mr-auto justify-content-end">
                        </Nav>
                        <Navbar.Text>
                            {
                                user ?
                                    <DropdownButton variant="success" drop="left" title={user.username}>
                                        {
                                            userdata ?
                                                <NavDropdown.Item href="biodata">Lihat Data Pencari Kerja</NavDropdown.Item>
                                                :
                                                <NavDropdown.Item href="register">Pendaftaran Pencari Kerja</NavDropdown.Item>
                                        }
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