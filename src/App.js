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


function App() {

    AOS.init();

    return (
        <Router>
            <>
                <Routes>
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
                </Routes>

            </>
        </Router>
    );
}

export default App;
