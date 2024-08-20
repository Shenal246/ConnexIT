import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Contact.css';
import mapbru from '../../../images/map/brunei.png';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2'
import BrnNavbar from '../Navbar/Navbar';
import BrnChat from '../Navbar/Navbar';
import BrnFooter from '../Footer/Footer';
import connections from '../../../config';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const formRef = useRef();

    const serverlink = connections.serverLinkInsert;

    const onSubmit = async (data) => {
        // if (!isHuman) {
        //     alert('Please verify that you are a human!');
        //     return;
        // }

        const values = [data.firstName, data.lastName, data.Company, data.contactNumber, data.email, data.comments];

        const value33 = {
            query: "INSERT INTO contactus(firstname, lastname, company, tpno,email,comment,countryid,statusid) VALUES (?,?,?,?,?,?,?,?)",
            value1: values[0],
            value2: values[1],
            value3: values[2],
            value4: values[3],
            value5: values[4],
            value6: values[5],
            value7: 6,
            value8: 1,
            key: "FKoaDwCi7C"
        };

        console.log(value33);

        try {
            const response = await axios.post(serverlink, value33);
            if (response.status === 200) {
                Swal.fire({
                    // position: "top-end",
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
    const { Brncont1, Brncont2, Brncont3, Brncont4, Brncont5, Brncont6, Brncont7,
        Brncont8, Brncont9, Brncont10, Brncont11, Brncont12, Brncont13, Brncont14, Brncont15, Brncont16,
        Brncont17, Brncont18, Brncont19, Brncont20, Brncont21, Brncont22, Brncont23, Brncont24, Brncont25,
        Brncont26, Brncont27, Brncont28, Brncont29, Brncont30
    } = t('Brncontsec', { returnObjects: true });

    return (
        <>
            {/* <BrnNavbar/> */}
            <BrnChat />

            <div className="container">
                <div className='row'>
                    <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <div className="col-md-4"><hr /></div>
                        <div className="col-md-4"><p id='Text'>{Brncont1}</p></div>
                        <div className="col-md-4"><hr /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <h1 className='h1'>{Brncont2}<br /> {Brncont3}</h1>
                        <h2 className='h2'>{Brncont4}<br /> {Brncont5} <br />{Brncont6} <br /> {Brncont7}</h2>
                    </div>
                    <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating col-md-mb-2">
                                <div className="row mt-4 mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            placeholder={Brncont8}
                                            aria-label={Brncont8}
                                            {...register('firstName', { required: true })}
                                        />
                                        {errors.firstName && <span className="text-danger">{Brncont9}</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            placeholder={Brncont10}
                                            aria-label={Brncont10}
                                            {...register('lastName', { required: true })}
                                        />
                                        {errors.lastName && <span className="text-danger">{Brncont11}</span>}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md mb-2">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.Company ? 'is-invalid' : ''}`}
                                            placeholder={Brncont12}
                                            aria-label={Brncont12}
                                            {...register('Company', { required: true })}
                                        />
                                        {errors.Company && <span className="text-danger">{Brncont13}</span>}
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                            placeholder={Brncont14}
                                            aria-label={Brncont14}
                                            {...register('contactNumber', {
                                                required: true,
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: Brncont15,
                                                },
                                                validate: {
                                                    length: (value) => value.length === 10 || Brncont15,
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
                                    placeholder={Brncont16}
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                            message: Brncont17,
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-danger">{errors.email.message || 'Email is required'}</span>}
                            </div>

                            <div className="col-md">
                                <textarea
                                    className={`form-control txtarea ${errors.comments ? 'is-invalid' : ''}`}
                                    placeholder={Brncont30}
                                    id="floatingTextarea2"
                                    {...register('comments', { required: true })}
                                ></textarea>
                                {errors.comments && <span className="text-danger">{Brncont18}</span>}
                            </div>

                            <div className="form-check formcheck">
                                <input
                                    className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    {...register('acceptTerms', { required: true })}
                                />
                                <label className="form-check-label tikBox" htmlFor="flexCheckDefault">
                                    {Brncont19}
                                </label>
                                {errors.acceptTerms && <span className="text-danger">{Brncont20}</span>}
                            </div>

                            <div className="row mt-4 btnContainer">
                                <div className="col-md-6 mb-2">
                                    <button type="submit" className="btn btn-success">{Brncont21}</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="reset" className="btn btn-danger" onClick={() => reset()}>{Brncont22}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 countryData">
                        <h1 className='countryName address3'>{Brncont23}</h1>
                        <h3>{Brncont24}</h3>
                        <p className='txt1'><i className="fas fa-map-marker-alt img3"></i>
                            {Brncont25}<br />
                            <span className='address'>{Brncont26}</span><br />
                            <span className='address'>{Brncont27}</span><br />
                            <span className='address'>{Brncont28}</span>
                        </p>
                        <button
                            className="neon-button"
                            onClick={() => window.open('https://www.google.com/maps/search/No.B22,B23+%26+B24,+Block+B+Bangunan+Habza,+Spg+150,+Kg+kiulap+Gadong+B,+Brunei+Muara,+BE1518+Brunei+Darussalam/@4.89983,114.8974833,13.46z?entry=ttu')}
                        >
                            {Brncont29}
                        </button>
                        <hr className='line'></hr><hr className='line'></hr>
                    </div>
                    <div className="col-md-6">
                        <img src={mapbru} className='mapBru' />
                    </div>
                </div>
            </div>

            <BrnFooter />
        </>
    );
}

export default Contact;
