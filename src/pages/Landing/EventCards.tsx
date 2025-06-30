import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import calendarIcon from '../../assets/Icons/calenderIcon.png';

interface EventCardProps {
  image: string;
  title: string;
  ageGroup: string;
  location: string;
  date: string;
  uuid: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, title, ageGroup, location, date, uuid }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-shrink w-full max-w-[320px] mb-6 sm:w-[260px] max-[340px]:w-[220px]">
      <div className="flex flex-col justify-between overflow-hidden rounded-[16px] border-[2px] border-[rgba(0,0,0,0.1)] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[320px] max-w-[320px] object-cover rounded-t-[16px]"
          />
          <p className="absolute top-[-10px] left-[10px] z-[1] inline bg-white px-2 py-1 text-[10px] sm:text-[14px] md:text-[16px] rounded-[8px] text-gray-500 font-medium">
            Age group: {ageGroup}
          </p>
        </div>

        <div className="relative px-4 pt-6 pb-0 sm:px-4 sm:pt-4">
          <h3 className="text-[#111827] font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-2 leading-tight overflow-hidden text-ellipsis line-clamp-2 h-[50px] sm:h-[56px] md:h-[60px]">
            {title}
          </h3>

          <p className="flex items-center text-gray-600 text-[12px] sm:text-[16px] mb-1 gap-1">
            <FaMapMarkerAlt className="text-red-500 text-[12px] sm:text-[18px]" />
            {location}
          </p>

          <p className="flex items-center text-gray-600 text-[12px] sm:text-[16px] mb-4 gap-1">
            <img src={calendarIcon} alt="calendar" className="w-[12px] sm:w-[16px]" />
            {date}
          </p>

          <button
            className="relative left-1/2 -translate-x-1/2 sm:left-[50px] sm:translate-x-0 mt-4 sm:mt-0 mb-4 text-[12px] sm:text-[18px] md:text-[22px] font-medium text-[#111827] px-6 sm:px-[24px] py-[6px] sm:py-[8px] rounded-t-[12px] sm:rounded-t-[24px] bg-white border-[2px] border-transparent w-fit cursor-pointer z-10
              bg-gradient-to-r from-white to-white bg-clip-padding
              hover:text-black transition-all duration-300
              before:content-[''] before:absolute before:top-0 before:left-[-50%] before:w-[200%] before:h-full
              before:bg-gradient-to-r before:from-red-500 before:via-yellow-400 before:to-indigo-600
              before:blur-[12px] before:opacity-0 before:transition-opacity before:duration-800 before:z-[-1]
              hover:before:opacity-40"
            onClick={() =>
              navigate('/register', {
                state: { uuid, image, age: ageGroup, title, location, date },
              })
            }
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
