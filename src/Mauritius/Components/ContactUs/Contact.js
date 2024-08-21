import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Contact.css';
import MuriMap from '../../../images/map/mauritius.png';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import MUNavbar from '../Navbar/Navbar';
import MUChat from '../ChatBot/Chat';
import MUFooter from '../Footer/Footer';
import connections from '../../../config';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const formRef = useRef();

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
                headers: { cnt: 5 }
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


    const { t } = useTranslation();
    const { Muricont1, Muricont2, Muricont3, Muricont4, Muricont5, Muricont6, Muricont7,
        Muricont8, Muricont9, Muricont10, Muricont11, Muricont12, Muricont13, Muricont14, Muricont15, Muricont16,
        Muricont17, Muricont18, Muricont19, Muricont20, Muricont21, Muricont22, Muricont23, Muricont24, Muricont25,
        Muricont26, Muricont27, Muricont28, Muricont29, Muricont30
    } = t('Muricontsec', { returnObjects: true });

    return (
        <>
            <MUNavbar />
            <MUChat />
            <div className="container">
                <div className='row'>
                    <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <div className="col-md-4"><hr /></div>
                        <div className="col-md-4"><p id='Text'>{Muricont1}</p></div>
                        <div className="col-md-4"><hr /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <h1 className='h1'>{Muricont2}<br /> {Muricont3}</h1>
                        <h2 className='h2'>{Muricont4}<br /> {Muricont5} <br />{Muricont6} <br /> {Muricont7}</h2>
                    </div>
                    <div className="col-md inputField" data-aos="fade-down" dat a-aos-duration="1000" data-aos-delay="50">
                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating col-md-mb-2">
                                <div className="row mt-4 mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            placeholder={Muricont8}
                                            aria-label={Muricont8}
                                            {...register('firstName', { required: true })}
                                        />
                                        {errors.firstName && <span className="text-danger">{Muricont9}</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            placeholder={Muricont10}
                                            aria-label={Muricont10}
                                            {...register('lastName', { required: true })}
                                        />
                                        {errors.lastName && <span className="text-danger">{Muricont11}</span>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.Company ? 'is-invalid' : ''}`}
                                            placeholder={Muricont12}
                                            aria-label={Muricont12}
                                            {...register('Company', { required: true })}
                                        />
                                        {errors.Company && <span className="text-danger">{Muricont13}</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                            placeholder={Muricont14}
                                            aria-label={Muricont14}
                                            {...register('contactNumber', {
                                                required: true,
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: { Muricont15 },
                                                },
                                                validate: {
                                                    length: (value) => value.length === 10 || { Muricont15 },
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
                                    placeholder={Muricont16}
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                            message: { Muricont17 },
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-danger">{errors.email.message || 'Email is required'}</span>}
                            </div>

                            <div className="col-md">
                                <textarea
                                    className={`form-control txtarea ${errors.comments ? 'is-invalid' : ''}`}
                                    placeholder={Muricont30}
                                    id="floatingTextarea2"
                                    {...register('comments', { required: true })}
                                ></textarea>
                                {errors.comments && <span className="text-danger"> {Muricont18}</span>}
                            </div>

                            <div className="form-check formcheck">
                                <input
                                    className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    {...register('acceptTerms', { required: true })}
                                />
                                <label className="form-check-label tikBox" htmlFor="flexCheckDefault">
                                    {Muricont19}
                                </label>
                                {errors.acceptTerms && <span className="text-danger"> {Muricont20}</span>}
                            </div>

                            <div className="row mt-4 btnContainer">
                                <div className="col-md-6 mb-2">
                                    <button type="submit" className="btn btn-success">{Muricont21}</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="reset" className="btn btn-danger" onClick={() => reset()}>{Muricont22}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 countryData">
                        <h1 className='countryName address3'>{Muricont23}</h1>
                        <h3>{Muricont24}</h3>
                        <p className='txt1'><i className="fas fa-map-marker-alt img3"></i>
                            {Muricont25}<br />
                            <span className='address'>{Muricont26}</span><br />
                            <span className='address'>{Muricont27}</span><br />
                            <span className='address'>{Muricont28}</span>
                        </p>
                        <button
                            className="neon-button"
                            onClick={() => window.open('https://www.google.com/maps/place/Eb%C3%A8ne+Junction/@-20.2400375,57.4826907,17z/data=!3m1!4b1!4m6!3m5!1s0x217c5adfd66d47b7:0x66c97e6459aed9d4!8m2!3d-20.2400375!4d57.4852656!16s%2Fg%2F11c0qrj_7d?entry=ttu')}
                        >
                            {Muricont29}
                        </button>
                        <hr className='line'></hr><hr className='line'></hr>
                    </div>
                    <div className="col-md-6">
                        <img src={MuriMap} className='MuriMap' />

                    </div>
                </div>
            </div>
            <MUFooter />
        </>
    );
}

export default Contact;
