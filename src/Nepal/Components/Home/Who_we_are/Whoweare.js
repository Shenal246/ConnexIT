import './Whoweare.css'
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Dis from '../../../../images/tech/Distributer.png';
import Con from '../../../../images/tech/Consultancy.png';
import Tra from '../../../../images/tech/Training.png';
import Tac from '../../../../images/tech/TAC.png';

import Distribution from '../../../../images/techImages/distribution.png'
import Consultancy from '../../../../images/techImages/consultancy.png';
import Training from '../../../../images/techImages/Training.png';
import TacService from '../../../../images/techImages/Tac.png';

import icon1 from '../../../../images/weicons/3.png';
import icon2 from '../../../../images/weicons/2.png';
import icon3 from '../../../../images/weicons/5.png';
import icon4 from '../../../../images/weicons/4.png';


function WhoweareSection() {
  const [disShow, setDisShow] = useState(false);
  const [conShow, setConShow] = useState(false);
  const [traShow, setTraShow] = useState(false);
  const [tacShow, setTacShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

  const [counterOn, setCounterOn] = useState(false);
  const { NPLwhotopic, NPLcard1, NPLcard1Text, NPLcard2, NPLcard2Text, NPLcard3, NPLcard3Text, NPLcard4, NPLcard4Text, NPLrText1, NPLrText2, NPLic1, NPLic2, NPLic3, NPLic4, NPLcontact } = t('NPLwhowearesec', { returnObjects: true });


  return (
    <section id="about" className="section about">
      <div className="container conwh">
        <div>
          <div className="row whotextRow" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
            <div className="col-4"><hr /></div>
            <div className="col-4"><p id='whoweareText'>{NPLwhotopic}</p></div>
            <div className="col-4"><hr /></div>
          </div>

          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="row ">
              <div className="col-md-5 techcontainer">
                <div className='row' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                  <div className='col welogos' onClick={() => setDisShow(true)}>
                    <div className='row'><img src={Dis} className='techimage' /></div>
                    <div className='row'><p className='techText'>{NPLcard1}</p></div>
                  </div>
                  <div className='col welogos' onClick={() => setConShow(true)}>
                    <div className='row'><img src={Con} className='techimage' /></div>
                    <div className='row'><p className='techText'>{NPLcard2}</p></div>
                  </div>
                </div>

                <div className='row' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                  <div className='col welogos' onClick={() => setTraShow(true)}>
                    <div className='row'><img src={Tra} className='techimage' /></div>
                    <div className='row'><p className='techText'>{NPLcard3}</p></div>
                  </div>
                  <div className='col welogos' onClick={() => setTacShow(true)}>
                    <div className='row'><img src={Tac} className='techimage' /></div>
                    <div className='row'><p className='techText'>{NPLcard4}</p></div>
                  </div>
                </div>
              </div>


              <div className="col-md-6 d-flex flex-column justify-content-center textarea" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">

                <div className="row" id='whText'>
                  <p className='tx1'>{NPLrText1}</p>
                  <p className='tx2p'>{NPLrText2}</p>
                </div>


                <div className="row iconRow">

                  <div className='col iconCol'>
                    <div className='row'>
                      <div className='icon-container'>
                        <img src={icon1} className='iconMob' />
                      </div>
                    </div>
                    <div className='row textRow'>
                      <p className='iconText'>{counterOn && <CountUp start={0} end={2024} duration={2} delay={0.5} separator="" />}<br /> {NPLic1}</p>
                    </div>
                  </div>

                  <div className='col iconCol'>
                    <div className='row'>
                      <div className='icon-container'>
                        <img src={icon2} className='iconMob' />
                      </div>
                    </div>
                    <div className='row textRow'>
                      <p className='iconText'>{counterOn && <CountUp start={0} end={10} duration={3} delay={0.5} />}+ <br />{NPLic2}</p>
                    </div>
                  </div>

                  <div className='col iconCol'>
                    <div className='row'>
                      <div className='icon-container'>
                        <img src={icon3} className='icon iconMob' />
                      </div>
                    </div>
                    <div className='row textRow'>
                      <p className='iconText'>{counterOn && <CountUp start={0} end={12} duration={3} delay={0.5} />}+ <br />{NPLic3}</p>
                    </div>
                  </div>

                  <div className='col iconCol'>
                    <div className='row'>
                      <div className='icon-container'>
                        <img src={icon4} className='iconMob' />
                      </div>
                    </div>
                    <div className='row textRow'>
                      <p className='iconText'>{counterOn && <CountUp start={0} end={40} duration={3} delay={0.5} />}+ <br />{NPLic4}</p>
                    </div>
                  </div>

                  {/* <div className='col'>
                  
                  </div> */}

                </div>

              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>

      {/*Distribution Model */}
      <Modal
        size="lg"
        show={disShow}
        onHide={() => setDisShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='disModel'
      >
        <Modal.Header closeButton closeVariant='white' className='model-header'>
          <Modal.Title id="example-modal-sizes-title-lg">
            {NPLcard1}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <div className='row'>
            <div className='col-md'>
              <p className='model-content-text'>{NPLcard1Text}</p>
            </div>

            <div className='col-md'>
              <img src={Distribution} className='model-image' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
          <NavLink to="/NPL/ContactUs"><Button onClick={handleClose} className='contactUs-button'>
            {NPLcontact}
          </Button></NavLink>
        </Modal.Footer>
      </Modal>

      {/*Consultancy Model */}
      <Modal
        size="lg"
        show={conShow}
        onHide={() => setConShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='disModel'
      >
        <Modal.Header closeButton closeVariant='white' className='model-header'>
          <Modal.Title id="example-modal-sizes-title-lg">
          {NPLcard2}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <div className='row'>
            <div className='col-md'>
              <p className='model-content-text'>{NPLcard2Text}</p>
            </div>

            <div className='col-md'>
              <img src={Consultancy} className='model-image' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
          <NavLink to="/NPL/ContactUs"><Button onClick={handleClose} className='contactUs-button'>
            {NPLcontact}
          </Button></NavLink>
        </Modal.Footer>
      </Modal>

      {/*Training Model */}
      <Modal
        size="lg"
        show={traShow}
        onHide={() => setTraShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='disModel'
      >
        <Modal.Header closeButton closeVariant='white' className='model-header'>
          <Modal.Title id="example-modal-sizes-title-lg">
          {NPLcard3}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <div className='row'>
            <div className='col-md'>
              <p className='model-content-text'>
                {NPLcard3Text}
              </p>
            </div>

            <div className='col-md'>
              <img src={Training} className='model-image' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
          <NavLink to="/NPL/ContactUs"><Button onClick={handleClose} className='contactUs-button'>
            {NPLcontact}
          </Button></NavLink>
        </Modal.Footer>
      </Modal>

      {/*TAC Support Model */}
      <Modal
        size="lg"
        show={tacShow}
        onHide={() => setTacShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='disModel'
      >
        <Modal.Header closeButton closeVariant='white' className='model-header'>
          <Modal.Title id="example-modal-sizes-title-lg">
          {NPLcard4}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <div className='row'>
            <div className='col-md'>
              <p className='model-content-text'>
                {NPLcard4Text}
              </p>
            </div>

            <div className='col-md'>
              <img src={TacService} className='model-image' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
          <NavLink to="/NPL/ContactUs"><Button onClick={handleClose} className='contactUs-button'>
            {NPLcontact}
          </Button></NavLink>
        </Modal.Footer>
      </Modal>

    </section>
  );
}

export default WhoweareSection;
