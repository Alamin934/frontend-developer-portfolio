import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner></Banner>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;