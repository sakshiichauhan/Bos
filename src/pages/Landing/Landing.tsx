import Navbar from "../../../src/components/Layouts/Navbar";
import HeroSection from "../../Pages/Landing/HeroSection";
import HeritageEvents from "./CelebratingHeritage";
import BOShead from "./BOShead";
import JoinTheMovement from "./JoinTheMovement";
import SponsorLogos from "./SponsorLogos";
import WhySponser from "./WhySponser";
import PartnersSection from "./PartnerInterest";
import InstaFastTrack from "./InstaTrack";
import CommunityTalks from "./CommunityTalk";
import StayConnected from "./StayConnected";
import WelfareFoundation from "./WelfareFoundation";

const Landing = () => {
  
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeritageEvents />
      <BOShead />
      <JoinTheMovement />
      <SponsorLogos />
     
      <WhySponser />
       <PartnersSection />
      <InstaFastTrack />
      <CommunityTalks />
      <StayConnected />
      <WelfareFoundation />

      

      
      
    </div>
  );
};

export default Landing;
