import './Solutions.css';
import Authitianit from '../../../images/pillers/Authitianit.jpg';
import cyber from '../../../images/pillers/cyber.jpg';
import endpoint from '../../../images/pillers/endpoint.jpg';
import datapoint from '../../../images/pillers/Datapoint.jpg';
import Security from '../../../images/pillers/Security.jpg';
import networking from '../../../images/pillers/networking.jpg';
import Perimie from '../../../images/pillers/Perimie.jpg';
import servers from '../../../images/pillers/severBackup.jpg';
import mrcst from '../../../images/pillers/Microsoft.jpg'
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import MUNavbar from '../Navbar/Navbar';
import MUChat from '../ChatBot/Chat';
import MUFooter from '../Footer/Footer';

function Solutions() {



  const { t } = useTranslation();
  const { Murimaintopic, MuriperiTopic, MuricyberTopic, MuriauthTopic, MurisecTopic, MuriendTopic, MurinetTopic, MuridataTopic, MuriserverTopic, MuriMicrosoft
  } = t('Murisolutionssec', { returnObjects: true });

  return (
    <>
      <MUNavbar />
      <MUChat />
      <section id='hero' className='hero1 heroSolution'>
        <div className="container text-center">
          <div className='row'>
            <div className="row text">
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>{Murimaintopic}</p></div>
              <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 rowmargin1234">
            <div className="col">
              <NavLink to="/MU/Solutions/Perimia" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Perimie} className="card-img-top" alt="Perimeter and Internal Security" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{MuriperiTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/MU/Solutions/CyberSecurity" activeClassName='active-link'>
                <div className="card crd">
                  <img src={cyber} className="card-img-top" alt="Cyber Security Governance & Compliance" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{MuricyberTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/MU/Solutions/Authentication" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Authitianit} className="card-img-top" alt="Authentication & Identity Management" />
                  <div className="card-body cardSize">
                    <p className="card-text txts">{MuriauthTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 rowmargin1234">
            <div className="col">
              <NavLink to="/MU/Solutions/SecurityManagement" activeClassName='active-link'>
                <div className="card crd">
                  <img src={Security} className="card-img-top" alt="Security Management" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{MurisecTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/MU/Solutions/EndpointSecurity" activeClassName='active-link'>
                <div className="card crd">
                  <img src={datapoint} className="card-img-top" alt="Endpoint Security" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{MuriendTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/MU/Solutions/Networking" activeClassName='active-link'>
                <div className="card crd">
                  <img src={networking} className="card-img-top" alt="Networking" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{MurinetTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 rowmargin1234">
            <NavLink to="/MU/Solutions/Infrastructure" activeClassName='active-link'>
              <div className="card crd">
                <img src={endpoint} className="card-img-top endpoint" alt="Data Center Infrastructure and Infrastructure Monitoring" />
                <div className="card-body cardSize1">
                  <p className="card-text txts">{MuridataTopic}</p>
                </div>
              </div>
            </NavLink>

            <div className="col column">
              <NavLink to="/MU/Solutions/Server" activeClassName='active-link'>
                <div className="card crd ">
                  <img src={servers} className="card-img-top solImageHight" alt="Server Storage & Backup Solutions" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{MuriserverTopic}</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col column">
              <NavLink to="/MU/Solutions/Microsoft" activeClassName='active-link'>
                <div className="card crd ">
                  <img src={mrcst} className="card-img-top solImageHight" alt="Microsoft" />
                  <div className="card-body cardSize1">
                    <p className="card-text txts">{MuriMicrosoft}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>

        </div>
      </section>
      <MUFooter />


    </>
  );
}

export default Solutions;
