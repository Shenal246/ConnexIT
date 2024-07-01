import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingNews.css';
import axios from "axios";
import connections from '../../../config';
import SLNavbar from "../../Navbar/Navbar";
import SLChat from "../../ChatBot/Chat";
import SLFooter from "../../Footer/Footer";
import blog from '../../../images/Blogs/event.jpg';

import { Modal, Button } from 'react-bootstrap'; // Import other Bootstrap components

const UpcomingNews = () => {
    // const videoRef = useRef(null); // Create a ref for the video element
    // const [newsData, setNewsData] = useState([]);
    // const [currentVideoLink, setCurrentVideoLink] = useState(null);

    // const serverlink = connections.serverLink;

    // const handleCloseModal = () => {
    //     if (videoRef.current) {
    //         videoRef.current.pause(); // Pause the video
    //     }
    //     setCurrentVideoLink(null);
    // };

    // const handleCardClick = (nlink) => {
    //     setCurrentVideoLink(nlink);
    // };

    // useEffect(() => {
    //     const values = {
    //         query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE type=1 AND status=1 AND cnt=1;",
    //         key: "Cr6re8VRBm"
    //     };

    //     axios.post(serverlink, values).then((response) => {
    //         setNewsData(response.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     });

    // }, []);
    const [lgShow, setLgShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        company: '',
        email: '',
        contact: '',
        location: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.designation) errors.designation = 'Designation is required';
        if (!formData.company) errors.company = 'Company name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.contact) {
            errors.contact = 'Contact number is required';
        } else if (!/^\d{10}$/.test(formData.contact)) {
            errors.contact = 'Contact number must be 10 digits';
        }
        if (!formData.location) errors.location = 'Location is required';
        return errors;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Submit the form
            console.log('Form submitted', formData);
            setLgShow(false);
        }
    };

    return (
        <>
            <SLNavbar />
            <SLChat />
            <div className="container">
                <div className='row'>
                    <div className="row text">
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='UpcomingNewsText'>Upcoming <br /> Events & News</p></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>

                <div className='row '>
                    <div className="col">
                        <div className="card mb-3 cards2">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={blog} className="img-fluid rounded-start blogimg" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className='row'>
                                            <h3 className="card-title">Why SMBs Can Finally Breathe Easy: Palo Alto Networks NGFWs Now Within Reach</h3>
                                        </div>
                                        <br />
                                        <div className='row buttnRow'>
                                            <div className='col-md-4 '>
                                                <h5>Date   :  49.75.8278 </h5>
                                                <h5>Mode :  Physical </h5>
                                            </div>
                                            <div className='col-md-8'>
                                                <button className="btn btn-info read-more" onClick={() => setLgShow(true)}>Register </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    size="xl"
                    show={lgShow}
                    backdrop="static"
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    className='modal'
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                           Event Register Form
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6" style={{ backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6' }}>
                                    <p className='upcomingDis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="designation">Designation</label>
                                            <input type="text" className={`form-control ${errors.designation ? 'is-invalid' : ''}`} id="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" />
                                            {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company">Company Name</label>
                                            <input type="text" className={`form-control ${errors.company ? 'is-invalid' : ''}`} id="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" />
                                            {errors.company && <div className="invalid-feedback">{errors.company}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contact">Contact Number</label>
                                            <input type="text" className={`form-control ${errors.contact ? 'is-invalid' : ''}`} id="contact" value={formData.contact} onChange={handleChange} placeholder="Enter your contact number" />
                                            {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="location">Location</label>
                                            <input type="text" className={`form-control ${errors.location ? 'is-invalid' : ''}`} id="location" value={formData.location} onChange={handleChange} placeholder="Enter your location" />
                                            {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                                        </div>
                                        <Button className="form-group" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
            <SLFooter />
        </>
    );
}

export default UpcomingNews;
