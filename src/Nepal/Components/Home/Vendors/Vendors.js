import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper bundle CSS
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import vendor123 from '../../../../images/AusVendors/11.png'

import './Vendors.css';

// Import your image files
import connections from '../../../../config';


const Vendors = () => {

  const { t } = useTranslation();
  const { NPLventopic, NPLvenText1, NPLvenText2 } = t('NPLvendorsec', { returnObjects: true });


  const [vendorLogos, setVendorLogos] = useState(null);

  useEffect(() => {
    fetchVendors();
  }, []);

  const serverlinkForBackend = connections.vendorlogo;

  const fetchVendors = async () => {
    await axios.get(serverlinkForBackend, {
      headers: { cnt: 6 }
  }).then((response) => {
      setVendorLogos(response.data);
      console.log("Vendor logos------------", response.data);

    }).catch((err) => {
      console.log(err);
    });
    console.log("Vendor logos", vendorLogos);
  }

  return (
    <section className='vendors'>
      <div className='container'>
        {/* Vendors Text */}
        <div className="row gy-3" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <div className="col-4"><hr /></div>
          <div className="col-4"><p id='ourVendorsText'>{NPLventopic}</p></div>
          <div className="col-4"><hr /></div>
        </div>

        <div className='row vendorText' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <p>{NPLvenText1}<br />{NPLvenText2}</p>
        </div>

        <div className='row' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
          <div className='col-lg-1'></div>
          <div className='col-lg-10'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              autoplay={{
                delay: 550,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {vendorLogos && vendorLogos.map((venimg, index) => (
                <SwiperSlide key={index}>
                  <div className='image-container'>
                    <img src={`data:image/jpeg;base64,${venimg && venimg.image_data}`} alt="Vendor Logos" />
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
