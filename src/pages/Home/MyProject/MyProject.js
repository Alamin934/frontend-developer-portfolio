import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProject = ({ project }) => {
    const { id, project_name, image, category, description } = project;
    return (
        <div>
            <Card style={{ height: '500px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{project_name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 d-flex justify-content-between align-items-center pb-3">
                    <p className="mb-0 text-primary">{category}</p>
                    <Button variant="outline-primary" className="custom-bg custom-shadow px-3 rounded-pill">
                        <Link to={`myProject/${id}`} style={{ textDecoration: 'none' }}>See More</Link>
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default MyProject;