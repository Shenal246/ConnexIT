// Portal.js
import './Portal.css';
import SLFooter from "../Footer/Footer";
import React from "react";
import SLNavbar from "../Navbar/Navbar";
import SLChat from "../ChatBot/Chat";
import sample2 from "../../images/Portal/IMAGE2.png"; // Import the image

const Portal = () => {
    return (
        <>
            <SLNavbar />
            <SLChat />
            <div className='container'>
                <div className='Portalcontainer'>
                    <div className='row'>
                        <div className='portal-content-box'>
                            <div className='col-7 '>
                                <h2>Connex Partner Portal: Your Gateway to Innovation</h2>
                                <p className='contentOne'>
                                    Welcome to the Connex Partner Portal— a powerful hub designed to help your business thrive in today’s digital-first world. Our platform connects you with the tools, insights, and opportunities you need to outpace your competition and drive meaningful growth. <br /><br />
                                    Whether you’re looking to scale new solutions, collaborate with industry leaders, or gain strategic insights, your path to success begins here.
                                </p>
                                <div className="Portal-button-row">
                                    <button className="cta-button join-button">Join  Now</button>
                                    <button className="cta-button sign-in-button">Sign In</button>
                                </div>
                                <br />
                            </div>
                            <div className='col-5'></div>
                        </div>
                    </div>
                </div>

                {/* New Section with the image on the right */}
                <div className='Portalcontainer2'>
                    <div className='row'>
                        {/* Right Column with Image */}
                        <div className='col-lg-6'>
                            <img src={sample2} alt="Opportunities" className="right-image" />
                        </div>

                        <div className='col-lg-6 contentTwo'>
                            <h2>Let's Grow Together — Unlock Your Potential with Connex</h2>
                            <p className='contentOne'>
                                Join a thriving community of forward-thinking partners and supercharge your business with
                                Connex. Empower your customers with cutting-edge solutions, backed by one of the most
                                comprehensive ecosystems designed to drive transformation and growth.<br /><br /> Whether you're
                                scaling new innovations or optimizing operations, the Connex Partner Portal provides
                                everything you need to succeed — from powerful resources to personalized support.
                            </p>
                            <div className="Portal-button-row">
                                <button className="cta-button explore-button">Explore Now</button>

                            </div>
                        </div>


                    </div>
                </div>

                {/* 3rd Section - Get Started */}
                <div className='Portalcontainer3'>
                    <div className='row get-started-portal'>
                        <h2>Get Started</h2>
                        <p>
                            Join the AI Cloud Partner Program to tap into platforms, products, and offerings built for your business.
                            Enroll to become a partner in just three steps.
                        </p>
                    </div>
                    <div className='row'>
                        {/* Step 1 */}
                        <div className='col-lg-4'>
                            <div className='step-box card'>
                                <h3>Create an account</h3>
                                <p>Start by creating your free account and providing some basic information about your
                                business and its goals. Take the first step to access the Connex ecosystem.</p>


                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className='col-lg-4'>
                            <div className='step-box card'>
                                <h3>Confirm your company’s details</h3>
                                <p>Next, you'll be asked to verify your business details, including your organization’s address
                                and legal contacts. </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className='col-lg-4'>
                            <div className='step-box card'>
                                <h3>Validate your credentials</h3>
                                <p>
                                After verification, you'll receive a confirmation email with steps to validate your credentials
                                and finalize your membership in the Connex Partner Program.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="getStarted-button-row">
                            <button className="get-started-button">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <SLFooter />
        </>
    );
};

export default Portal;
