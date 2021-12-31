import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Overview from '../Overview/Overview';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import Services from '../Services/Services';
import Statistic from '../Statistic/Statistic';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <AboutUs></AboutUs>
            <Overview></Overview>
            <ServiceHeader></ServiceHeader>
            <Services></Services>
            <Statistic></Statistic>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;