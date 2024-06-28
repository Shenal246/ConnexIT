import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingNews.css';
import axios from "axios";
import connections from '../../../config';
import SLNavbar from "../../Navbar/Navbar";
import SLChat from "../../ChatBot/Chat";
import SLFooter from "../../Footer/Footer";
import blog from '../../../images/Blogs/event.jpg';


const UpcomingNews = () => {
    // const videoRef = useRef(null); // Create a ref for the video element
    // const [newsData, setNewsData] = useState([]);
    // const [currentVideoLink, setCurrentVideoLink] = useState(null);

    // const serverlink = connections.serverLink;

    // const handleCloseModal = () => {
    //     if (videoRef.current) {
    //         videoRef.current.pause(); // Pause the video
    //     }
    //     setCurrentVideoLink(null);
    // };

    // const handleCardClick = (nlink) => {
    //     setCurrentVideoLink(nlink);
    // };

    // useEffect(() => {
    //     const values = {
    //         query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE type=1 AND status=1 AND cnt=1;",
    //         key: "Cr6re8VRBm"
    //     };

    //     axios.post(serverlink, values).then((response) => {
    //         setNewsData(response.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     });

    // }, []);
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <SLNavbar />
            <SLChat />
            <div className="container">
                <div className='row'>
                    <div className="row text">
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='UpcomingNewsText'>Upcoming <br /> Events & News</p></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>

                <div className='row '>
                    <div className="col">
                        <div className="card mb-3 cards2">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={blog} className="img-fluid rounded-start blogimg" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className='row'>
                                            <h3 className="card-title">Why SMBs Can Finally Breathe Easy: Palo Alto Networks NGFWs Now Within Reach</h3>
                                        </div>
                                        <div className='row'>
                                            <h5 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Content to be continued</h5>
                                        </div>
                                        <div className='row btnroww'>
                                            <button className="btn btn-info read-more" onClick={() => setLgShow(true)}>Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <SLFooter />
        </>
    );
}

export default UpcomingNews;
