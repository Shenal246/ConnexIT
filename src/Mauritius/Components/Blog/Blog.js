import React, { useState, useEffect } from 'react';
import './Blog.css'; // Import your CSS file
import { Modal, Button } from 'react-bootstrap'; // Import other Bootstrap components
import { useTranslation } from 'react-i18next';
import CamNavbar from '../Navbar/Navbar';
import CamChat from '../ChatBot/Chat';
import CamFooter from '../Footer/Footer';
import connections from '../../../config';
import axios from "axios";

const Blog = () => {
    const [lgShow, setLgShow] = useState(false);
    const [camBlog, setcamBlog] = useState([]);
    const [currentBlog, setcurrentBlog] = useState(null);
    const { t } = useTranslation();
    const { blg1
    } = t('blogsec', { returnObjects: true });

    const serverlinkCamBlog = connections.camBlog;

    useEffect(() => {

        axios.post(serverlinkCamBlog).then((response) => {
            setcamBlog(response.data);
            // console.log(response.data[0]);;
        }).catch((err) => {
            console.log(err);
        });

        console.log(camBlog);

    }, []);

    return (

        <>
            <CamNavbar />
            <CamChat />
            <section>
                <div className="container">
                    <div className='row '>
                        <div className="row text headingrow">
                            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>{blg1}</p></div>
                            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className="col">
                            {camBlog && camBlog.map((camblg, ind) => (
                                <div className="card mb-3 cards2">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={`data:image/jpeg;base64,${camblg.image_data}`} className="img-fluid rounded-start blogimg" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h3 className="card-title">{camblg.title}</h3>
                                                <br />
                                                <h5 className="card-text">{camblg.firstText}</h5>
                                                <button className="btn btn-info read-more" onClick={() => { setLgShow(true); setcurrentBlog(camblg) }}>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>

                {/* Modal for detailed blog content */}
                <Modal
                    size="xl"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    className='modal'
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            {currentBlog && currentBlog.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body> {currentBlog && currentBlog.description}</Modal.Body>
                </Modal>
            </section>
            <CamFooter />
        </>
    );
}

export default Blog;
