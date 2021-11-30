import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './ContactMe.css';

const ContactMe = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g4suori', 'template_dsfwaoh', e.target, 'user_Yy6M4jkQiBp6zOhqRL0gu')
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text);
            }, (error) => {
                alert("An error occurred, Please try again", error.text);
            });
        e.target.reset();
    };

    return (
        <div className="py-5" id="contact_me">
            <Container>
                <div>
                    <p className="text-primary mb-2">Contact Me</p>
                    <h2 className="fw-bold mb-4">How Can I Help You?</h2>
                </div>
                <Row className="g-5 ms-0">
                    <Col md="8" className="custom-bg p-3 custom-shadow rounded" data-aos="fade-down">
                        <div>
                            <Form onSubmit={sendEmail}>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Control className="py-2 shadow-sm" placeholder="Full Name" name="full_name" />
                                        <Form.Control className="mt-4 py-2 shadow-sm" placeholder="Email Address" type="email" name="email" />
                                        <Form.Control className="mt-4 mb-4 mb-md-0 py-2 shadow-sm" placeholder="Subject" name="subject" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Control
                                            className="shadow-sm"
                                            placeholder="Message"
                                            as="textarea"
                                            style={{ height: '174px' }}
                                            name="message" />
                                    </Col>
                                </Row>
                                <Button type="submit" variant="outline-primary" className="rounded-pill px-4 mt-4 custom-bg custom-shadow border-2">Send Message</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col md="4" className="text-center text-md-start">
                        <div className="mb-4 custom-bg custom-shadow p-3 rounded" data-aos="fade-down">
                            <Row>
                                <Col md={2}>
                                    <h1 className="mb-0"><i className="bi bi-phone text-primary"></i></h1>
                                </Col>
                                <Col md={10}>
                                    <h5 className="fw-bold mt-2">+88 01850-304272</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, saepe!</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-4 custom-bg custom-shadow p-3 rounded" data-aos="fade-down">
                            <Row>
                                <Col md={2}>
                                    <h1 className="mb-0"><i className="bi bi-geo-alt text-primary"></i></h1>
                                </Col>
                                <Col md={10}>
                                    <h5 className="fw-bold mt-2">Tangail Sadar, Tangail, Dhaka, Bangladesh</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, saepe!</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-4 mb-md-0 custom-bg custom-shadow p-3 rounded" data-aos="fade-down">
                            <Row>
                                <Col md={2}>
                                    <h1 className="mb-0"><i className="bi bi-envelope text-primary"></i></h1>
                                </Col>
                                <Col md={10}>
                                    <h5 className="fw-bold mt-3">islamalamin934@gmail.com</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, saepe!</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactMe;