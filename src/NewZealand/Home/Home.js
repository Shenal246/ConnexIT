
import HeroSection from './Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';
import NZNavbar from "../Navbar/Navbar";
import NZChat from "../ChatBot/Chat";
import NZFooter from "../Footer/Footer";
import React from "react";


function Home() {
  return (
    <>
      <NZNavbar />
      <NZChat />

      <HeroSection />
      <WhoweareSection />
      <Vendors />
      <Latest />
      <NZFooter />
    </>
  );
}

export default Home;