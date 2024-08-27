import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import image1 from '../../images/1.png';
import image1 from '../../../images/images/1.png';
import image2 from '../../../images/images/2.png';
import image3 from '../../../images/images/3.png';
import image4 from '../../../images/images/4.png';
import CamNavbar from '../Navbar/Navbar';
import CamChat from '../ChatBot/Chat';
import CamFooter from '../Footer/Footer';

import seagatevideo from '../../../images/images/seagate_vid2.gif';
// import videobg from '../../../images/video bg img.jpg';
import './SeagateSinglePage.css';

function SeagateSinglePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
    <CamChat/>
    <CamNavbar/>
    <div className='main-section'>
      {/* Header Section */}
      <div className="text-center py-4">
        <h1 className='mainheading'>Seagate</h1>
      </div>

      {/* Discover Section */}
      <Container className="text-center mt-5">
        <h2 className='secondheading'>Discover Seagate Products</h2>
        <p className='para'>
          At Seagate, we understand that data is the backbone of your digital world. From personal use to enterprise
          solutions, our cutting-edge products are designed to store, manage, and protect your valuable information with
          unmatched reliability and performance.
        </p>
      </Container>

      {/* Product of the Week & Featured Products */}
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Carousel
              responsive={responsive}
              ssr
              infinite
              autoPlaySpeed={3000}
              keyBoardControl
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <Card className="text-center text-white cardStyle">
                <div className='imageContainerStyle'>
                  <Card.Img variant="top" src={image1} className='cardimg'/>
                </div>
                <Card.Body className='cardBodyStyle'>
                  <Card.Title className='cardtitile'>One Touch Hub</Card.Title>
                  <Card.Text className='cardtext'>Up to 20 TB</Card.Text>
                  <Button variant="outline-light" className='btnStyle' href="https://www.seagate.com/in/en/" target="_blank" rel="noopener noreferrer">LEARN MORE</Button>
                </Card.Body>
              </Card>
              <Card className="text-center text-white cardStyle">
                <div className='imageContainerStyle'>
                  <Card.Img variant="top" src={image2} className='cardimg'/>
                </div>
                <Card.Body className='cardBodyStyle'>
                  <Card.Title className='cardtitile'>BarraCuda 3.5”</Card.Title>
                  <Card.Text className='cardtext'>Hard Drive 8 TB</Card.Text>
                  <Button variant="outline-light" className='btnStyle' href="https://www.seagate.com/in/en/" target="_blank" rel="noopener noreferrer">LEARN MORE</Button>
                </Card.Body>
              </Card>
              <Card className="text-center text-white cardStyle">
                <div className='imageContainerStyle'>
                  <Card.Img variant="top" src={image3} className='cardimg'/>
                </div>
                <Card.Body className='cardBodyStyle'>
                  <Card.Title className='cardtitile'>SkyHawk</Card.Title>
                  <Card.Text className='cardtext'>Up to 8 TB</Card.Text>
                  <Button variant="outline-light" className='btnStyle' href="https://www.seagate.com/in/en/" target="_blank" rel="noopener noreferrer">LEARN MORE</Button>
                </Card.Body>
              </Card>
              <Card className="text-center text-white cardStyle">
                <div className='imageContainerStyle'>
                  <Card.Img variant="top" src={image4} className='cardimg'/>
                </div>
                <Card.Body className='cardBodyStyle'>
                  <Card.Title className='cardtitile'>Firecuda Okoye</Card.Title>
                  <Card.Text className='cardtext'>Up to 20 TB</Card.Text>
                  <Button variant="outline-light" className='btnStyle' href="https://www.seagate.com/in/en/" target="_blank" rel="noopener noreferrer">LEARN MORE</Button>
                </Card.Body>
              </Card>
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Video Section */}
      <Container className="text-center mt-5">
        <Row>
          <Col md={12}>
            <div className="video-container">
            <img src={seagatevideo} className="video-player"/>
             
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <CamFooter/>
    </>
  );
}

export default SeagateSinglePage;
