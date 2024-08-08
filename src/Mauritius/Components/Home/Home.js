
import HeroSection from './Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';
import MUNavbar from '../Navbar/Navbar';
import MUChat from '../ChatBot/Chat';
import MUFooter from '../Footer/Footer';


function Home() {
  return (
    <>
    <MUNavbar/>
    <MUChat/>

      <HeroSection />
      <WhoweareSection />
      {/* <Test/> */}
      <Vendors />
      <Latest/>

    <MUFooter/>  

    </>
  );
}

export default Home;