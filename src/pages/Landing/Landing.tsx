
import Navbar from "@/components/Layouts/Navbar";
import HeroSection from "@/Pages/Landing/HeroSection";
import BOShead from "@/Pages/Landing/BOShead";
import HeritageEvents from "@/Pages/Landing/CelebratingHeritage";
import UpcomingEventHorizontalCard from "@/Pages/Landing/UpcomingEventHorizontalCard";
import EventCard from "@/Pages/Landing/UpcomingEventCard";
import JoinTheMovement from "@/Pages/Landing/JoinTheMovement";
import SponsorLogos from "@/Pages/Landing/SponsorLogos";
import WhySponser from "@/Pages/Landing/WhySponser";
import PartnersSection from "@/Pages/Landing/PartnerInterest";
import InstaFastTrack from "@/Pages/Landing/InstaTrack";
import CommunityTalks from "@/Pages/Landing/CommunityTalk";
import StayConnected from "@/Pages/Landing/StayConnected";
import WelfareFoundation from "@/Pages/Landing/WelfareFoundation";
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
