import React from 'react';
import modernTechnology from '../../images/modern-technologies-.jpg';

const ServiceHeader = () => {
    return (
        <div className="bg-dark py-5">
            <div className="container py-5">
                <div className="row py-5 justify-content-between">
                    <div className="col-md-6">
                        <img className="img-fluid rounded-2" src={modernTechnology} alt="Tech it"/>
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-success">Our Services</h5>
                        <h1 className="text-white py-3">Managed I.T. solutions tailored to your business.</h1>
                        <p className="text-white pb-3">Semper primis nam sem si euismod neque faucibus nullam enim curabitur. Bibendum praesent ultricies efficitur tincidunt penatibus vitae aenean at nam maecenas consectetuer. Posuere dictumst ad elementum non facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className="btn btn-success">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHeader;