import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MyProjects from '../MyProjects/MyProjects';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <Blog></Blog>
            <ContactMe></ContactMe>
            <Footer />
        </div>
    );
};

export default Home;