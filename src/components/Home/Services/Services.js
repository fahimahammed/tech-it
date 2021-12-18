import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [servicesData, setServicesData] = useState('');
    useEffect(() => {
        fetch('./inovations.json')
        .then(res => res.json())
        .then(data => setServicesData(data));
    }, []);

    console.log(servicesData);
    return (
        <div className="container py-5 bg-light">
            <h1 className="pt-4 text-center">Discover the Tech Innovations</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

            <div className="d-flex flex-wrap justify-content-between pb-5">
                {
                    servicesData && servicesData.map( service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;