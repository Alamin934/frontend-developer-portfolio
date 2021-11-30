import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const style = {
        textDecoration: 'none',
        color: '#333'
    }
    return (
        <div className="mb-5">
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="text-primary fw-bold">Al-Amin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} style={style} to="/#banner">Home</Nav.Link>
                            <Nav.Link as={HashLink} style={style} to="/#about_me">About Me</Nav.Link>
                            <Nav.Link as={HashLink} style={style} to="/#myProjects">Projects</Nav.Link>
                            <Nav.Link as={HashLink} style={style} to="/#blog">Blog</Nav.Link>
                            <Nav.Link as={HashLink} style={style} to="/#contact_me">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;