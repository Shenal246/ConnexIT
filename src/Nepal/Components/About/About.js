import React from 'react';
import headlogo from '../../../images/ThaiGroup/ThailandGroup.jpg'
import arrowleft from '../../../images/icons8-triangle-64.png'
import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'animate.css';
import card1 from '../../../images/map/map trans.png';
import { useTranslation } from 'react-i18next';
import NPLNavbar from '../Navbar/Navbar';
import NPLChat from '../ChatBot/Chat';
import NPLFooter from '../Footer/Footer';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >

        </div>
    );
}

const About = () => {

    const { t } = useTranslation();

    const { NPLourSTopic, NPLourSText, NPLourVTopic, NPLourVText, NPLourMTopic, NPLourMText, NPLsureshName, NPLsureshText, NPLshamalName, NPLshamalText, NPLdilshanName, NPLdilshanText, NPLrohanName, NPLrohanText, NPLrajivName,
        NPLrajivText, NPLpatricName, NPLpatricText, NPLerangaName, NPLerangaText, NPLjananiName, NPLjananiText, NPLromeshName, NPLromeshText, NPLKiththiName, NPLKiththiText
    } = t('NPLourstory', { returnObjects: true });


    const data = [
        {
            name: NPLsureshName,
            img: '/quots/Suresh.jpg',
            quote: NPLsureshText,
            post: 'Founder / CEO',
        },
        {
            name: NPLshamalName,
            img: '/quots/Shamal.jpg',
            quote: NPLshamalText,
            post: 'CMO',
        },
        {
            name: NPLdilshanName,
            img: '/quots/Dilshan_Silva.jpg',
            quote: NPLdilshanText,
            post: 'COO',
        },
        {
            name: NPLrohanName,
            img: '/quots/Rohan.jpg',
            quote: NPLrohanText,
            post: 'CTO',
        },
        {
            name: NPLrajivName,
            img: '/quots/Rajiv.jpg',
            quote: NPLrajivText,
            post: 'Director',
        },
        {
            name: NPLpatricName,
            img: '/quots/Patrick_yogarathnam.jpg',
            quote: NPLpatricText,
            post: 'CIRO',
        },
        {
            name: NPLerangaName,
            img: '/quots/Eranga.jpg',
            quote: NPLerangaText,
            post: 'CRO',
        },
        {
            name: NPLjananiName,
            img: '/quots/Janani_Siriardhane.jpg',
            quote: NPLjananiText,
            post: 'Director',
        },
        {
            name: NPLromeshName,
            img: '/quots/romesh.jpg',
            quote: NPLromeshText,
            post: 'Director',
        },
        {
            name: NPLKiththiName,
            img: '/quots/Kiththi.jpg',
            quote: NPLKiththiText,
            post: 'Director of Connex Thailand',
        }

    ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <NPLNavbar />
            <NPLChat />
            <section id='t1'>
                <div class="container classss">
                    <div className='center' data-aos="fade-up" data-aos-delay="200">
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={headlogo} className='headimg'></img>
                            </div>

                            <div className='col-md-6 para'>
                                <div className='story'>
                                    <h1 className='topic'>{NPLourSTopic}</h1>
                                    <p><br />{NPLourSText}</p>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-6 content'>
                                <div className='story bdround bdround1'>
                                    <h1 className='topic'>{NPLourVTopic}</h1>
                                    <p><br />{NPLourVText}</p>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='story bdround bdround2'>
                                    <h1 className='topic'>{NPLourMTopic}</h1>
                                    <p><br />{NPLourMText}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section id='t2'>
                <div className='slider'>
                    <Slider {...settings}>

                        {data.map((d) => (<>

                            <div className='sl bdound'>
                                <div class="row">
                                    <div class="col-sm ">
                                        <img src={d.img}></img>
                                    </div>
                                    <div class="col-sm ">
                                        <h3>{d.quote}</h3>
                                        <div>
                                            <h4>{d.name}</h4>
                                            <p>{d.post}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>

                        ))}

                    </Slider>


                </div>





            </section>

            {/* <div className='row imageMap'>
                    <div className='col-4'>

                    </div>
                    <div className='col-4'>
                    <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo"  />
                    </div>
                    <div className='col-'>
                        
                    </div>
                    

                </div> */}

            <div className='row imageMap'>
                <div className="row gy-3 text">
                    <div className="col-2" ></div>
                    <div className="col-8" > <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo" /></div>
                    <div className="col-2" ></div>
                </div>
            </div>
            <NPLFooter />
        </>);


}

export default About;