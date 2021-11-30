import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../Shared/Header/Header';
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
const ProjectDetails = () => {
    const [projectDetail, setProjectDetail] = useState([]);
    const { projectId } = useParams();
    useEffect(() => {
        const project = projects?.find(pj => pj.id === parseInt(projectId));
        setProjectDetail(project);
    }, [projectId]);
    const { id, project_name, image, } = projectDetail;
    return (
        <div>
            <Header />
            <h2>project id: {id}</h2>
            <h2>project id: {project_name}</h2>
        </div>
    );
};

export default ProjectDetails;