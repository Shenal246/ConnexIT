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
import NPLNavbar from '../Navbar/Navbar';
import NPLChat from '../ChatBot/Chat';
import NPLFooter from '../Footer/Footer';

function Solutions() {
  const { t } = useTranslation();
  const { NPLmaintopic, NPLperiTopic, NPLcyberTopic, NPLauthTopic, NPLsecTopic, NPLendTopic, NPLnetTopic, NPLdataTopic, NPLserverTopic } = t('NPLsolutionssec', { returnObjects: true });

  return (
    <>
      <NPLNavbar />
      <NPLChat />
      <section id='hero' className='hero1'>
        <div className="container text-center">
          <div className='row'>
            <div className="row text">
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>{NPLmaintopic}</p></div>
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3 rowmargin1234">
            <div className="col">
              <NavLink to="/NPL/Solutions/InternetSecurity" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Perimie} className="card-img-top" alt="Perimeter and Internal Security" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{NPLperiTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/NPL/Solutions/CyberSecurity" activeClassName='active-link'>
                <div className="card crd">
                  <img src={cyber} className="card-img-top" alt="Cyber Security Governance & Compliance" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{NPLcyberTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/NPL/Solutions/Authentication" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Authitianit} className="card-img-top" alt="Authentication & Identity Management" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{NPLauthTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/NPL/Solutions/SecurityManagement" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Security} className="card-img-top" alt="Security Management" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{NPLsecTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3 rowmargin1234">
            <div className="col">
              <NavLink to="/NPL/Solutions/EndpointSecurity" activeClassName='active-link'>
                <div className="card crd">
                  <img src={datapoint} className="card-img-top" alt="Endpoint Security" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{NPLendTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/NPL/Solutions/Networking" activeClassName='active-link'>
                <div className="card crd">
                  <img src={networking} className="card-img-top" alt="Networking" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{NPLnetTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/NPL/Solutions/Infrastructure" activeClassName='active-link'>
                <div className="card crd">
                  <img src={endpoint} className="card-img-top endpoint111" alt="Data Center Infrastructure and Infrastructure Monitoring" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{NPLdataTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/NPL/Solutions/Server" activeClassName='active-link'>
                <div className="card crd ">
                  <img src={servers} className="card-img-top endpoint111" alt="Server Storage & Backup Solutions" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{NPLserverTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <NPLFooter />
    </>
  );
}

export default Solutions;
