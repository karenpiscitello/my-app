import {Link} from 'react-router-dom'

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
                    <Navbar.Brand>
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
                            <Link to="/">Inicio</Link>
                            <Link to="/detalle">Contacto</Link>
                            <NavDropdown title="Diseño" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/categoria/Remeras">Remeras</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/categoria/Buzos">Buzos</Link></NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                    <CardWidget/>
                    <Link to="/cart">Carrito</Link>
                </Container>
            </Navbar>
            <Content />
        </div>
    );
};

export default NavBar;