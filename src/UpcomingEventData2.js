import useListing from "./Hooks/useListing";
import img from "./assets/TempPhoto.png";

const API_BASE = "https://hswf.network/";

export default function useUpcomingEventData2() {
  const { data, loading, error } = useListing();

  const eventList = Array.isArray(data?.data) ? data.data : [];

  const mappedData = eventList.map((item, idx) => {
    let image = img;
    if (item.event_banner) {
      if (item.event_banner.startsWith("http")) {
        image = item.event_banner;
      } else {
        image = API_BASE + item.event_banner.replace(/^\/+/, "");
      }
    }

    return {
      id: item.id || idx,
      uuid: item.uuid, 
      image,
      label: "Bond Over ",
      title: item.name || item.title,
      location: item.venue_name || "",
      date: item.start_date
        ? formatEventDate(item.start_date, item.end_date)
        : "",
      description: item.description || "",
    };
  });
  const upcoming_data_count_bigcards = eventList.length;

  return { data: mappedData, loading, error, upcoming_data_count_bigcards };
}

function formatEventDate(start, end) {
  const opts = { year: "numeric", month: "short", day: "numeric" };
  const startDate = new Date(start);
  const endDate = new Date(end);
  return `${startDate.toLocaleDateString(
    "en-GB",
    opts
  )} – ${endDate.toLocaleDateString("en-GB", opts)}`;
}
