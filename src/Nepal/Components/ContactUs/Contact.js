import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Contact.css';
import mapbru from '../../../images/map/brunei.png';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2'
import NPLNavbar from '../Navbar/Navbar';
import NPLChat from '../Navbar/Navbar';
import NPLFooter from '../Footer/Footer';
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
                headers: { cnt: 6 }
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
    const { NPLcont1, NPLcont2, NPLcont3, NPLcont4, NPLcont5, NPLcont6, NPLcont7,
        NPLcont8, NPLcont9, NPLcont10, NPLcont11, NPLcont12, NPLcont13, NPLcont14, NPLcont15, NPLcont16,
        NPLcont17, NPLcont18, NPLcont19, NPLcont20, NPLcont21, NPLcont22, NPLcont23, NPLcont24, NPLcont25,
        NPLcont26, NPLcont27, NPLcont28, NPLcont29, NPLcont30
    } = t('NPLcontsec', { returnObjects: true });

    return (
        <>
            {/* <NPLNavbar/> */}
            <NPLChat />

            <div className="container">
                <div className='row'>
                    <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <div className="col-md-4"><hr /></div>
                        <div className="col-md-4"><p id='Text'>{NPLcont1}</p></div>
                        <div className="col-md-4"><hr /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <h1 className='h1'>{NPLcont2}<br /> {NPLcont3}</h1>
                        <h2 className='h2'>{NPLcont4}<br /> {NPLcont5} <br />{NPLcont6} <br /> {NPLcont7}</h2>
                    </div>
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating col-md-mb-2">
                                <div className="row mt-4 mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            placeholder={NPLcont8}
                                            aria-label={NPLcont8}
                                            {...register('firstName', { required: true })}
                                        />
                                        {errors.firstName && <span className="text-danger">{NPLcont9}</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            placeholder={NPLcont10}
                                            aria-label={NPLcont10}
                                            {...register('lastName', { required: true })}
                                        />
                                        {errors.lastName && <span className="text-danger">{NPLcont11}</span>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.Company ? 'is-invalid' : ''}`}
                                            placeholder={NPLcont12}
                                            aria-label={NPLcont12}
                                            {...register('Company', { required: true })}
                                        />
                                        {errors.Company && <span className="text-danger">{NPLcont13}</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                            placeholder={NPLcont14}
                                            aria-label={NPLcont14}
                                            {...register('contactNumber', {
                                                required: true,
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: NPLcont15,
                                                },
                                                validate: {
                                                    length: (value) => value.length === 10 || NPLcont15,
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
                                    placeholder={NPLcont16}
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                            message: NPLcont17,
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-danger">{errors.email.message || 'Email is required'}</span>}
                            </div>

                            <div className="col-md">
                                <textarea
                                    className={`form-control txtarea ${errors.comments ? 'is-invalid' : ''}`}
                                    placeholder={NPLcont30}
                                    id="floatingTextarea2"
                                    {...register('comments', { required: true })}
                                ></textarea>
                                {errors.comments && <span className="text-danger">{NPLcont18}</span>}
                            </div>

                            <div className="form-check formcheck">
                                <input
                                    className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    {...register('acceptTerms', { required: true })}
                                />
                                <label className="form-check-label tikBox" htmlFor="flexCheckDefault">
                                    {NPLcont19}
                                </label>
                                {errors.acceptTerms && <span className="text-danger">{NPLcont20}</span>}
                            </div>

                            <div className="row mt-4 btnContainer">
                                <div className="col-md-6 mb-2">
                                    <button type="submit" className="btn btn-success">{NPLcont21}</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="reset" className="btn btn-danger" onClick={() => reset()}>{NPLcont22}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 countryData">
                        <h1 className='countryName address3'>{NPLcont23}</h1>
                        <h3>{NPLcont24}</h3>
                        <p className='txt1'><i className="fas fa-map-marker-alt img3"></i>
                            {NPLcont25}<br />
                            <span className='address'>{NPLcont26}</span><br />
                            <span className='address'>{NPLcont27}</span><br />
                            <span className='address'>{NPLcont28}</span>
                        </p>
                        <button
                            className="neon-button"
                            onClick={() => window.open('https://www.google.com/maps/search/No.B22,B23+%26+B24,+Block+B+Bangunan+Habza,+Spg+150,+Kg+kiulap+Gadong+B,+Brunei+Muara,+BE1518+Brunei+Darussalam/@4.89983,114.8974833,13.46z?entry=ttu')}
                        >
                            {NPLcont29}
                        </button>
                        <hr className='line'></hr><hr className='line'></hr>
                    </div>
                    <div className="col-md-6">
                        <img src={mapbru} className='mapBru' />
                    </div>
                </div>
            </div>

            <NPLFooter />
        </>
    );
}

export default Contact;
