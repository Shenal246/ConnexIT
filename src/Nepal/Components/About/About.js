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
import BrnNavbar from '../Navbar/Navbar';
import BrnChat from '../ChatBot/Chat';
import BrnFooter from '../Footer/Footer';

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

    const { BrnourSTopic, BrnourSText, BrnourVTopic, BrnourVText, BrnourMTopic, BrnourMText, BrnsureshName, BrnsureshText, BrnshamalName, BrnshamalText, BrndilshanName, BrndilshanText, BrnrohanName, BrnrohanText, BrnrajivName,
        BrnrajivText, BrnpatricName, BrnpatricText, BrnerangaName, BrnerangaText, BrnjananiName, BrnjananiText, BrnromeshName, BrnromeshText, BrnKiththiName, BrnKiththiText
    } = t('Brnourstory', { returnObjects: true });


    const data = [
        {
            name: BrnsureshName,
            img: '/quots/Suresh.jpg',
            quote: BrnsureshText,
            post: 'Founder / CEO',
        },
        {
            name: BrnshamalName,
            img: '/quots/Shamal.jpg',
            quote: BrnshamalText,
            post: 'CMO',
        },
        {
            name: BrndilshanName,
            img: '/quots/Dilshan_Silva.jpg',
            quote: BrndilshanText,
            post: 'COO',
        },
        {
            name: BrnrohanName,
            img: '/quots/Rohan.jpg',
            quote: BrnrohanText,
            post: 'CTO',
        },
        {
            name: BrnrajivName,
            img: '/quots/Rajiv.jpg',
            quote: BrnrajivText,
            post: 'Director',
        },
        {
            name: BrnpatricName,
            img: '/quots/Patrick_yogarathnam.jpg',
            quote: BrnpatricText,
            post: 'CIRO',
        },
        {
            name: BrnerangaName,
            img: '/quots/Eranga.jpg',
            quote: BrnerangaText,
            post: 'CRO',
        },
        {
            name: BrnjananiName,
            img: '/quots/Janani_Siriardhane.jpg',
            quote: BrnjananiText,
            post: 'Director',
        },
        {
            name: BrnromeshName,
            img: '/quots/romesh.jpg',
            quote: BrnromeshText,
            post: 'Director',
        },
        {
            name: BrnKiththiName,
            img: '/quots/Kiththi.jpg',
            quote: BrnKiththiText,
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
            <BrnNavbar />
            <BrnChat />
            <section id='t1'>
                <div class="container classss">
                    <div className='center' data-aos="fade-up" data-aos-delay="200">
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={headlogo} className='headimg'></img>
                            </div>

                            <div className='col-md-6 para'>
                                <div className='story'>
                                    <h1 className='topic'>{BrnourSTopic}</h1>
                                    <p><br />{BrnourSText}</p>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-6 content'>
                                <div className='story bdround bdround1'>
                                    <h1 className='topic'>{BrnourVTopic}</h1>
                                    <p><br />{BrnourVText}</p>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='story bdround bdround2'>
                                    <h1 className='topic'>{BrnourMTopic}</h1>
                                    <p><br />{BrnourMText}</p>
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
            <BrnFooter />
        </>);


}

export default About;