// import React from 'react';
import './Portal.css';
import { useTranslation } from 'react-i18next';
import NPLNavbar from '../Navbar/Navbar';
import NPLChat from '../ChatBot/Chat';
import NPLFooter from '../Footer/Footer';

const Portal = () => {

    const { t } = useTranslation();
    const { NPLptl1, NPLptl2
        } = t('NPLportalsec', { returnObjects: true });

    return (
        <>
        <NPLNavbar/>
        <NPLChat/>
            <div className='portal'>
                <p><span className='one'>{NPLptl1}</span><span className='two'> {NPLptl2}</span> </p>
            </div>
        <NPLFooter/>
        </>
    );
};

export default Portal;
