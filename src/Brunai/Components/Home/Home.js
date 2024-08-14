
import HeroSection from '../Home/Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';
import BrnNavbar from '../Navbar/Navbar';
import BrnChat from '../ChatBot/Chat';
import BrnFooter from '../Footer/Footer';


function Home() {
  return (
    <>
<BrnNavbar/>
<BrnChat/>
      <HeroSection />
      <WhoweareSection />
      {/* <Test/> */}
      <Vendors />
      <Latest/>
<BrnFooter/>
    </>
  );
}

export default Home;