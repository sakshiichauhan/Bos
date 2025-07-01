
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import calendarIcon from '@/assets/Icons/calenderIcon.png';
import Button from '@/Pages/Components/Button';

interface EventCardProps {
  image: string;
  title: string;
  ageGroup: string;
  location: string;
  date: string;
  uuid: string;
}

const EventCard = ({
  image,
  title,
  ageGroup,
  location,
  date,
  uuid,
}: EventCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mb-6">
      <div className="w-[320px] rounded-[16px] bg-white border-[2px] border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden justify-between relative mb-6">
        
        {/* Image */}
        <img
          src={image}
          alt={title}
      
          
        />

        {/* Body */}
        <div className="relative px-[18px] pt-6 pb-4">

          {/* Age group badge */}
          <p className="absolute top-[-10px] left-[10px] z-[1] bg-white inline-block px-[8px] py-[4px] rounded-[8px] text-[16px] text-gray-500 ">
            Age group: {ageGroup}
          </p>

          {/* Title */}
          <h3 className="text-[20px] font-bold text-gray-900 mb-2 h-[60px] overflow-hidden text-ellipsis line-clamp-2">
            {title}
          </h3>

          {/* Location */}
          <p className="text-[18px] text-gray-600 flex items-center gap-[6px] mb-1">
            <FaMapMarkerAlt className="text-red-500 text-[18px]" />
            {location}
          </p>

          {/* Date */}
          <p className="text-[18px] text-gray-600 flex items-center gap-[6px] mb-4">
            <img src={calendarIcon} alt="calendar" className="w-4 h-4" />
            {date}
          </p>

          {/* Button */}
          <div className="relative left-[50px] bottom-[-2px] p-[2px] rounded-t-[24px]">
            <Button
              onClick={() =>
                navigate('/register', {
                  state: { uuid, image, age: ageGroup, title, location, date },
                })
              }
              text=" Register Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
