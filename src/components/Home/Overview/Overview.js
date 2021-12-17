import React from 'react';
import './Overview.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCoffee, faHeart, faHistory, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Overview = () => {
    return (
        <div className="bg-light py-5">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 pe-2 pb-3">
                        <h6>Development</h6>
                        <ProgressBar completed={80}  bgColor="green" height="15px"/>
                        <h6 className="mt-3">Marketing</h6>
                        <ProgressBar completed={90}  bgColor="green" height="15px"/>
                        <h6 className="mt-3">Design</h6>
                        <ProgressBar completed={70}  bgColor="green" height="15px"/>
                    </div>
                    <div className="col-md-6">
                        <h1>We’re on a mission to put a<br/> computer on every desk</h1>
                        <p>Duis integer lacus montes dis himenaeos metus fringilla ut fusce. Libero rutrum posuere condimentum feugiat facilisi consequat. Mauris nunc condimentum ultricies cubilia tellus magnis. Est sapien finibus parturient libero porta.</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-3 text-center">
                        <FontAwesomeIcon icon={faHistory} size="2x" />
                        <h1 className='overview-text'>15</h1>
                        <h4>Years</h4>
                    </div>
                    <div className="col-md-3 text-center">
                        <FontAwesomeIcon icon={faCode} size="2x" />
                        <h1 className='overview-text'>48</h1>
                        <h4>Developers</h4>
                    </div>
                    <div className="col-md-3 text-center">
                        <FontAwesomeIcon icon={faHeart} size="2x" />
                        <h1 className='overview-text'>1230</h1>
                        <h4>Customers</h4>
                    </div>
                    <div className="col-md-3 text-center">
                        <FontAwesomeIcon icon={faLayerGroup} size="2x" />
                        <h1 className='overview-text'>876</h1>
                        <h4>Projects</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;