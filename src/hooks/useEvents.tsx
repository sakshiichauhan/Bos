import { useEffect, useState } from "react";
import axios from "axios";
import { LISTING_API } from "../config";
import img from "@/assets/TempPhoto.png";

export interface Event {
  id: number;
  uuid: string;
  image: string;
  title: string;
  ageGroup: string;
  location: string;
  date: string;
  description: string;
  label: string;
}

function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(LISTING_API);
        
        if (!isMounted) return;

        const eventList = Array.isArray(response.data?.data) ? response.data.data : [];
        
        const mappedEvents = eventList.map((item: any, idx: number) => {
          let image = img;
          if (item.event_banner) {
            if (item.event_banner.startsWith("http")) {
              image = item.event_banner;
            } else {
              image = `${LISTING_API.split('/api')[0]}/${item.event_banner.replace(/^\/+/, "")}`;
            }
          }

          return {
            id: item.id || idx,
            uuid: item.uuid,
            image,
            label: "Bond Over",
            title: item.name || item.title || "",
            ageGroup: item.category_data?.title || "",
            location: item.venue_name || "",
            date: item.start_date
              ? formatEventDate(item.start_date, item.end_date)
              : "",
            description: item.description || "",
          };
        });

        setEvents(mappedEvents);
        setError("");
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || "Failed to fetch events");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    events,
    loading,
    error,
    eventsCount: events.length
  };
}

function formatEventDate(start: string, end: string) {
  const opts: Intl.DateTimeFormatOptions = { 
    year: "numeric", 
    month: "short", 
    day: "numeric" 
  };
  const startDate = new Date(start);
  const endDate = new Date(end);
  return `${startDate.toLocaleDateString("en-GB", opts)} – ${endDate.toLocaleDateString("en-GB", opts)}`;
}

export default useEvents;
