// import React from 'react';
import './Portal.css';
import { useTranslation } from 'react-i18next';
import MUNavbar from '../Navbar/Navbar';
import MUChat from '../ChatBot/Chat';
import MUFooter from '../Footer/Footer';

const Portal = () => {

    const { t } = useTranslation();
    const { ptl1, ptl2
        } = t('portalsec', { returnObjects: true });

    return (
        <>
        <MUNavbar/>
        <MUChat/>
            <div className='portal'>
                <p><span className='one'>{ptl1}</span><span className='two'> {ptl2}</span> </p>
            </div>
        <MUFooter/>    
        </>
    );
};

export default Portal;
