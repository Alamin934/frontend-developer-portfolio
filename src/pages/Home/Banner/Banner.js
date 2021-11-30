import React from 'react';
import { Button, Carousel, Col, Container, Nav, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="py-5">
                <Container className="py-5">
                    <Row className="g-5">
                        <Col md="6" className="d-flex justify-content-center">
                            <div className="banner-photo">
                                <div className="bp-inner"></div>
                            </div>
                        </Col>
                        <Col md="6" className="d-flex align-items-center">
                            <div>
                                <div className="w-75">
                                    <Carousel interval={1800} controls={false} indicators={false}>
                                        <Carousel.Item>
                                            <h5 className="fw-normal">Frontend Developer</h5>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <h5 className="fw-normal">Mern Stack Developer</h5>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <h5 className="fw-normal">WordPress Designer</h5>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <h2 className="display-4 fw-bolder mb-3">Alamin</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident velit quisquam accusamus consequuntur, illo corporis voluptas quo perspiciatis rerum quod doloribus minima. Quaerat, et eligendi!</p>
                                <div className="mt-4 pt-2 d-block d-md-flex">

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