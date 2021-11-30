import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <div className="py-5" id="blog">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        <Col>

                            <div>
                                <p className="mb-2 text-primary">Blog</p>
                                <h2 className="fw-bold mb-4">Coming Soon</h2>
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

export default Blog;