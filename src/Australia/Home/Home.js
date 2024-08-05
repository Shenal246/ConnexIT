
import HeroSection from './Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';
import AUNavbar from "../Navbar/Navbar";
import AUChat from "../ChatBot/Chat";
import AUFooter from "../Footer/Footer";
import React from "react";


function Home() {
  return (
    <>
      <AUNavbar />
      <AUChat />

      <HeroSection />
      <WhoweareSection />
      <Vendors />
      <Latest />
      <AUFooter />
    </>
  );
}

export default Home;