import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faRandom, faTools } from '@fortawesome/free-solid-svg-icons';

const ChooseUs = () => {
    return (
        <div className="container text-center py-5 my-5">
            <div className="py-2 mb-5">
                <h5 className="text-success">WHY BUSINESS CHOOSE US</h5>
                <h1 className="brand-font">Jumpstart your business</h1>
                <p>Fermentum dictum aptent malesuada vivamus habitant placerat.</p>
            </div>

            <div className="row">
                <div className="col-md px-3 py-2">
                    <FontAwesomeIcon className="text-success m-1" icon={faHandshake} size="3x" />
                    <h4 className="brand-font pt-2">We're Loyal</h4>
                    <p>Molestie interdum tristique cursus class eros elit natoque dui ut.</p>
                </div>
                <div className="col-md px-3 py-2">
                    <FontAwesomeIcon className="text-success m-1" icon={faTools} size="3x" />
                    <h4 className="brand-font pt-2">We're helpfull</h4>
                    <p>Molestie interdum tristique cursus class eros elit natoque dui ut.</p>
                </div>
                <div className="col-md px-3 py-2">
                    <FontAwesomeIcon className="text-success m-1" icon={faRandom} size="3x" />
                    <h4 className="brand-font pt-2">We're Flexible</h4>
                    <p>Molestie interdum tristique cursus class eros elit natoque dui ut.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;