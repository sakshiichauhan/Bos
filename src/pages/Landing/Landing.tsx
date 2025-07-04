import Navbar from "@/components/Layouts/Navbar";
import HeroSection from "@/pages/Landing/HeroSection";
import BOShead from "@/pages/Landing/BOShead";
import HeritageEvents from "@/pages/Landing/CelebratingHeritage";
import UpcomingEventHorizontalCard from "@/pages/Landing/UpcomingEventHorizontalCard";
import EventCard from "@/pages/Landing/UpcomingEventCard";
import JoinTheMovement from "@/pages/Landing/JoinTheMovement";
import SponsorLogos from "@/pages/Landing/SponsorLogos";
import WhySponser from "@/pages/Landing/WhySponser";
import PartnersSection from "@/pages/Landing/PartnerInterest";
import InstaFastTrack from "@/pages/Landing/InstaTrack";
import CommunityTalks from "@/pages/Landing/CommunityTalk";
import StayConnected from "@/pages/Landing/StayConnected";
import WelfareFoundation from "@/pages/Landing/WelfareFoundation";
import useEvents from "@/hooks/useEvents";

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
      return (
        <p className="text-center py-4">No upcoming events at the moment.</p>
      );
    }

    if (eventsCount < 3) {
      return (
        <div className="gridContainer">
          {events.map((event) => (
            <UpcomingEventHorizontalCard key={event.id} {...event} />
          ))}
        </div>
      );
    }

    return (
      <div className="outter">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
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

      <InstaFastTrack />
      <CommunityTalks />
      <PartnersSection />
      <SponsorLogos />
      <WhySponser />
      <WelfareFoundation />
      <StayConnected />
    </div>
  );
};

export default Landing;
