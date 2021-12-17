import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Overview from '../Overview/Overview';
import ServiceHeader from '../ServiceHeader/ServiceHeader';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <AboutUs></AboutUs>
            <Overview></Overview>
            <ServiceHeader></ServiceHeader>
        </div>
    );
};

export default Home;