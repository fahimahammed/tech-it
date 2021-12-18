import React from 'react';

const ServiceCard = ({service}) => {
    const {id, title, description, img, link} = service;
    return (
        <div className="card mt-5" style={{width: '18rem'}}>
            <img src={img} className="card-img-top" alt={title}/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href={link}>Learn more</a>
            </div>
        </div>
    );
};

export default ServiceCard;