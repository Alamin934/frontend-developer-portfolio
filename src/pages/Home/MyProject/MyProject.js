import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProject = ({ project }) => {
    const { id, project_name, image, category, description } = project;
    return (
        <div>
            <Link to={`myProject/${id}`} style={{ textDecoration: 'none' }}>
                <Card className="p-4 custom-bg custom-shadow border-0 btn">
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="px-0" style={{ textAlign: 'left' }}>
                        <Card.Title>{project_name}</Card.Title>
                        <Card.Text>{description.slice(0, 124)}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-transparent border-0 d-flex justify-content-between align-items-center px-0">
                        <p className="mb-0 text-primary">{category}</p>

                        <Link to={`myProject/${id}`} style={{ textDecoration: 'none' }}><Button variant="outline-primary" className="custom-bg custom-shadow px-3 rounded-pill">See More</Button></Link>

                    </Card.Footer>
                </Card>
            </Link>
        </div>
    );
};

export default MyProject;