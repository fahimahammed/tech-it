import React from 'react';
import './AboutUs.css';
import aboutPhoto from '../../images/about-photo.PNG';
import ProgressBar from "@ramonak/react-progress-bar";

const AboutUs = () => {
    return (
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-8 pe-5 pt-5 mt-5  pb-5">
                    <h6 className="text-success fs-4">About Us</h6>
                    <h1 className="about-heading-text pt-2">We specialize in custom-<br/>tailored software solutions.</h1>
                    <p className="text-dark py-3">Dui eleifend aliquet ad ac non nulla cubilia iaculis porta netus. Felis quis velit urna faucibus nisi. Posuere ex duis volutpat ridiculus pharetra ut nibh adipiscing curabitur quisque donec. Aliquet lectus letius himenaeos netus sollicitudin tellus vulputate pharetra. Amet vehicula nascetur posuere ut quisque hac.</p>
                    <button className="btn btn-success">Discover More</button>
                </div>

                <div className="col-md-4 text-end">
                    <img className="img-fluid about-image" src={aboutPhoto} alt="About US"/>
                </div>
            </div>
            <ProgressBar completed={70}  bgColor="green" height="10px"/>
        </div>
    );
};

export default AboutUs;