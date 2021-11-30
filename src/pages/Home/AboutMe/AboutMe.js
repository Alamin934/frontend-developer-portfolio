import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import me from '../../../files/me.png';

const AboutMe = () => {
    return (
        <>
            <div className="py-5" id="about_me">
                <Container>
                    <Row>
                        <Col md={8} xs={12} data-aos="zoom-in-right">
                            <p className="mb-1 text-primary">ABOUT ME</p>
                            <h2 className="fw-bold mb-3">Biography</h2>
                            <p className="fs-4 text-muted about-description">Hi! My name is Al-Amin. I'm a Front-end Developer and I'm very passionate and dedicated to my work. I'm from Bangladesh. With 1.5 years experience as a professional Web and Wordpress designer, I have acquired the skills and knowledge necessary to make your project a success. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</p>
                        </Col>
                        <Col md={4} xs={12} data-aos="zoom-in-left">
                            <img className="img-fluid rounded bg-white p-2 shadow" src={me} alt="" />
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

export default AboutMe;