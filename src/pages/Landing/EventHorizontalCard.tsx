import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import calendarIcon from '../../assets/Icon/calenderIcon.png';
import Button from '../../components/ui/Buttons';
import { useNavigate } from 'react-router-dom';

interface EventHorizontalCardProps {
  image: string;
  label: string;
  title: string;
  location: string;
  date: string;
  description: string;
  uuid: string;
  ageGroup: string;
}

const EventHorizontalCard: React.FC<EventHorizontalCardProps> = ({
  image,
  label,
  title,
  location,
  date,
  description,
  uuid,
  ageGroup,
}) => {
  const navigate = useNavigate();

  return (
    <div
      id="BOS"
      className="flex flex-row w-full max-w-[1160px] h-[390px] bg-white rounded-[16px] shadow-[0_8px_16px_rgba(0,0,0,0.08)] border-2 border-transparent mb-[46px] overflow-hidden mx-auto
                 lg:flex-col lg:w-[500px] lg:h-auto sm:w-[300px] sm:flex-col"
    >
      <img
        src={image}
        alt={title}
        className="w-[390px] h-[390px] object-cover rounded-l-[16px]
                   lg:w-[500px] lg:h-[500px] lg:rounded-t-[16px] lg:rounded-b-none sm:w-[300px] sm:h-[300px]"
      />
      <div
        className="flex flex-col justify-center px-[31px] py-[24px] flex-1
                   max-[764px]:px-4 max-[764px]:py-4"
      >
        <span className="text-[16px] font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mb-2 w-fit text-sm max-[764px]:text-[14px]">
          {label}
        </span>
        <h3 className="text-[24px] font-bold text-[#111827] mb-2 max-[764px]:text-[16px]">
          {title}
        </h3>
        <p className="text-[18px] text-gray-700 flex items-center gap-[6px] mb-[2px] max-[764px]:text-[12px] max-[764px]:gap-[4px]">
          <FaMapMarkerAlt className="text-red-500 text-[18px] max-[764px]:text-[12px]" />
          {location}
        </p>
        <p className="text-[18px] text-gray-700 flex items-center gap-[6px] mb-[2px] max-[764px]:text-[12px] max-[764px]:gap-[4px]">
          <img
            src={calendarIcon}
            alt="calendar"
            className="w-[16px] max-[764px]:w-[12px] mr-[6px] max-[764px]:mr-[4px]"
          />
          {date}
        </p>

        <p className="text-[18px] text-[#4B4B4B] mt-6 font-medium max-[764px]:text-[14px]">
          <strong>Come together. Play together. Grow stronger.</strong>
        </p>

        <p
          className="text-[18px] text-gray-600 mt-[2px] leading-[1.5]
                     overflow-hidden text-ellipsis line-clamp-2 h-[60px]
                     lg:h-[110px] lg:line-clamp-4 sm:h-auto sm:line-clamp-5 max-[764px]:text-[14px]"
        >
          {description}
        </p>

        <div className="mt-6 max-[764px]:mt-4">
          <Button
            text="Register Now"
            className="text-[16px] max-[764px]:text-[14px]"
            onClick={() =>
              navigate(`/register`, {
                state: {
                  uuid,
                  image,
                  age: ageGroup,
                  title,
                  location,
                  date,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EventHorizontalCard;
