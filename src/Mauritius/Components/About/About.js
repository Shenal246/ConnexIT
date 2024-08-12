import React from 'react';
import headlogo from '../../../images/about-page-img2.png'
import arrowleft from '../../../images/icons8-triangle-64.png'
import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'animate.css';
import card1 from '../../../images/map/map trans.png';
import { useTranslation } from 'react-i18next';
import MUNavbar from '../Navbar/Navbar';
import MUChat from '../ChatBot/Chat';
import MUFooter from '../Footer/Footer';

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

    const { MuriourSTopic, MuriourSText, MuriourVTopic, MuriourVText, MuriourMTopic, MuriourMText, MurisureshName, MurisureshText, MurishamalName, MurishamalText, MuridilshanName, MuridilshanText, MurirohanName, MurirohanText, MurirajivName,
        MurirajivText, MuripatricName, MuripatricText, MurierangaName, MurierangaText, MurijananiName, MurijananiText, MuriromeshName, MuriromeshText
    } = t('Muriourstory', { returnObjects: true });


    const data = [
        {
            name: MurisureshName,
            img: '/quots/Suresh.jpg',
            quote: MurisureshText,
            post: 'Founder / CEO',
        },
        {
            name: MurishamalName,
            img: '/quots/Shamal.jpg',
            quote: MurishamalText,
            post: 'CMO',
        },
        {
            name: MuridilshanName,
            img: '/quots/Dilshan_Silva.jpg',
            quote: MuridilshanText,
            post: 'COO',
        },
        {
            name: MurirohanName,
            img: '/quots/Rohan.jpg',
            quote: MurirohanText,
            post: 'CTO',
        },
        {
            name: MurirajivName,
            img: '/quots/Rajiv.jpg',
            quote: MurirajivText,
            post: 'Director of Connex HQ',
        },
        {
            name: MuripatricName,
            img: '/quots/Patrick_yogarathnam.jpg',
            quote: MuripatricText,
            post: 'CIRO',
        },
        {
            name: MurierangaName,
            img: '/quots/Eranga.jpg',
            quote: MurierangaText,
            post: 'CRO',
        },
        {
            name: MurijananiName,
            img: '/quots/Janani_Siriardhane.jpg',
            quote: MurijananiText,
            post: 'Director of Connex HQ',
        },
        {
            name: MuriromeshName,
            img: '/quots/romesh.jpg',
            quote: MuriromeshText,
            post: 'Director of Connex HQ',
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
            <MUNavbar/>
            <MUChat/>
            <section id='t1'>
                <div class="container classss">
                    <div className='center' data-aos="fade-up" data-aos-delay="200">
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={headlogo} className='headimg'></img>
                            </div>

                            <div className='col-md-6 para'>
                                <div className='story'>
                                    <h1 className='topic'>{MuriourSTopic}</h1>
                                    <p><br />{MuriourSText}</p>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-6 content'>
                                <div className='story bdround bdround1'>
                                    <h1 className='topic'>{MuriourVTopic}</h1>
                                    <p><br />{MuriourVText}</p>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='story bdround bdround2'>
                                    <h1 className='topic'>{MuriourMTopic}</h1>
                                    <p><br />{MuriourMText}</p>
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
<MUFooter/>
        </>
        );


}

export default About;