import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import axios from "axios";
import connections from '../../../config';
import { useTranslation } from 'react-i18next';
import BrnNavbar from '../Navbar/Navbar';
import BrnChat from '../ChatBot/Chat';
import BrnFooter from '../Footer/Footer';

const Events = () => {
    const videoRef = useRef(null);
    const [newsData, setNewsData] = useState([]);
    const [othernewsData, setOtherNewsData] = useState([]);
    const [currentVideoLink, setCurrentVideoLink] = useState(null);

    const serverlink = connections.allNews;

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setCurrentVideoLink(null);
    };

    const handleCardClick = (nlink) => {
        setCurrentVideoLink(nlink);
    };

    useEffect(() => {
        // const values = {
        //     query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE type=2 AND status=1 AND cnt=1;",
        //     key: "Cr6re8VRBm"
        // };

        // axios.post(serverlink, values).then((response) => {
        //     setNewsData(response.data);
        // }).catch((err) => {
        //     console.log(err);
        // });


        axios.get(serverlink, {
            headers: { 
                cnt: 6
            }
        })
        .then((response) => {
            setOtherNewsData(response.data);
            console.log(othernewsData);
        })
        .catch((err) => {
            console.log(err);
        });
        
    }, []);

    const { t } = useTranslation();
    const { Brnevnt1, Brnevnt2, Brnevnt3, Brnevnt4, Brnevnt5
        } = t('Brneventsec', { returnObjects: true });


    return (
        <>
        <BrnNavbar/>
        <BrnChat/>
        <div className="container">
            <div className='row'>
                <div className="row text">
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='EventsText'>{Brnevnt1}</p></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                </div>
            </div>

            

            {/* Other News */}
            <div className='row'>
                <div className='subTopin'>{Brnevnt5}</div>
            </div>

            <div className="row cards">
                {othernewsData.map((news, index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="card mb-3 card1 text-light position-relative crd rounded-5" data-bs-toggle="modal" data-bs-target="#videoModal" onClick={() => handleCardClick(news.link)}>
                            <div className="position-relative">
                                {news.image_data ? (
                                    <>
                                        <img
                                            src={`data:image/jpeg;base64,${news.image_data}`}
                                            alt={news.title}
                                            className="card-img-top image rounded-top-5 opacity-75" style={{ width: '100%', height: 'auto' }}

                                        />
                                    </>
                                ) : (
                                    <p>{Brnevnt3}</p>
                                )}
                                <div className="centered">
                                    <Link to="#" className="fa-solid fa-play playicon"></Link>
                                </div>
                            </div>
                            <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                                <div className="row">
                                    <h5 className="card-title small-title">{news.title}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true" onClick={handleCloseModal}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content modalClr">
                        <div className="modal-header">
                            <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {currentVideoLink && (
                                <div className="video-container">
                                    <iframe
                                        className='iframenews'
                                        src={currentVideoLink}
                                        title="Video Player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BrnFooter/>
        </>
    );
}

export default Events;
