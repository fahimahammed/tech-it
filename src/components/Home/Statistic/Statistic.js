import React from 'react';
import './Statistic.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Statistic = () => {
    const percentage = 66;
    return (
        <div className="statistic-container d-flex align-items-center">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center my-5">
                    <div className="col-md-6">
                        <h5 className="text-success">Statistic</h5>
                        <h1 className="text-white brand-font statistic-title">Consumer insights. Market innovation.</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="row text-center">
                            <div className="col-md m-3" style={{ width: "10%", height: "10%" }}>
                                <CircularProgressbar strokeWidth={4} value={87} maxValue={100} text={`87%`} />;
                                <h5 className="text-white">Project Done</h5>
                            </div>
                            <div className="col-md m-3" style={{ width: "10%", height: "10%" }}>
                                <CircularProgressbar strokeWidth={4} value={90} maxValue={100} text={`90%`} />;
                                <h5 className="text-white">Problem Solved</h5>
                            </div>
                            <div className="col-md m-3" style={{ width: "10%", height: "10%" }}>
                                <CircularProgressbar strokeWidth={4} value={77} maxValue={100} text={`77%`} />;
                                <h5 className="text-white">Growth Revenue</h5>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6 text-end">
                        <img className='img-fluid w-100' src="https://i.ibb.co/5G65P2y/professional.jpg" alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Statistic;