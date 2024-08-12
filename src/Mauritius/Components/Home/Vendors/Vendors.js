import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper bundle CSS
import { useTranslation } from 'react-i18next';

import './Vendors.css';

// Import your image files
import mven1 from '../../../../images/MauritiusVendors/5.png';
import mven2 from '../../../../images/MauritiusVendors/7.png';
import mven3 from '../../../../images/MauritiusVendors/11.png';
import mven4 from '../../../../images/MauritiusVendors/21.png';
import mven5 from '../../../../images/MauritiusVendors/26.png';
import mven6 from '../../../../images/MauritiusVendors/29.png';
import mven7 from '../../../../images/MauritiusVendors/30.png';
import mven8 from '../../../../images/MauritiusVendors/34.png';
import mven9 from '../../../../images/MauritiusVendors/42.png';
import mven10 from '../../../../images/MauritiusVendors/43.png';
import mven11 from '../../../../images/MauritiusVendors/45.png';
import mven12 from '../../../../images/MauritiusVendors/48.png';
import mven13 from '../../../../images/MauritiusVendors/52.png';
// Add import statements for all your images here...

const imagePaths = [mven1, mven2, mven3, mven4, mven5, mven6, mven7, mven8, mven9, mven10, mven11, mven12, mven13]; // Add all your image paths to this array

const Vendors = () => {
  const { t } = useTranslation();
  const { Muriventopic, MurivenText1, MurivenText2 } = t('Murivendorsec', { returnObjects: true });

  return (
    <section className='vendors'>
      <div className='container'>
        {/* Vendors Text */}
        <div className="row gy-3" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <div className="col-4"><hr /></div>
          <div className="col-4"><p id='ourVendorsText'>{Muriventopic}</p></div>
          <div className="col-4"><hr /></div>
        </div>

        <div className='row vendorText' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <p>{MurivenText1}<br />{MurivenText2}</p>
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
              {imagePaths.map((path, index) => (
                <SwiperSlide key={index}>
                  <div className='image-container'>
                    <img src={path} alt={`ven${index}`} />
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
