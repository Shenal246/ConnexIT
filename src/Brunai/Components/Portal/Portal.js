// import React from 'react';
import './Portal.css';
import { useTranslation } from 'react-i18next';
import BrnNavbar from '../Navbar/Navbar';
import BrnChat from '../ChatBot/Chat';
import BrnFooter from '../Footer/Footer';

const Portal = () => {

    const { t } = useTranslation();
    const { Brnptl1, Brnptl2
        } = t('Brnportalsec', { returnObjects: true });

    return (
        <>
        <BrnNavbar/>
        <BrnChat/>
            <div className='portal'>
                <p><span className='one'>{Brnptl1}</span><span className='two'> {Brnptl2}</span> </p>
            </div>
        <BrnFooter/>
        </>
    );
};

export default Portal;
