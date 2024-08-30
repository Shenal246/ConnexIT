import './Latest.css';
import Button from 'react-bootstrap/Button';
import { BsArrowRight } from 'react-icons/bs';
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import connections from '../../../../config';
import { useTranslation } from 'react-i18next';

const Latest = () => {
    const videoRef = useRef(null);
    const [NewsData, setNewsData] = useState(null);
    const [NewsData2, setNewsData2] = useState(null);
    const [latestThree, setLatestThree] = useState(null);
    const [latestFour, setLatestFour] = useState(null);
    const [currentVideoLink, setCurrentVideoLink] = useState(null);

    const serverlink = connections.allNewsByType;

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setCurrentVideoLink(null);
    };

    const handleCardClick = (link) => {
        setCurrentVideoLink(link);
    };

    useEffect(() => {
        const fetchNews = async () => {
          try {
            // Make the API request with axios
            const response = await axios.get(serverlink, {
              headers: {
                cnt: 6,  // Your cnt value
                type: 2, // Your type value
              },
            });
            
            // Store the response data in the state
            setNewsData(response.data[0]);
            setNewsData2(response.data[1]);
            console.log(NewsData)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchNews();
      }, []);


      
  const { t } = useTranslation();

  const { Brnlattopic } = t('Brnlatestsec', { returnObjects: true });


    return (
        <section >
            <div className='container latest'>
                <div className="row gy-3 headingRow" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <div className="col-4"><hr /></div>
                    <div className="col-4"><p id='whoweareText'>{Brnlattopic}</p></div>
                    <div className="col-4"><hr /></div>
                </div>

                <div className="row backgrnd" >
                    <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        {/* first image of the first column */}
                        <div className="mb-2">

                            {/* Card1 */}
                            <div className="cardContainer1 card" data-bs-toggle="modal" data-bs-target="#videoModal1" onClick={() => handleCardClick(NewsData.link)}>
                                {NewsData && NewsData.image_data ? (
                                    <>
                                        <img
                                            src={`data:image/jpeg;base64,${NewsData && NewsData.image_data}`}
                                            alt={NewsData.title}
                                            className='image1'

                                        />
                                    </>
                                ) : (
                                    <p>No Image Available</p>
                                )}

                                <div className="card-body cardBody">

                                    <div className="row">
                                        <h5 className="card-title">{NewsData && NewsData.title}</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* First image of the Second column */}

                    <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">

                        <div className="mb-2">

                            {/* Card1 */}
                            <div className="cardContainer1 card" data-bs-toggle="modal" data-bs-target="#videoModal1" onClick={() => handleCardClick(NewsData2.link)}>
                                {NewsData2 && NewsData2.image_data ? (
                                    <>
                                        <img
                                            src={`data:image/jpeg;base64,${NewsData2 && NewsData2.image_data}`}
                                            alt={NewsData2.title}
                                            className='image1'

                                        />
                                    </>
                                ) : (
                                    <p>No Image Available</p>
                                )}

                                <div className="card-body cardBody">

                                    <div className="row">
                                        <h5 className="card-title">{NewsData2 && NewsData2.title}</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/* See more button */}
                    <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        <div className="navigation">
                            <NavLink to="/Brn/Events&News"><Button variant="" className='iconsss' style={{ backgroundColor: '#01066B' }}>
                                <BsArrowRight size={30} />
                            </Button></NavLink>
                        </div>
                    </div>

                    {/* Modal */}
                    <div className="modal fade" id="videoModal1" tabIndex="-1" aria-labelledby="videoModal1Label" aria-hidden="true" onClick={handleCloseModal}>
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
            </div> 
        </section>
    );
}

export default Latest;
