
import HeroSection from '../Home/Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';
import NPLNavbar from '../Navbar/Navbar';
import NPLChat from '../ChatBot/Chat';
import NPLFooter from '../Footer/Footer';


function Home() {
  return (
    <>
<NPLNavbar/>
<NPLChat/>
      <HeroSection />
      <WhoweareSection />
      {/* <Test/> */}
      <Vendors />
      <Latest/>
<NPLFooter/>
    </>
  );
}

export default Home;