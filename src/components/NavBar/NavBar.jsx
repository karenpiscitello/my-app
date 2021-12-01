import Content from "./Content";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Theater</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Disign</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Programming</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Content />
        </div>
    );
};

export default NavBar;