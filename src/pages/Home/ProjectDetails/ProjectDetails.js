import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Nav } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
const ProjectDetails = () => {
    const { projectId } = useParams();
    const [projects, setProjects] = useState([]);
    const [projectDetail, setProjectDetail] = useState({});
    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    useEffect(() => {
        const project = projects?.find(pj => pj.id === parseInt(projectId));
        setProjectDetail(project);
    }, [projects, projectId]);


    return (
        <div>
            <Header />
            <Container className="py-5">
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={10}>
                        <Card className="p-2 p-md-5 bg-light shadow-lg border-0">
                            <Card.Img variant="top" className="shadow rounded" src={projectDetail?.image} />
                            <Card.Body>
                                <Card.Title className="fs-3 fw-bold">{projectDetail?.project_name}</Card.Title>
                                <div className="d-block d-md-flex mb-3">

                                    <Nav.Link href={projectDetail?.live_link} target="_blank" className="custom-bg custom-shadow px-3 rounded-pill me-3 mt-3 btn btn-outline-primary text-primary">
                                        Live Link <span><i className="bi bi-box-arrow-up-right"></i></span>
                                    </Nav.Link>

                                    <Nav.Link href={projectDetail?.client_link ? projectDetail?.client_link : projectDetail?.code_link} target="_blank" className="custom-bg custom-shadow px-3 rounded-pill me-3 mt-3 btn btn-outline-success text-success">
                                        {projectDetail?.client_link ? 'Client Side Code' : 'Code Link'} <span><i className="bi bi-box-arrow-up-right"></i></span>
                                    </Nav.Link>

                                    {projectDetail?.server_link && <Nav.Link href={projectDetail?.server_link} target="_blank" className="custom-bg custom-shadow px-3 rounded-pill mt-3 btn btn-outline-danger text-danger">
                                        Server Side Code <span><i className="bi bi-box-arrow-up-right"></i></span>
                                    </Nav.Link>}

                                </div>
                                <Card.Text>Details:<br /><br />{projectDetail?.description}</Card.Text>
                            </Card.Body>
                            <Row xs={1} md={2} className="g-4">
                                <Col>
                                    <Card.Img className="shadow rounded" variant="top" src={projectDetail?.image1} />
                                </Col>
                                <Col>
                                    <Card.Img className="shadow rounded" variant="top" src={projectDetail?.image2} />
                                </Col>
                            </Row>
                            <Card.Img className="mt-4 shadow rounded" variant="top" src={projectDetail?.image3} />
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ProjectDetails;