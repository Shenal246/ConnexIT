import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import AOS from 'aos';
import SLHome from "./SriLanka/Home/Home";
import SLAbout from "./SriLanka/About/About";
import SLEvents from "./SriLanka/Events&News/Events";
import SLUpcomingEvents from "./SriLanka/Events&News/UpcomingNews/UpcomingNews";
import SLBlog from "./SriLanka/Blog/Blog";
import SLContactUs from "./SriLanka/ContactUs/Contact";
import SLSolutions from "./SriLanka/Solutions/Solutions";
import SLPortal from "./SriLanka/Portal/Portal";
import SLCyberSecurity from "./SriLanka/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import SLAuthentication from "./SriLanka/Solutions/solutionVendors/Authentication/Authentication";
import SLSecurityManagement from "./SriLanka/Solutions/solutionVendors/Security/Security";
import SLPerimia from "./SriLanka/Solutions/solutionVendors/Perimia/Perimia";
import SLEndpointSecurity from "./SriLanka/Solutions/solutionVendors/Endpoint/Endpoin";
import SLNetworking from "./SriLanka/Solutions/solutionVendors/Networking/Networking";
import SLInfrastructure from "./SriLanka/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import SLServer from "./SriLanka/Solutions/solutionVendors/ServerBackup/ServerBackup";
import SLMicrosoft from "./SriLanka/Solutions/solutionVendors/Microsoft/Microsoft";
import SLFAQs from "./SriLanka/FAQs/FAQs";
import SLSingleVendor from "./SriLanka/SingleVendor/SingleVendor";

import KHHome from "./Cambodia/Components/Home/Home";
import KHAbout from "./Cambodia/Components/About/About";
import KHEvents from "./Cambodia/Components/Events&News/Events";
import KHUpcomingEvents from "./Cambodia/Components/Events&News/UpcomingNews/UpcomingNews";
import KHBlog from "./Cambodia/Components/Blog/Blog";
import KHContactUs from "./Cambodia/Components/ContactUs/Contact";
import KHSolutions from "./Cambodia/Components/Solutions/Solutions";
import KHPortal from "./Cambodia/Components/Portal/Portal";
import KHCyberSecurity from "./Cambodia/Components/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import KHAuthentication from "./Cambodia/Components/Solutions/solutionVendors/Authentication/Authentication";
import KHSecurityManagement from "./Cambodia/Components/Solutions/solutionVendors/Security/Security";
import KHPerimia from "./Cambodia/Components/Solutions/solutionVendors/Perimia/Perimia";
import KHEndpointSecurity from "./Cambodia/Components/Solutions/solutionVendors/Endpoint/Endpoin";
import KHNetworking from "./Cambodia/Components/Solutions/solutionVendors/Networking/Networking";
import KHInfrastructure from "./Cambodia/Components/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import KHServer from "./Cambodia/Components/Solutions/solutionVendors/ServerBackup/ServerBackup";
import KHMicrosoft from "./Cambodia/Components/Solutions/solutionVendors/Microsoft/Microsoft";
import KHSingleVendor from "./Cambodia/Components/SingleVendor/SingleVendor";
import KHSeagate from "./Cambodia/Components/Seagate/SeagateSinglePage";

import THHome from "./Thailand/Components/Home/Home";
import THAbout from "./Thailand/Components/About/About";
import THEvents from "./Thailand/Components/Events&News/Events";
import THUpcomingEvents from "./Thailand/Components/Events&News/UpcomingNews/UpcomingNews";
import THBlog from "./Thailand/Components/Blog/Blog";
import THContactUs from "./Thailand/Components/ContactUs/Contact";
import THSolutions from "./Thailand/Components/Solutions/Solutions";
import THPortal from "./Thailand/Components/Portal/Portal";
import THCyberSecurity from "./Thailand/Components/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import THAuthentication from "./Thailand/Components/Solutions/solutionVendors/Authentication/Authentication";
import THSecurityManagement from "./Thailand/Components/Solutions/solutionVendors/Security/Security";
import THInternetSecurity from "./Thailand/Components/Solutions/solutionVendors/Perimia/Perimia";
import THEndpointSecurity from "./Thailand/Components/Solutions/solutionVendors/Endpoint/Endpoin";
import THNetworking from "./Thailand/Components/Solutions/solutionVendors/Networking/Networking";
import THInfrastructure from "./Thailand/Components/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import THServer from "./Thailand/Components/Solutions/solutionVendors/ServerBackup/ServerBackup";
import THSingleVendor from "./Thailand/Components/SingleVendor/SingleVendor";

import AUHome from "./Australia/Home/Home";
import AUAbout from "./Australia/About/About";
import AUEvents from "./Australia/Events&News/Events";
import AUUpcomingEvents from "./Australia/Events&News/UpcomingNews/UpcomingNews";
import AUBlog from "./Australia/Blog/Blog";
import AUContactUs from "./Australia/ContactUs/Contact";
import AUSolutions from "./Australia/Solutions/Solutions";
import AUPortal from "./Australia/Portal/Portal";
import AUCyberSecurity from "./Australia/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import AUAuthentication from "./Australia/Solutions/solutionVendors/Authentication/Authentication";
import AUSecurityManagement from "./Australia/Solutions/solutionVendors/Security/Security";
import AUPerimia from "./Australia/Solutions/solutionVendors/Perimia/Perimia";
import AUEndpointSecurity from "./Australia/Solutions/solutionVendors/Endpoint/Endpoin";
import AUNetworking from "./Australia/Solutions/solutionVendors/Networking/Networking";
import AUInfrastructure from "./Australia/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import AUServer from "./Australia/Solutions/solutionVendors/ServerBackup/ServerBackup";
import AUMicrosoft from "./Australia/Solutions/solutionVendors/Microsoft/Microsoft";
import AUFAQs from "./Australia/FAQs/FAQs";
import AUSingleVendor from "./Australia/SingleVendor/SingleVendor";

import MUHome from "./Mauritius/Components/Home/Home";
import MUAbout from "./Mauritius/Components/About/About";
import MUEvents from "./Mauritius/Components/Events&News/Events";
import MUUpcomingEvents from "./Mauritius/Components/Events&News/UpcomingNews/UpcomingNews";
import MUBlog from "./Mauritius/Components/Blog/Blog";
import MUContactUs from "./Mauritius/Components/ContactUs/Contact";
import MUSolutions from "./Mauritius/Components/Solutions/Solutions";
import MUPortal from "./Mauritius/Components/Portal/Portal";
import MUCyberSecurity from "./Mauritius/Components/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import MUAuthentication from "./Mauritius/Components/Solutions/solutionVendors/Authentication/Authentication";
import MUSecurityManagement from "./Mauritius/Components/Solutions/solutionVendors/Security/Security";
import MUPerimia from "./Mauritius/Components/Solutions/solutionVendors/Perimia/Perimia";
import MUEndpointSecurity from "./Mauritius/Components/Solutions/solutionVendors/Endpoint/Endpoin";
import MUNetworking from "./Mauritius/Components/Solutions/solutionVendors/Networking/Networking";
import MUInfrastructure from "./Mauritius/Components/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import MUServer from "./Mauritius/Components/Solutions/solutionVendors/ServerBackup/ServerBackup";
import MUMicrosoft from "./Mauritius/Components/Solutions/solutionVendors/Microsoft/Microsoft";
import MUSingleVendor from "./Mauritius/Components/SingleVendor/SingleVendor";


import BrnHome from "./Brunai/Components/Home/Home";
import BrnAbout from "./Brunai/Components/About/About";
import BrnEvents from "./Brunai/Components/Events&News/Events";
import BrnUpcomingEvents from "./Brunai/Components/Events&News/UpcomingNews/UpcomingNews";
import BrnBlog from "./Brunai/Components/Blog/Blog";
import BrnContactUs from "./Brunai/Components/ContactUs/Contact";
import BrnSolutions from "./Brunai/Components/Solutions/Solutions";
import BrnPortal from "./Brunai/Components/Portal/Portal";
import BrnCyberSecurity from "./Brunai/Components/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import BrnAuthentication from "./Brunai/Components/Solutions/solutionVendors/Authentication/Authentication";
import BrnSecurityManagement from "./Brunai/Components/Solutions/solutionVendors/Security/Security";
import BrnInternetSecurity from "./Brunai/Components/Solutions/solutionVendors/Perimia/Perimia";
import BrnEndpointSecurity from "./Brunai/Components/Solutions/solutionVendors/Endpoint/Endpoin";
import BrnNetworking from "./Brunai/Components/Solutions/solutionVendors/Networking/Networking";
import BrnInfrastructure from "./Brunai/Components/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import BrnServer from "./Brunai/Components/Solutions/solutionVendors/ServerBackup/ServerBackup";
import BrnSingleVendor from "./Brunai/Components/SingleVendor/SingleVendor";

// NZ 
// import NZHome from "./NewZealand/Home/Home";
// import NZAbout from "./NewZealand/About/About";
// import NZEvents from "./NewZealand/Events&News/Events";
// import NZUpcomingEvents from "./NewZealand/Events&News/UpcomingNews/UpcomingNews";
// import NZBlog from "./NewZealand/Blog/Blog";
// import NZContactUs from "./NewZealand/ContactUs/Contact";
// import NZSolutions from "./NewZealand/Solutions/Solutions";
// import NZPortal from "./NewZealand/Portal/Portal";
// import NZCyberSecurity from "./NewZealand/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
// import NZAuthentication from "./NewZealand/Solutions/solutionVendors/Authentication/Authentication";
// import NZSecurityManagement from "./NewZealand/Solutions/solutionVendors/Security/Security";
// import NZPerimia from "./NewZealand/Solutions/solutionVendors/Perimia/Perimia";
// import NZEndpointSecurity from "./NewZealand/Solutions/solutionVendors/Endpoint/Endpoin";
// import NZNetworking from "./NewZealand/Solutions/solutionVendors/Networking/Networking";
// import NZInfrastructure from "./NewZealand/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
// import NZServer from "./NewZealand/Solutions/solutionVendors/ServerBackup/ServerBackup";
// import NZMicrosoft from "./NewZealand/Solutions/solutionVendors/Microsoft/Microsoft";
// import NZFAQs from "./NewZealand/FAQs/FAQs";
// import NZSingleVendor from "./NewZealand/SingleVendor/SingleVendor";


function App() {

    AOS.init();

    return (
        <Router>
            <>
                <Routes>
                    {/*Sri Lanka*/}
                    <Route path="/" exact element={<SLHome />} />
                    <Route path="/SL" exact element={<SLHome />} />
                    <Route path="/SL/About" exact element={<SLAbout />} />
                    <Route path="/SL/Events&News" exact element={<SLEvents />} />
                    <Route path="/SL/UpcomingNews" exact element={<SLUpcomingEvents />} />
                    <Route path="/SL/Blog" exact element={<SLBlog />} />
                    <Route path="/SL/ContactUs" exact element={<SLContactUs />} />
                    <Route path="/SL/Solutions" exact element={<SLSolutions />} />
                    <Route path="/SL/Portal" exact element={<SLPortal />} />

                    <Route path="/SL/Solutions/CyberSecurity" element={<SLCyberSecurity />} />
                    <Route path="/SL/Solutions/Authentication" element={<SLAuthentication />} />
                    <Route path="/SL/Solutions/SecurityManagement" element={<SLSecurityManagement />} />
                    <Route path="/SL/Solutions/Perimia" element={<SLPerimia />} />
                    <Route path="/SL/Solutions/EndpointSecurity" element={<SLEndpointSecurity />} />
                    <Route path="/SL/Solutions/Networking" element={<SLNetworking />} />
                    <Route path="/SL/Solutions/Infrastructure" element={<SLInfrastructure />} />
                    <Route path="/SL/Solutions/Server" element={<SLServer />} />
                    <Route path="/SL/Solutions/Microsoft" element={<SLMicrosoft />} />
                    <Route path="/SL/FAQs" element={<SLFAQs />} />
                    <Route path="/SL/Solutions/Authentication/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/CyberSecurity/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/Endpoin/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/InfrastructureMonitoring/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/Networking/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/Perimia/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/Security/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/ServerBackup/:vendorName" element={<SLSingleVendor />} />

                    {/*    Cambodia*/}
                    <Route path="/KH" exact Component={KHHome}></Route>
                    <Route path="/KH/About" exact Component={KHAbout}></Route>
                    <Route path="/KH/Events&News" exact element={<KHEvents />}></Route>
                    <Route path="/KH/UpcomingNews" exact element={<KHUpcomingEvents />}></Route>
                    <Route path="/KH/Blog" exact element={<KHBlog />}></Route>
                    <Route path="/KH/ContactUs" exact Component={KHContactUs}></Route>
                    <Route path="/KH/Solutions" exact Component={KHSolutions}></Route>
                    <Route path="/KH/Portal" exact Component={KHPortal}></Route>
                    <Route path="/KH/Seagate" element={<KHSeagate />} />

                    <Route path="/KH/Solutions/CyberSecurity" element={<KHCyberSecurity />} />
                    <Route path="/KH/Solutions/Authentication" element={<KHAuthentication />} />
                    <Route path="/KH/Solutions/SecurityManagement" element={<KHSecurityManagement />} />
                    <Route path="/KH/Solutions/Perimia" element={<KHPerimia />} />
                    <Route path="/KH/Solutions/EndpointSecurity" element={<KHEndpointSecurity />} />
                    <Route path="/KH/Solutions/Networking" element={<KHNetworking />} />
                    <Route path="/KH/Solutions/Infrastructure" element={<KHInfrastructure />} />
                    <Route path="/KH/Solutions/Server" element={<KHServer />} />
                    <Route path="/KH/Solutions/Microsoft" element={<KHMicrosoft />} />
                    <Route path="/KH/Solutions/Authentication/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/CyberSecurity/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/Endpoin/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/InfrastructureMonitoring/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/Networking/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/Perimia/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/Security/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/ServerBackup/:vendorName" element={<KHSingleVendor />} />

                    {/*    Thailand*/}
                    <Route path="/TH" exact Component={THHome}></Route>
                    <Route path="/TH/About" exact Component={THAbout}></Route>
                    <Route path="/TH/Events&News" exact element={<THEvents />}></Route>
                    <Route path="/TH/UpcomingNews" exact element={<THUpcomingEvents />}></Route>
                    <Route path="/TH/Blog" exact element={<THBlog />}></Route>
                    <Route path="/TH/ContactUs" exact Component={THContactUs}></Route>
                    <Route path="/TH/Solutions" exact Component={THSolutions}></Route>
                    <Route path="/TH/Portal" exact Component={THPortal}></Route>

                    <Route path="/TH/Solutions/CyberSecurity" element={<THCyberSecurity />} />
                    <Route path="/TH/Solutions/Authentication" element={<THAuthentication />} />
                    <Route path="/TH/Solutions/SecurityManagement" element={<THSecurityManagement />} />
                    <Route path="/TH/Solutions/InternetSecurity" element={<THInternetSecurity />} />
                    <Route path="/TH/Solutions/EndpointSecurity" element={<THEndpointSecurity />} />
                    <Route path="/TH/Solutions/Networking" element={<THNetworking />} />
                    <Route path="/TH/Solutions/Infrastructure" element={<THInfrastructure />} />
                    <Route path="/TH/Solutions/Server" element={<THServer />} />
                    <Route path="/TH/Solutions/Authentication/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/CyberSecurity/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/Endpoin/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/InfrastructureMonitoring/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/Networking/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/Perimia/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/Security/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/ServerBackup/:vendorName" element={<THSingleVendor />} />

                    {/*Australia*/}

                    <Route path="/AU" exact element={<AUHome />} />
                    <Route path="/AU/About" exact element={<AUAbout />} />
                    <Route path="/AU/Events&News" exact element={<AUEvents />} />
                    <Route path="/AU/UpcomingNews" exact element={<AUUpcomingEvents />} />
                    <Route path="/AU/Blog" exact element={<AUBlog />} />
                    <Route path="/AU/ContactUs" exact element={<AUContactUs />} />
                    <Route path="/AU/Solutions" exact element={<AUSolutions />} />
                    <Route path="/AU/Portal" exact element={<AUPortal />} />

                    <Route path="/AU/Solutions/CyberSecurity" element={<AUCyberSecurity />} />
                    <Route path="/AU/Solutions/Authentication" element={<AUAuthentication />} />
                    <Route path="/AU/Solutions/SecurityManagement" element={<AUSecurityManagement />} />
                    <Route path="/AU/Solutions/Perimia" element={<AUPerimia />} />
                    <Route path="/AU/Solutions/EndpointSecurity" element={<AUEndpointSecurity />} />
                    <Route path="/AU/Solutions/Networking" element={<AUNetworking />} />
                    <Route path="/AU/Solutions/Infrastructure" element={<AUInfrastructure />} />
                    <Route path="/AU/Solutions/Server" element={<AUServer />} />
                    <Route path="/AU/Solutions/Microsoft" element={<AUMicrosoft />} />
                    <Route path="/AU/FAQs" element={<AUFAQs />} />
                    <Route path="/AU/Solutions/Authentication/:vendorName" element={<AUSingleVendor />} />
                    <Route path="/AU/Solutions/CyberSecurity/:vendorName" element={<AUSingleVendor />} />
                    <Route path="/AU/Solutions/Endpoin/:vendorName" element={<AUSingleVendor />} />
                    <Route path="/AU/Solutions/InfrastructureMonitoring/:vendorName" element={<AUSingleVendor />} />
                    <Route path="/AU/Solutions/Networking/:vendorName" element={<AUSingleVendor />} />
                    <Route path="/AU/Solutions/Perimia/:vendorName" element={<AUSingleVendor />} />
                    <Route path="/AU/Solutions/Security/:vendorName" element={<AUSingleVendor />} />
                    <Route path="/AU/Solutions/ServerBackup/:vendorName" element={<AUSingleVendor />} />

                    {/* Mauritius*/}
                    <Route path="/MU" exact Component={MUHome}></Route>
                    <Route path="/MU/About" exact Component={MUAbout}></Route>
                    <Route path="/MU/Events&News" exact element={<MUEvents />}></Route>
                    <Route path="/MU/UpcomingNews" exact element={<MUUpcomingEvents />}></Route>
                    <Route path="/MU/Blog" exact element={<MUBlog />}></Route>
                    <Route path="/MU/ContactUs" exact Component={MUContactUs}></Route>
                    <Route path="/MU/Solutions" exact Component={MUSolutions}></Route>
                    <Route path="/MU/Portal" exact Component={MUPortal}></Route>

                    <Route path="/MU/Solutions/CyberSecurity" element={<MUCyberSecurity />} />
                    <Route path="/MU/Solutions/Authentication" element={<MUAuthentication />} />
                    <Route path="/MU/Solutions/SecurityManagement" element={<MUSecurityManagement />} />
                    <Route path="/MU/Solutions/Perimia" element={<MUPerimia />} />
                    <Route path="/MU/Solutions/EndpointSecurity" element={<MUEndpointSecurity />} />
                    <Route path="/MU/Solutions/Networking" element={<MUNetworking />} />
                    <Route path="/MU/Solutions/Infrastructure" element={<MUInfrastructure />} />
                    <Route path="/MU/Solutions/Server" element={<MUServer />} />
                    <Route path="/MU/Solutions/Microsoft" element={<MUMicrosoft />} />
                    <Route path="/MU/Solutions/Authentication/:vendorName" element={<MUSingleVendor />} />
                    <Route path="/MU/Solutions/CyberSecurity/:vendorName" element={<MUSingleVendor />} />
                    <Route path="/MU/Solutions/Endpoin/:vendorName" element={<MUSingleVendor />} />
                    <Route path="/MU/Solutions/InfrastructureMonitoring/:vendorName" element={<MUSingleVendor />} />
                    <Route path="/MU/Solutions/Networking/:vendorName" element={<MUSingleVendor />} />
                    <Route path="/MU/Solutions/Perimia/:vendorName" element={<MUSingleVendor />} />
                    <Route path="/MU/Solutions/Security/:vendorName" element={<MUSingleVendor />} />
                    <Route path="/MU/Solutions/ServerBackup/:vendorName" element={<MUSingleVendor />} />


                    {/*    Brunei*/}
                    <Route path="/Brn" exact Component={BrnHome}></Route>
                    <Route path="/Brn/About" exact Component={BrnAbout}></Route>
                    <Route path="/Brn/Events&News" exact element={<BrnEvents />}></Route>
                    <Route path="/Brn/UpcomingNews" exact element={<BrnUpcomingEvents />}></Route>
                    <Route path="/Brn/Blog" exact element={<BrnBlog />}></Route>
                    <Route path="/Brn/ContactUs" exact Component={BrnContactUs}></Route>
                    <Route path="/Brn/Solutions" exact Component={BrnSolutions}></Route>
                    <Route path="/Brn/Portal" exact Component={BrnPortal}></Route>

                    <Route path="/Brn/Solutions/CyberSecurity" element={<BrnCyberSecurity />} />
                    <Route path="/Brn/Solutions/Authentication" element={<BrnAuthentication />} />
                    <Route path="/Brn/Solutions/SecurityManagement" element={<BrnSecurityManagement />} />
                    <Route path="/Brn/Solutions/InternetSecurity" element={<BrnInternetSecurity />} />
                    <Route path="/Brn/Solutions/EndpointSecurity" element={<BrnEndpointSecurity />} />
                    <Route path="/Brn/Solutions/Networking" element={<BrnNetworking />} />
                    <Route path="/Brn/Solutions/Infrastructure" element={<BrnInfrastructure />} />
                    <Route path="/Brn/Solutions/Server" element={<BrnServer />} />
                    <Route path="/Brn/Solutions/Authentication/:vendorName" element={<BrnSingleVendor />} />
                    <Route path="/Brn/Solutions/CyberSecurity/:vendorName" element={<BrnSingleVendor />} />
                    <Route path="/Brn/Solutions/Endpoin/:vendorName" element={<BrnSingleVendor />} />
                    <Route path="/Brn/Solutions/InfrastructureMonitoring/:vendorName" element={<BrnSingleVendor />} />
                    <Route path="/Brn/Solutions/Networking/:vendorName" element={<BrnSingleVendor />} />
                    <Route path="/Brn/Solutions/Perimia/:vendorName" element={<BrnSingleVendor />} />
                    <Route path="/Brn/Solutions/Security/:vendorName" element={<BrnSingleVendor />} />
                    <Route path="/Brn/Solutions/ServerBackup/:vendorName" element={<BrnSingleVendor />} />


                    {/*New Zealand*/}

                    {/* <Route path="/NZ" exact element={<NZHome />} />
                    <Route path="/NZ/About" exact element={<NZAbout />} />
                    <Route path="/NZ/Events&News" exact element={<NZEvents />} />
                    <Route path="/NZ/UpcomingNews" exact element={<NZUpcomingEvents />} />
                    <Route path="/NZ/Blog" exact element={<NZBlog />} />
                    <Route path="/NZ/ContactUs" exact element={<NZContactUs />} />
                    <Route path="/NZ/Solutions" exact element={<NZSolutions />} />
                    <Route path="/NZ/Portal" exact element={<NZPortal />} />

                    <Route path="/NZ/Solutions/CyberSecurity" element={<NZCyberSecurity />} />
                    <Route path="/NZ/Solutions/Authentication" element={<NZAuthentication />} />
                    <Route path="/NZ/Solutions/SecurityManagement" element={<NZSecurityManagement />} />
                    <Route path="/NZ/Solutions/Perimia" element={<NZPerimia />} />
                    <Route path="/NZ/Solutions/EndpointSecurity" element={<NZEndpointSecurity />} />
                    <Route path="/NZ/Solutions/Networking" element={<NZNetworking />} />
                    <Route path="/NZ/Solutions/Infrastructure" element={<NZInfrastructure />} />
                    <Route path="/NZ/Solutions/Server" element={<NZServer />} />
                    <Route path="/NZ/Solutions/Microsoft" element={<NZMicrosoft />} />
                    <Route path="/NZ/FAQs" element={<NZFAQs />} />
                    <Route path="/NZ/Solutions/Authentication/:vendorName" element={<NZSingleVendor />} />
                    <Route path="/NZ/Solutions/CyberSecurity/:vendorName" element={<NZSingleVendor />} />
                    <Route path="/NZ/Solutions/Endpoin/:vendorName" element={<NZSingleVendor />} />
                    <Route path="/NZ/Solutions/InfrastructureMonitoring/:vendorName" element={<NZSingleVendor />} />
                    <Route path="/NZ/Solutions/Networking/:vendorName" element={<NZSingleVendor />} />
                    <Route path="/NZ/Solutions/Perimia/:vendorName" element={<NZSingleVendor />} />
                    <Route path="/NZ/Solutions/Security/:vendorName" element={<NZSingleVendor />} />
                    <Route path="/NZ/Solutions/ServerBackup/:vendorName" element={<NZSingleVendor />} /> */}

                </Routes>

            </> 
        </Router>
    );
}

export default App;
