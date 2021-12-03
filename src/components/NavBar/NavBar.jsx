import Content from "./Content";
//import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import CardWidget from "./CardWidget";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        LateralMood
                        {/* <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                        /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                            <NavDropdown title="Diseño" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Buzos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                    <CardWidget/>
                </Container>
            </Navbar>
            <Content />
        </div>
    );
};

export default NavBar;