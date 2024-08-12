// import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
  const { MurifootHeadTopic, MuriheadLine1, MuriheadLine2, MuriheadLine3, MuriheadLine4, MurifootConTopic, MuriconLine1,
    MuriconLine2, MuriconLine3, MuriconLine4, MuriconLine5, MuriresTopic, Murires1, Murires2, Murires3
    } = t('Murifootersec', { returnObjects: true });


    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <h3>{MurifootHeadTopic}</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img" ></i>
                            {MuriheadLine1}<br />
                                <span>{MuriheadLine2}</span><br />
                                <span> {MuriheadLine3}</span> <br />
                                <i className="fas fa-phone-volume callIcon1" ></i>{MuriheadLine4}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-1 address2">
                            <h3>{MurifootConTopic}</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img2" ></i>
                            {MuriconLine1}<br />
                                <span>{MuriconLine2}</span><br />
                                <span> {MuriconLine3}</span> <br />
                                <span>{MuriconLine4}</span><br />
                                <i className="fas fa-phone-volume callIcon2" ></i>{MuriconLine5}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-2 resources">
                            <h3>{MuriresTopic}</h3>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/Events&News">{Murires1}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="#">{Murires2}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">{Murires3}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row rowlast">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <div className="footer-icons img icons">
                                <a className="" href="https://www.facebook.com/profile.php?id=61559049842225" target="_blank"><i className="fab fa-facebook facebook"></i></a>
                                {/* <a className="" href="/"><i className="fa-brands fa-x-twitter twitter" target="_blank"></i></a> */}
                                {/* <a className="" href="https://www.instagram.com/connexinformationtechnologies?igsh=MjYxNnpkN3FqNTd0" target="_blank"><i className="fab fa-instagram instagram"></i></a> */}
                                <a className="" href="https://www.linkedin.com/showcase/connex-mauritius1/" target="_blank"><i className="fab fa-linkedin-in linkedIn"></i></a>
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
