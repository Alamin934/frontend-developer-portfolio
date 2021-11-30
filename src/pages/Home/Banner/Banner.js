import React from 'react';
import { Button, Carousel, Col, Container, Nav, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="py-5" id="banner">
                <Container className="py-5">
                    <Row className="g-5" xs={1} md={2}>
                        <Col className="d-flex justify-content-center">
                            <div className="banner-photo">
                                <div className="bp-inner"></div>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center">
                            <div>
                                <h2 className="banner-title fw-bolder mb-0">Hello, I am Al-Amin</h2>
                                <div className="carousel-width d-flex align-items-center mb-2">
                                    <h1 className="me-3 mb-2 fw-bold">a</h1>
                                    <Carousel interval={1800} controls={false} indicators={false}>
                                        <Carousel.Item>
                                            <h3 className="text-primary fw-bold mb-0">Frontend Developer</h3>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <h3 className="text-primary fw-bold mb-0">Mern Stack Developer</h3>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <h3 className="text-primary fw-bold mb-0">WordPress Designer</h3>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <p>I design and develop websites for customers and companies of all types website, modern websites, online store using HTMl, CSS, JavaScript, React JS, Node JS, Express JS, MongoDB.</p>
                                <div className="mt-4 pt-3 d-block d-md-flex">

                                    <Nav.Link href="https://drive.google.com/uc?id=1uT3gmYKwjZ2i5RFyhY--KxUahE6ft9GG&export=download" target="_blank" className="p-0 m-0 me-3 mb-2" style={{ color: '#0d6efd' }} download="AlAmin_WebDev_Resume">
                                        <Button variant="outline-primary" className="rounded-pill px-4 custom-bg custom-shadow border-2">
                                            Download Resume
                                        </Button>
                                    </Nav.Link>

                                    <Nav.Link href="#contact_me" className="p-0 m-0" style={{ color: '#6c757d' }}>
                                        <Button variant="outline-secondary" className="rounded-pill px-4 custom-bg custom-shadow border-2">
                                            Contact Me
                                        </Button>
                                    </Nav.Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <hr />
            </Container>
        </>
    );
};

export default Banner;