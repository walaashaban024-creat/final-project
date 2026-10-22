import React from 'react';
import Allcomp from './Components/Allcomp';
import Footer from './Components/Footer';
import Banner from './Home/Banner';
import Features from './Home/Features';
import VideoSec from './Home/VideoSec';
import VideoCon from './Home/VideoCon';
import FunFacts from './Home/FunFacts';
import BestDeal from './Home/BestDeal';
import PropertiesSec from './Home/PropertiesSec';
import ContactSec from './Home/ContactSec';
import ContactContent from './Home/ContactContent';
function App() {
  return (
    <div>
      <Allcomp />
      <Banner />
      <Features />
      <VideoSec />
      <VideoCon />
      <FunFacts />
      <BestDeal />
      <PropertiesSec />
      <ContactSec />
      <ContactContent />
      
      <Footer />
    </div>
  );
}

export default App;