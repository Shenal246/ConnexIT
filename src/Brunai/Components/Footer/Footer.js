// import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
  const { BrnfootHeadTopic, BrnheadLine1, BrnheadLine2, BrnheadLine3,BrnheadLine4, BrnfootConTopic, BrnconLine1,
    BrnconLine2, BrnconLine3, BrnconLine4, BrnconLine5, BrnresTopic, Brnres1, Brnres2, Brnres3
    } = t('Brnfootersec', { returnObjects: true });


    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <h3>{BrnfootHeadTopic}</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img" ></i>
                            {BrnheadLine1}<br />
                                <span>{BrnheadLine2}</span><br />
                                <span> {BrnheadLine3}</span> <br />
                                <i className="fas fa-phone-volume callIcon1" ></i>{BrnheadLine4}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-1 address2">
                            <h3>{BrnfootConTopic}</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img2" ></i>
                            {BrnconLine1}<br />
                                <span>{BrnconLine2}</span><br />
                                <span> {BrnconLine3}</span> <br />
                                <span>{BrnconLine4}</span><br />
                                <i className="fas fa-phone-volume callIcon2" ></i>{BrnconLine5}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-2 resources">
                            <h3>{BrnresTopic}</h3>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/Events&News">{Brnres1}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/FAQs">{Brnres2}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">{Brnres3}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row rowlast">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <div className="footer-icons img icons">
                                <a className="" href="https://www.facebook.com/profile.php?id=61558366792000" target="_blank"><i className="fab fa-facebook facebook"></i></a>
                                {/* <a className="" href="/"><i className="fa-brands fa-x-twitter twitter" target="_blank"></i></a> */}
                                {/* <a className="" href="https://www.instagram.com/connexinformationtechnologies?igsh=MjYxNnpkN3FqNTd0" target="_blank"><i className="fab fa-instagram instagram"></i></a> */}
                                <a className="" href="https://www.linkedin.com/showcase/connex-thailand1/" target="_blank"><i className="fab fa-linkedin-in linkedIn"></i></a>
                                {/* <a className="" href="https://www.youtube.com/@connexinformationtechnologies" target="_blank"><i class="fa-brands fa-square-youtube youtube"></i></a> */}
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
