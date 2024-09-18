import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingNews.css';
import axios from "axios";
import SLNavbar from "../../Navbar/Navbar";
import SLChat from "../../ChatBot/Chat";
import SLFooter from "../../Footer/Footer";
import Swal from 'sweetalert2';
import connections from '../../../config';
import microsoft from '../../../images/techImages/microsoft-3.jpg'

import { Modal, Button } from 'react-bootstrap'; // Import other Bootstrap components

const UpcomingNews = () => {
    const videoRef = useRef(null); // Create a ref for the video element
    const [sLUpEv, setSLUpEv] = useState([]);
    const [currentUpcoming, setcurrentUpcoming] = useState(null);

    const serverlink1234 = connections.eventregister;
    const slupevserverlink = connections.upcomings;
    const slseatupdate = connections.upcomingsSeatUpdate;
    const slupseatcount = connections.upcomingsseat;

    // State to control the Copilot summary modal
    const [showCopilotModal, setShowCopilotModal] = useState(false);

    useEffect(() => {
        axios.get(slupevserverlink, {
            headers: {
                cnt: 1
            }
        }).then((response) => {
            setSLUpEv(response.data);
        }).catch((err) => {
            console.log(err);
        });

        console.log(sLUpEv);;
    }, []);

    const [lgShow, setLgShow] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        designation: '',
        company: '',
        email: '',
        contact: '',
        province: '',
        city: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        console.log(formData);
    };

    const validate = () => {
        let errors = {};
        if (!formData.title) errors.title = 'Title is required';
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
        if (!formData.city) errors.city = 'City is required';
        if (!formData.province) errors.province = 'Province is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const value33 = {
                    upcomingid: currentUpcoming?.id, // Using optional chaining for safer access
                    title: formData.title,
                    name: formData.name,
                    designation: formData.designation,
                    companyname: formData.company,
                    email: formData.email,
                    contactno: formData.contact,
                    province: formData.province,
                    city: formData.city,
                    cnt: '1'
                };

                const seatCount = {
                    id: currentUpcoming && currentUpcoming.id,
                };

                const responseSeat = await axios.get(slupseatcount, {
                    headers: {
                        cnt: currentUpcoming && currentUpcoming.id,
                    }
                });

                var intresponseSeat = parseInt(responseSeat.data[0].seats);

                if (!isNaN(intresponseSeat)) {
                    if (intresponseSeat > 0) {
                        intresponseSeat = intresponseSeat - 1;

                        const response123 = await axios.post(serverlink1234, value33);
                        console.log(response123);
                        if (response123.status === 200) {
                            const data = {
                                seat: intresponseSeat
                            }
                            const id = currentUpcoming && currentUpcoming.id;
                            const response123456 = await axios.put(`${slseatupdate}/${id}`, data);

                            if (response123456.status === 200) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Successfully Submitted",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                setFormData({
                                    title: '',
                                    name: '',
                                    designation: '',
                                    company: '',
                                    email: '',
                                    contact: '',
                                    province: '',
                                    city: ''
                                });
                                setLgShow(false);
                                setcurrentUpcoming(null);
                                window.location.reload();
                            } else {
                                alert(' Error reducing the seat count');
                            }
                        } else {
                            alert('Failed to submit the form.');
                        }
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No Seats are currently available",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setFormData({
                            title: '',
                            name: '',
                            designation: '',
                            company: '',
                            email: '',
                            contact: '',
                            province: '',
                            city: ''
                        });
                        setLgShow(false);
                        setcurrentUpcoming(null);
                    }
                } else {
                    const response123 = await axios.post(serverlink1234, value33);
                    console.log(response123);
                    if (response123.status === 200) {
                        Swal.fire({
                            icon: "success",
                            title: "Successfully Submitted",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setFormData({
                            title: '',
                            name: '',
                            designation: '',
                            company: '',
                            email: '',
                            contact: '',
                            province: '',
                            city: ''
                        });
                        setLgShow(false);
                        setcurrentUpcoming(null);
                    } else {
                        alert('Failed to submit the form.');
                    }
                }
            } catch (error) {
                console.error('Error submitting the form', error);
                alert('An error occurred while submitting the form.');
            }
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

                {/* microsoft event card */}
                <div className='row microsoftcard'>
                    <div className="card mb-3 cards2">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={microsoft} className="img-fluid blogimg mcroimg" alt="Microsoft Event" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className='row'>
                                        <h3 className="card-title"><div className="d-flex align-items-center">
                                            {/* Add Microsoft Logo */}
                                            <img
                                                src="https://img.icons8.com/color/48/000000/microsoft.png"
                                                alt="Microsoft Logo"
                                                style={{ marginRight: '10px' }}
                                            />
                                            <Modal.Title id="copilot-modal-title">Microsoft 365 Copilot</Modal.Title>
                                        </div></h3>
                                    </div>
                                    <br />
                                    <div className='row buttnRow'>
                                        <div className='col-md-5'>
                                            <h4>Meet Microsoft Copilot</h4>
                                            <h5>Mode : Physical</h5>
                                        </div>
                                        <div className='col-md-7'>
                                            <button className="btn btn-info read-more" onClick={() => setShowCopilotModal(true)}>
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end of the microsoft event card */}

                {/* Copilot Summary Modal */}
                <Modal
                    show={showCopilotModal}
                    onHide={() => setShowCopilotModal(false)}
                    size="lg"
                    aria-labelledby="copilot-modal-title"
                    className="copilot-modal"
                >
                    <Modal.Header closeButton style={{ borderBottom: 'none' }}>
                        <div className="d-flex align-items-center">
                            {/* Add Microsoft Logo */}
                            <img
                                src="https://img.icons8.com/color/48/000000/microsoft.png"
                                alt="Microsoft Logo"
                                style={{ marginRight: '10px' }}
                            />
                            <Modal.Title id="copilot-modal-title">Microsoft 365 Copilot</Modal.Title>
                        </div>
                    </Modal.Header>
                    <Modal.Body style={{
                        background: 'linear-gradient(135deg, #f0e4f7 0%, #c8e4fb 100%)', // Updated pastel gradient
                        color: '#333', // Text color
                        borderRadius: '12px',
                        padding: '30px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Softer shadow for a modern look
                    }}>
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white for frosted glass effect
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(8px)' // Blur effect for frosted glass
                        }}>
                            <h4 style={{ color: '#0078d4' }}>Your Copilot for work</h4>
                            <p>Copilot streamlines meeting management and boosts productivity:</p>
                            <ul>
                                <li><strong>Preparation:</strong> Generates agendas, prioritizes topics.</li>
                                <li><strong>Scheduling:</strong> Finds optimal times, sends reminders.</li>
                                <li><strong>During Meetings:</strong> Takes notes, assists with Q&A.</li>
                                <li><strong>Post-Meeting:</strong> Distributes summaries, analyzes feedback.</li>
                                <li><strong>Event Planning:</strong> Manages tasks, tracks logistics.</li>
                            </ul>
                            <p>This process ensures well-organized workflows for the COE.</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{ borderTop: 'none', justifyContent: 'center', marginTop: '10px' }}>
                        <Button
                            variant="primary"
                            onClick={() => {
                                // Redirect to Outlook
                                window.open('https://outlook.live.com/', '_blank');
                            }}
                            style={{ backgroundColor: '#0078d4', borderColor: '#0078d4', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} // Updated to match Microsoft's primary color

                        >
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>




                <div className='row '>
                    {sLUpEv && sLUpEv.map((slup, ind) => (
                        <div className="row" key={ind}>
                            <div className="card mb-3 cards2">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={`data:image/jpeg;base64,${slup.image_data}`} className="img-fluid rounded-start blogimg" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <div className='row'>
                                                <h3 className="card-title">{slup.title}</h3>
                                            </div>
                                            <br />
                                            <div className='row buttnRow'>
                                                <div className='col-md-5 '>
                                                    <h5>Date :  {slup.date} </h5>
                                                    <h5>Time :  {slup.time} </h5>
                                                    <h5>Mode :  {slup.mode} </h5>
                                                    <h5>Remaining Seats: {slup.seats} </h5>
                                                </div>
                                                <div className='col-md-7'>
                                                    <button className="btn btn-info read-more" onClick={() => { setLgShow(true); setcurrentUpcoming(slup); }}>Register </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Existing Registration Modal */}
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
                            Event Register
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6" style={{ backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6' }}>
                                    <h4 className='upheading'>{currentUpcoming && currentUpcoming.title}</h4>
                                    <h6>Date :  {currentUpcoming && currentUpcoming.date} </h6>
                                    <h6>Time :  {currentUpcoming && currentUpcoming.time} </h6>
                                    <h6>Mode :  {currentUpcoming && currentUpcoming.mode} </h6>
                                    <h6>Remaining Seats:   {currentUpcoming && currentUpcoming.seats} </h6>
                                    <p className='upcomingDis'>{currentUpcoming && currentUpcoming.description}</p>
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={handleSubmit} id='upcomingregform'>
                                        <div className='row'>
                                            <div className="col-md-2 form-group">
                                                <label htmlFor="title">Title</label>
                                                <select
                                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                                    id="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled>Select Title</option>
                                                    <option value="Mr.">Mr.</option>
                                                    <option value="Mrs.">Mrs.</option>
                                                    <option value="Miss">Miss</option>
                                                </select>
                                                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                                            </div>

                                            <div className="col-md-10 form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                            </div>
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

                                        <div className='row locationSelect'>
                                            <div className="form-group col-md-5">
                                                <label htmlFor="province">Province</label>
                                                <select
                                                    className={`form-control ${errors.province ? 'is-invalid' : ''}`}
                                                    id="province"
                                                    value={formData.province}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled>Select Province</option>
                                                    <option value="Western">Western </option>
                                                    <option value="Southern">Southern</option>
                                                    <option value="Central">Central</option>
                                                    <option value="Eastern">Eastern</option>
                                                    <option value="North Central">North Central</option>
                                                    <option value="Northern">Northern</option>
                                                    <option value="North Western">North Western</option>
                                                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                                                    <option value="Uva">Uva</option>
                                                </select>
                                                {errors.province && <div className="invalid-feedback">{errors.province}</div>}
                                            </div>

                                            <div className="col-md-7 form-group">
                                                <label htmlFor="city">City</label>
                                                <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''}`} id="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" />
                                                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                                            </div>
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
