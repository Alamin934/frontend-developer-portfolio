import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyProject from '../MyProject/MyProject';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./portfolio.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);


    return (
        <>
            <div className="py-5" id="myProjects">
                <Container>
                    <div>
                        <p className="mb-2 text-primary">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                        <h2 className="fw-bold mb-4">All Projects</h2>
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            projects?.map(project => <Col>
                                <MyProject
                                    key={project.id}
                                    project={project}
                                ></MyProject>
                            </Col>)
                        }
                    </Row>
                </Container>
            </div>
            <Container>
                <hr />
            </Container>
        </>
    );
};

export default MyProjects;