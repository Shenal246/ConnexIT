import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authentication.css';
import axios from "axios";
import connections from '../../../../config';
import NZNavbar from "../../../Navbar/Navbar";
import NZChat from "../../../ChatBot/Chat";
import NZFooter from "../../../Footer/Footer";
// import { useNavigate } from 'react-router-dom';
function Authentication() {
    const [vendors, setVendors] = useState([]);
    const navigate = useNavigate();
    const serverlink = connections.pillor3;

    useEffect(() => {
        axios.get(serverlink, {headers:{cnt:7}}).then((response) => {
            setVendors(response.data);
            console.log(vendors);
        }).catch((err) => {
            console.log(err);
        });

        console.log(vendors);

    }, []);

    const handleCardClick = (vend) => {
        navigate(`/NZ/Solutions/Authentication/${vend.name}`, { state: { vend } });
    };

    return (
        <>
            <NZNavbar />
            <NZChat />
            <section className='heroSolution'>
                <div className="container">
                    <div className='row'>
                        <div className="row text headingrow">
                            <div className="col-3" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                            <div className="col-6" data-aos="fade-up" data-aos-delay="100"><p id='topic'>Authentication & Identity Management</p></div>
                            <div className="col-3" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 rowmargin">
                        {vendors && vendors.map((vend, index) => (
                            <div className="col" key={index}>
                                <div className="card h-100" onClick={() => handleCardClick(vend)}>
                                    {vend.image_data ? (
                                        <img
                                            src={`data:image/jpeg;base64,${vend.image_data}`}
                                            alt={vend.name}
                                            className="card-img-top"
                                        />
                                    ) : (
                                        <p>No Image Available</p>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title vendorTitel">{vend.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <NZFooter />
        </>
    );
}

export default Authentication;
