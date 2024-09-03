import React from 'react';
import './InfrastrueMonitoring.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import connections from '../../../../../config';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CamNavbar from '../../../Navbar/Navbar';
import CamChat from '../../../ChatBot/Chat';
import CamFooter from '../../../Footer/Footer';
import seagate from '../../../../../images/CamVendors/seagate_CMYK_stacked_pos.png';

function Server() {
    const [vendors, setVendors] = useState([]);
    const [show, setShow] = useState(false);
    const [currentVendor, setCurrentVendor] = useState(null);
    const navigate = useNavigate();
    const serverlink = connections.pillor7;

    useEffect(() => {
        axios.get(serverlink, { headers: { cnt: 3 } }).then((response) => {
            const vendorList = response.data;
            setVendors(vendorList);  // Removed Seagate from vendor list
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const handleCardClick = (vend) => {
        if (vend === 'custom-image') {
            // Navigate to a different route when the first card is clicked
            navigate('/KH/Seagate');  // Replace with the actual route of your new component
        } else {
            // Navigate to the dynamic route for other vendor cards
            navigate(`/KH/Solutions/InfrastructureMonitoring/${vend.name}`, { state: { vend } });
        }
    };

    const { t } = useTranslation();
    const { if1, if2 } = t('ifmsec', { returnObjects: true });

    return (
        <>
            <CamNavbar />
            <CamChat />
            <section>
                <div className="container">
                    <div className='row '>
                        <div className="row text headingrow">
                            <div className="col-3" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                            <div className="col-6" data-aos="fade-up" data-aos-delay="100"><p id='topic'>{if1}</p></div>
                            <div className="col-3" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 rowmargin">

                        {/* Hardcoded Image Card */}
                        <div className="col">
                            <div className="card h-100" onClick={() => handleCardClick('custom-image')}>
                                <img
                                    src={seagate} 
                                    alt="Custom Image"
                                    className="card-img-top custom-image-height"
                                />
                            </div>
                        </div>

                        {/* Render remaining vendor cards dynamically */}
                        {vendors.map((vend, index) => (
                            <div className="col" key={index}>
                                <div className="card h-100" onClick={() => handleCardClick(vend)}>
                                    {vend.image_data ? (
                                        <img
                                            src={`data:image/jpeg;base64,${vend.image_data}`}
                                            alt={vend.title}
                                            className="card-img-top"
                                        />
                                    ) : (
                                        <p>{if2}</p>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title vendorTitel">{vend.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        aria-labelledby="example-custom-modal-styling-title"
                        size='xl'
                    >
                        <Modal.Header closeButton closeVariant='white' className='modelHeader'>
                            <Modal.Title id="example-custom-modal-styling-title">
                                {currentVendor && currentVendor.name}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body scrollable className='btnBody'>
                            <Row>
                                <p>
                                    {currentVendor && currentVendor.des}
                                </p>
                            </Row>
                            <Row>
                                <a href={currentVendor && currentVendor.wlink} target='_blank' rel="noopener noreferrer"><Button variant="primary" className='websiteButton'>Visit Website</Button></a>
                            </Row>
                        </Modal.Body>
                    </Modal>
                </div>
            </section>
            <CamFooter />
        </>
    );
}

export default Server;
