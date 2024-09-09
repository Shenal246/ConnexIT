// import React from 'react';
import './Portal.css';
import SLFooter from "../Footer/Footer";
import React from "react";
import SLNavbar from "../Navbar/Navbar";
import SLChat from "../ChatBot/Chat";

const Portal = () => {
    return (
        <>
            <SLNavbar />
            <SLChat />
            <div className='container'>
                <div className='row'>
                    <div className='content-box'>
                        <h2>Connex Partner Portal: Your Gateway to Innovation</h2>
                        <p className='contentOne'>Welcome to the Connex Partner Portal—a powerful hub designed to help your business thrive in today’s digital-first world. Our platform connects you with the tools, insights, and opportunities you need to outpace your competition and drive meaningful growth. <br /><br />

                            Whether you’re looking to scale new solutions, collaborate with industry leaders, or gain strategic insights, your path to success begins here.</p>

                        <div className="button-row">
                            <button className="cta-button join-button">Join  Now</button>
                            <button className="cta-button sign-in-button">Sign In</button>
                        </div>
                        <br />
                        <hr />

                        <h2>Why Connex</h2>
                        <p className='contentOne'>Empower your business by joining a community of forward-thinking partners. Connex provides everything you need to succeed—from exclusive resources to personalized support—allowing you to transform operations, drive innovation, and grow faster.</p>

                        <div className="button-row">
                            <button className="cta-button explore-button">Explore Connex Resources</button>
                        </div>
                        <br />
                        <hr />

                        <h2>How to Get Started</h2>
                        <p className='contentTwo'>
                        <b>1. Create an Account: </b>Register your business and start accessing the Connex ecosystem. <br />
                        <b>2. Confirm Your Details:</b> Verify your organization’s information for a smooth onboarding process. <br />
                        <b>3. Validate Your Credentials:</b> Complete the membership validation and unlock full access to all Connex benefits. <br />
                        </p>

                        <div className="button-row">
                            <button className="cta-button start-button">Get Started</button>
                        </div>
                        <br />
                        <hr />

                        <h2>Partner Benifits and Incentives</h2>
                        <p className='contentThree'>
                            <div className='row'>


                            <div className='col-1'></div>
                            <div className='col-10'>
                            <b>Marketing Support:</b> Access tailored go-to-market tools, marketing consultations, and ready-made content to boost your outreach. <br /><br />
                            <b>Expert Support:</b> Enjoy personalized guidance to help grow and scale your business. <br /><br />
                            <b>Training & Certifications:</b> Equip your teams with top-notch training and certifications to stay competitive. <br /><br />
                            <b>Exclusive Incentives:</b> Unlock special rewards and incentives designed to help Connex partners achieve more.
                            </div>
                            <div className='col-1'></div>
                            </div>
                           
                           
                        </p>

                        <div className="button-row">
                            <button className="cta-button start-button">Explore Now</button>
                        </div>
                        <br />
                        <hr />


                        <h2>Become a Connex Partner Today</h2>
                        <p className='contentThree'>
                            <div className='row'>


                            <div className='col-1'></div>
                            <div className='col-10'>
                          Join the Connex Partner Program and unlock a world of opportunities to drive your business forward. Whether you're just starting out or looking to expand your capabilities, Connex is here to help you succeed.</div>
                            <div className='col-1'></div>
                            </div>
                           
                           
                        </p>

                        <div className="button-row">
                            <button className="cta-button start-button">Become A Partner</button>
                            <button className="cta-button start-button">Partner Login</button>
                        </div>
                   





                    </div>

                </div>









            </div>
            <SLFooter />
        </>
    );
};

export default Portal;
