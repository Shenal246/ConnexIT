// import React from 'react';
import './Portal.css';
import { useTranslation } from 'react-i18next';
import BrnNavbar from '../Navbar/Navbar';
import BrnChat from '../ChatBot/Chat';
import BrnFooter from '../Footer/Footer';

const Portal = () => {

    const { t } = useTranslation();
    const { Thaiptl1, Thaiptl2
        } = t('Thaiportalsec', { returnObjects: true });

    return (
        <>
        <BrnNavbar/>
        <BrnChat/>
            <div className='portal'>
                <p><span className='one'>{Thaiptl1}</span><span className='two'> {Thaiptl2}</span> </p>
            </div>
        <BrnFooter/>
        </>
    );
};

export default Portal;
