import Navbar from "../../../src/components/Layouts/Navbar";
import HeroSection from "../../Pages/Landing/HeroSection";
import BOShead from "./BOShead";
import HeritageEvents from "./CelebratingHeritage";
import UpcomingEventHorizontalCard from "./UpcomingEventHorizontalCard";
import EventCard from "./UpcomingEventCard";
import JoinTheMovement from "./JoinTheMovement";
import SponsorLogos from "./SponsorLogos";
import WhySponser from "./WhySponser";
import PartnersSection from "./PartnerInterest";
import InstaFastTrack from "./InstaTrack";
import CommunityTalks from "./CommunityTalk";
import StayConnected from "./StayConnected";
import WelfareFoundation from "./WelfareFoundation";

import useEvents from "@/Hooks/useEvents";

const Landing = () => {
  const { events, loading, error, eventsCount } = useEvents();

  const renderEvents = () => {
    if (loading) {
      return <p className="text-center py-4">Loading events...</p>;
    }

    if (error) {
      return <p className="text-center py-4 text-red-500">{error}</p>;
    }

    if (!events || events.length === 0) {
      return <p className="text-center py-4">No upcoming events at the moment.</p>;
    }

    if (eventsCount < 3) {
      return (
        <div className="gridContainer">
          {events.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      );
    }

    return (
      <div className="outter">
        {events.map(event => (
          <UpcomingEventHorizontalCard key={event.id} {...event} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeritageEvents />
      <section>
        <BOShead />
        {renderEvents()}
      </section>
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
