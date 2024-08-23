import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';
import mapnz from '../../images/map/nz.png';
import Swal from 'sweetalert2';
import connections from '../../config';
import NZNavbar from "../Navbar/Navbar";
import NZChat from "../ChatBot/Chat";
import NZFooter from "../Footer/Footer";
// import NewBtn from '../NewButton/NewBtn';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const formRef = useRef();
    // const [isHuman, setIsHuman] = useState(false);
    // const recaptchaRef = useRef();

    const serverlink = connections.newcontactus;

    const onSubmit = async (data) => {
        // if (!isHuman) {
        //     alert('Please verify that you are a human!');
        //     return;
        // }

        const value33 = {

            firstname: data.firstName,
            lastname: data.lastName,
            company: data.Company,
            tpno: data.contactNumber,
            email: data.email,
            comment: data.comments,

        };

        console.log(value33);

        try {
            const response = await axios.post(serverlink, value33, {
                headers: { cnt: 7 }
            });
            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Successfully Submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error submitting the form', error);
            alert('An error occurred while submitting the form.');
        }
    };

    // const handleRecaptchaChange = (value) => {
    //     setIsHuman(!!value);
    // };

    return (
        <>
            <NZNavbar />
            <NZChat />
            {/* <NewBtn/> */}
            <div className="container">
                <div className='row'>
                    <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <div className="col-md-4"><hr /></div>
                        <div className="col-md-4"><p id='Text'>Contact Us</p></div>
                        <div className="col-md-4"><hr /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <h1 className='h1'>Reach out to us <br /> to let us know how we can assist you.</h1>
                        <h2 className='h2'>We are happy to provide <br /> customer support or <br />answer any general inquiries <br /> you may have.</h2>
                    </div>
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating col-md-mb-2">
                                <div className="row mt-4 mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            placeholder="First name"
                                            aria-label="First name"
                                            {...register('firstName', { required: true })}
                                        />
                                        {errors.firstName && <span className="text-danger">First name is required</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            placeholder="Last name"
                                            aria-label="Last name"
                                            {...register('lastName', { required: true })}
                                        />
                                        {errors.lastName && <span className="text-danger">Last name is required</span>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.Company ? 'is-invalid' : ''}`}
                                            placeholder="Company"
                                            aria-label="Company"
                                            {...register('Company', { required: true })}
                                        />
                                        {errors.Company && <span className="text-danger">Company is required</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                            placeholder="Contact Number"
                                            aria-label="Contact Number"
                                            {...register('contactNumber', {
                                                required: true,
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: 'Invalid contact number',
                                                },
                                                validate: {
                                                    length: (value) => value.length === 10 || 'Contact number must be exactly 10 digits',
                                                },
                                            })}
                                        />
                                        {errors.contactNumber && <span className="text-danger">{errors.contactNumber.message || 'Contact number is required'}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md mb-3">
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-danger">{errors.email.message || 'Email is required'}</span>}
                            </div>

                            <div className="col-md">
                                <textarea
                                    className={`form-control txtarea ${errors.comments ? 'is-invalid' : ''}`}
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    {...register('comments', { required: true })}
                                ></textarea>
                                {errors.comments && <span className="text-danger">Comments are required</span>}
                            </div>

                            <div className="form-check formcheck">
                                <input
                                    className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    {...register('acceptTerms', { required: true })}
                                />
                                <label className="form-check-label tikBox" htmlFor="flexCheckDefault">
                                    I accept the privacy & policy
                                </label>
                                {errors.acceptTerms && <span className="text-danger">You must accept the privacy & policy</span>}
                            </div>

                            {/* <div className="mt-3">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                onChange={handleRecaptchaChange}
                            />
                        </div> */}
                            <div className="row mt-4 btnContainer">
                                <div className="col-md-6 mb-2">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="reset" className="btn btn-danger" onClick={() => reset()}>Clear</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 countryData">
                        <h1 className='countryName address3'>New Zealand</h1>
                        <h3>New Zealand Office</h3>
                        <p className='txt1'><i className="fas fa-map-marker-alt img3"></i>
                            CONNEX INFORMATION TECHNOLOGIES LIMITED,<br />
                            <span className='address'>Plimmer Towers ,</span><br />
                            <span className='address'>2-6 Glimmer Terrace,</span><br />
                            <span className='address'>Wellington, 6011</span>
                        </p>
                        <button
                            className="neon-button"
                            onClick={() => window.open('https://www.google.com/maps/place/1A+Woodridge+Drive,+Woodridge,+Wellington+6037,+New+Zealand/@-41.2127875,174.7318273,11.31z/data=!4m6!3m5!1s0x6d38ac41501d2c7d:0x3e1f28fa89cf5067!8m2!3d-41.220933!4d174.8313183!16s%2Fg%2F11grtb_9fh?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D')}
                        >
                            Get Directions
                        </button>
                        <hr className='line'></hr><hr className='line'></hr>
                    </div>
                    <div className="col-md-6">
                        <img src={mapnz} className='mapnz' />

                    </div>
                </div>
            </div>
            <NZFooter />
        </>
    );
}

export default Contact;
