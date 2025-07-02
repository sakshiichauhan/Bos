/* ───────── DynamicCard.tsx ──────────────────────────────────────────
   A small, stateless banner card showing event image, age group,
   title, venue and date. 100 % Tailwind, no external CSS.            */
/* ------------------------------------------------------------------ */
import { FaMapMarkerAlt } from "react-icons/fa";
import CalendarIcon       from "@/assets/Icons/calenderIcon.png";

export interface DynamicCardProps {
  image:    string;
  age:      string;
  title:    string;
  location: string;
  date:     string;
}

const DynamicCard: React.FC<DynamicCardProps> = ({
  image,
  age,
  title,
  location,
  date,
}) => (
  <div className="flex flex-col sm:flex-row gap-4 p-4 border-2 border-[#DFDFDF] rounded-lg mb-8 w-full max-w-full">
    <img
      src={image}
      alt={title}
      className="w-full sm:w-32 h-32 object-cover rounded"
    />

    <div className="flex-1 space-y-1">
      <p className="inline-block text-sm font-medium bg-[#F8F8F8] text-[#4B4B4B] px-2 py-1 rounded">
        Age Group&nbsp;:&nbsp;{age}
      </p>

      <h3 className="text-xl font-bold truncate">{title}</h3>

      <p className="flex items-center text-[17px] md:text-lg text-[#4B4B4B] gap-2">
        <FaMapMarkerAlt className="text-red-600 h-4 w-4" />
        {location}
      </p>

      <p className="flex items-center text-[17px] md:text-lg text-[#4B4B4B] gap-2">
        <img src={CalendarIcon} className="h-4 w-4" alt="calendar" />
        {date}
      </p>
    </div>
  </div>
);

export default DynamicCard;
