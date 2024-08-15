import './Solutions.css';
import Authitianit from '../../../images/pillers/Authitianit.jpg';
import cyber from '../../../images/pillers/cyber.jpg';
import endpoint from '../../../images/pillers/endpoint.jpg';
import datapoint from '../../../images/pillers/Datapoint.jpg';
import Security from '../../../images/pillers/Security.jpg';
import networking from '../../../images/pillers/networking.jpg';
import Perimie from '../../../images/pillers/Perimie.jpg';
import servers from '../../../images/pillers/severBackup.jpg';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import BrnNavbar from '../Navbar/Navbar';
import BrnChat from '../ChatBot/Chat';
import BrnFooter from '../Footer/Footer';

function Solutions() {
  const { t } = useTranslation();
  const { Brnmaintopic, BrnperiTopic, BrncyberTopic, BrnauthTopic, BrnsecTopic, BrnendTopic, BrnnetTopic, BrndataTopic, BrnserverTopic } = t('Brnsolutionssec', { returnObjects: true });

  return (
    <>
      <BrnNavbar />
      <BrnChat />
      <section id='hero' className='hero1'>
        <div className="container text-center">
          <div className='row'>
            <div className="row text">
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>{Brnmaintopic}</p></div>
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3 rowmargin1234">
            <div className="col">
              <NavLink to="/Brn/Solutions/InternetSecurity" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Perimie} className="card-img-top" alt="Perimeter and Internal Security" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{BrnperiTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/Brn/Solutions/CyberSecurity" activeClassName='active-link'>
                <div className="card crd">
                  <img src={cyber} className="card-img-top" alt="Cyber Security Governance & Compliance" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{BrncyberTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/Brn/Solutions/Authentication" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Authitianit} className="card-img-top" alt="Authentication & Identity Management" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{BrnauthTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/Brn/Solutions/SecurityManagement" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Security} className="card-img-top" alt="Security Management" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{BrnsecTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3 rowmargin1234">
            <div className="col">
              <NavLink to="/Brn/Solutions/EndpointSecurity" activeClassName='active-link'>
                <div className="card crd">
                  <img src={datapoint} className="card-img-top" alt="Endpoint Security" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{BrnendTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/Brn/Solutions/Networking" activeClassName='active-link'>
                <div className="card crd">
                  <img src={networking} className="card-img-top" alt="Networking" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{BrnnetTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/Brn/Solutions/Infrastructure" activeClassName='active-link'>
                <div className="card crd">
                  <img src={endpoint} className="card-img-top endpoint111" alt="Data Center Infrastructure and Infrastructure Monitoring" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{BrndataTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/Brn/Solutions/Server" activeClassName='active-link'>
                <div className="card crd ">
                  <img src={servers} className="card-img-top endpoint111" alt="Server Storage & Backup Solutions" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{BrnserverTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <BrnFooter />
    </>
  );
}

export default Solutions;
