import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="head-container">
            <div className="header-text">
                <h4 className="">MANAGED I.T. SOLUTIONS</h4>
                <h1 className="header-text-style">Reliable, scaleable<br/> and built for your<br/> business.</h1>
                <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className="btn btn-outline-success"><h6 className="text-white">Get Started</h6></button>
            </div>
        </div>
    );
};

export default Header;