import React, { useEffect } from 'react';
import './Navbar.css';
import Logo from '../../images/ConnexIT.png';
import { NavLink } from "react-router-dom";

import sin from '../../images/FlagIcon/singapore.png';
import aus from '../../images/FlagIcon/australia.png';
import ban from '../../images/FlagIcon/bangladesh.png';
import bru from '../../images/FlagIcon/brunei.png';
import cam from '../../images/FlagIcon/cambodia.png';
import wor from '../../images/FlagIcon/world.png';
import ind from '../../images/FlagIcon/india.png';
import laos from '../../images/FlagIcon/laos.png';
import mld from '../../images/FlagIcon/maldives.png';
import myn from '../../images/FlagIcon/myanmar.png';
import mrt from '../../images/FlagIcon/mauritius.png';
import sl from '../../images/FlagIcon/sri-lanka.png';
import tnz from '../../images/FlagIcon/tanzania.png';
import tld from '../../images/FlagIcon/thailand.png';
import nz from '../../images/FlagIcon/new-zealand (1).png';

function Navbar() {

  useEffect(() => {
    // Apply .scrolled class to the body as the page is scrolled down
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToggle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }

    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

    // Hide mobile nav on same-page/hash links
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    // Toggle mobile nav dropdowns
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        if (document.querySelector('.mobile-nav-active')) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        }
      });
    });

    // Cleanup function
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.removeEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.removeEventListener('click', function (e) {
          if (document.querySelector('.mobile-nav-active')) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
          }
        });
      });
    };
  }, []); // empty dependency array ensures that this effect runs only once on component mount

  return (
    <>

      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="index.html" className="logo d-flex align-items-center me-auto">
            <NavLink to="/NZ" activeClassName='active-link' exact><img src={Logo} alt="Logo" /></NavLink>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul class="no-bullets">
              <NavLink to="/NZ/About" activeClassName='active-link' exact><li><a className="">About Us</a></li></NavLink>
              <NavLink to="/NZ/Solutions" activeClassName='active-link' exact><li><a className="">Solutions</a></li></NavLink>
              <li className="dropdown countries"><a href="#" className='toggle-dropdown'>
                <span className='toggle-dropdown'>Events&nbsp; </span> <i className="bi bi-chevron-down toggle-dropdown arrow1 " ></i></a>
                <ul className=''>
                  <div >
                    <NavLink to="/NZ/Events&News" activeClassName='active-link' exact>
                      <a>Events & News</a>
                    </NavLink>
                    <NavLink to="/NZ/UpcomingNews" activeClassName='active-link' exact>
                      <a>Upcoming News</a>
                    </NavLink>
                    {/* <NavLink to="/NZ/Blog" activeClassName='active-link' exact>
                        <a>Blogs</a>
                      </NavLink> */}
                  </div>
                </ul>
              </li>
              <NavLink to="/NZ/Portal" activeClassName='active-link' exact><li><a className="">Portal</a></li></NavLink>
              <li className="dropdown countries"><a href="#" className='toggle-dropdown'>
                <span className='toggle-dropdown'>Country&nbsp;<img src={nz} alt=" Flag" className='flag flagNavbar' /> </span> <i className="bi bi-chevron-down toggle-dropdown arrow " ></i></a>
                <ul className='container1'>
                  <div class="scrollable-menu flagName">
                    <li><a href="/AU"><img src={aus} alt=" Flag" className='flag' /> Australia</a></li>
                    <li><a href="#"><img src={ban} alt=" Flag" className='flag' /> Bangladesh</a></li>
                    <li><a href="/Brn"><img src={bru} alt=" Flag" className='flag' />Brunei</a></li>
                    <li><a href="/KH"><img src={cam} alt=" Flag" className='flag' />Cambodia</a></li>
                    <li><a href="#"><img src={ind} alt=" Flag" className='flag' />India</a></li>
                    <li><a href="#"><img src={laos} alt=" Flag" className='flag' />Laos</a></li>
                    <li><a href="#"><img src={mld} alt=" Flag" className='flag' />Maldives</a></li>
                    <li><a href="#"><img src={myn} alt=" Flag" className='flag' />Myanmar</a></li>
                    <li><a href="/MU"><img src={mrt} alt=" Flag" className='flag' />Mauritius</a></li>
                    {/* <li><a href="#"><img src={nz} alt=" Flag" className='flag' />New Zealand</a></li> */}
                    <li><a href="#"><img src={sin} alt=" Flag" className='flag' /> Singapore</a></li>
                    <li><a href="/SL"><img src={sl} alt=" Flag" className='flag' />Sri Lanka</a></li>
                    <li><a href="#"><img src={tnz} alt=" Flag" className='flag' />Tanzania</a></li>
                    <li><a href="/TH"><img src={tld} alt=" Flag" className='flag' />Thailand</a></li>
                    <li><a href="#"><img src={wor} alt=" Flag" className='flag' />UAE</a></li>
                  </div>
                </ul>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <NavLink to="/NZ/ContactUs" activeClassName='active-link' className="btn-getstarted" >Contact Us</NavLink>
        </div>
      </header>
    </>
  );
}

export default Navbar;