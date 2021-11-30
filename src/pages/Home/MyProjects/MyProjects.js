import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyProject from '../MyProject/MyProject';

const projects = [
    {
        "id": 1,
        "project_name": "Neon Cyclez",
        "image": "https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg",
        "category": "Mern Stack",
        "description": "This is a Signle Product e-commerce website. MongoDB CRUD oparation supported. Admin can Post, Update, Delete products from Dashboard"
    },
    {
        "id": 2,
        "project_name": "Peck & Go",
        "image": "https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg",
        "category": "Mern Stack",
        "description": "This is a Travel Booking Agency website. Users can Booking any place for Travel and cancel their Booking. Firebase has been used for authentication"
    },
    {
        "id": 3,
        "project_name": "Pharma Store",
        "image": "https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg",
        "category": "Mern Stack",
        "description": "This is a Online Medical Store. Any one can buy medicine or other products. User can not see product details without login or registration"
    },
]
const MyProjects = () => {
    return (
        <>
            <div className="py-5">
                <h5 className="text-center">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
                <h1 className="text-center fw-bold">All Projects</h1>
                <Container>
                    <Row xs={1} md={3} className="g-4 mt-4">
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