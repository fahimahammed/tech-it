import React from 'react';
import logo from '../../images/logo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-5">
                        <a className="" href="#"><img className="img-fluid" src={logo} alt="Tech IT"/></a>
                        <p className="text-white py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        
                        <FontAwesomeIcon icon={faFacebook} className="text-secondary" size="2x" />
                        <FontAwesomeIcon icon={faTwitter} className="text-secondary" size="2x" />
                        <FontAwesomeIcon icon={faInstagram} className="text-secondary" size="2x" />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;