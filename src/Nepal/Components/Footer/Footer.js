// import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
  const { NPLfootHeadTopic, NPLheadLine1, NPLheadLine2, NPLheadLine3,NPLheadLine4, NPLfootConTopic, NPLconLine1,
    NPLconLine2, NPLconLine3, NPLconLine4, NPLconLine5, NPLresTopic, NPLres1, NPLres2, NPLres3
    } = t('NPLfootersec', { returnObjects: true });


    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <h3>{NPLfootHeadTopic}</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img" ></i>
                            {NPLheadLine1}<br />
                                <span>{NPLheadLine2}</span><br />
                                <span> {NPLheadLine3}</span> <br />
                                <i className="fas fa-phone-volume callIcon1" ></i>{NPLheadLine4}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-1 address2">
                            <h3>{NPLfootConTopic}</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img2" ></i>
                            {NPLconLine1}<br />
                                <span>{NPLconLine2}</span><br />
                                <span> {NPLconLine3}</span> <br />
                                <span>{NPLconLine4}</span><br />
                                <i className="fas fa-phone-volume callIcon2" ></i>{NPLconLine5}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-2 resources">
                            <h3>{NPLresTopic}</h3>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/Events&News">{NPLres1}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/FAQs">{NPLres2}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">{NPLres3}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row rowlast">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <div className="footer-icons img icons">
                                <a className="" href="https://www.facebook.com/profile.php?id=61558366792000" target="_blank"><i className="fab fa-facebook facebook"></i></a>
                                <a className="" href="/"><i className="fa-brands fa-x-twitter twitter" target="_blank"></i></a>
                                <a className="" href="https://www.instagram.com/connexinformationtechnologies?igsh=MjYxNnpkN3FqNTd0" target="_blank"><i className="fab fa-instagram instagram"></i></a>
                                <a className="" href="https://www.linkedin.com/showcase/connex-thailand1/" target="_blank"><i className="fab fa-linkedin-in linkedIn"></i></a>
                                <a className="" href="https://www.youtube.com/@connexinformationtechnologies" target="_blank"><i class="fa-brands fa-square-youtube youtube"></i></a>
                            </div>
                        </div>
                        <div className=" col-md-4  ft-1 address2">
                        </div>
                        <div className="col-md-6 col-lg-4  ft-2 ownerRights">
                            <h6>Developed by ConnexIT</h6>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;
