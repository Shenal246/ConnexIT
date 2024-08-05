

// import React from 'react';
import './Portal.css';
import AUFooter from "../Footer/Footer";
import React from "react";
import AUNavbar from "../Navbar/Navbar";
import AUChat from "../ChatBot/Chat";

const Portal = () => {
    return (
        <>
            <AUNavbar />
            <AUChat />
            <div className='portal'>
                <p><span className='one'>To be launch</span><span className='two'> Soon</span> </p>
            </div>
            <AUFooter />
        </>
    );
};

export default Portal;