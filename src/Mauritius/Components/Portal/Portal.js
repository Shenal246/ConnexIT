// import React from 'react';
import './Portal.css';
import { useTranslation } from 'react-i18next';
import MUNavbar from '../Navbar/Navbar';
import MUChat from '../ChatBot/Chat';
import MUFooter from '../Footer/Footer';

const Portal = () => {

    const { t } = useTranslation();
    const { Muriptl1, Muriptl2
        } = t('Muriportalsec', { returnObjects: true });

    return (
        <>
        <MUNavbar/>
        <MUChat/>
            <div className='portal'>
                <p><span className='one'>{Muriptl1}</span><span className='two'> {Muriptl2}</span> </p>
            </div>
        <MUFooter/>    
        </>
    );
};

export default Portal;
