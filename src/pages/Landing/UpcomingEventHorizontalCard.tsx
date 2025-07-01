

import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import calendarIcon from '@/assets/Icons/calenderIcon.png';
import Button from '@/Pages/Components/Button';

type Props = {
  image: string;
  label: string;
  title: string;
  location: string;
  date: string;
  description: string;
  uuid: string;
  ageGroup: string;
};

const UpcomingEventHorizontalCard = ({
  image,
  label,
  title,
  location,
  date,
  description,
  uuid,
  ageGroup,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-md overflow-hidden max-w-[1160px] mx-auto mb-12 border-2 border-transparent h-auto lg:h-[390px]"
      id="BOS"
    >
      <img
        src={image}
        alt={title}
        className="w-full lg:w-[390px] h-[300px] lg:h-[390px] object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
      />
      <div className="p-6 lg:p-8 flex flex-col justify-center flex-1">
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block mb-2 w-fit">
          {label}
        </span>
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-base text-gray-700 flex items-center gap-1 mb-1">
          <FaMapMarkerAlt className="text-red-500 text-sm" />
          {location}
        </p>
        <p className="text-base text-gray-700 flex items-center gap-1 mb-1">
          <img src={calendarIcon} alt="calendar" className="w-4 lg:w-[16px] mr-1 inline" />
          {date}
        </p>
        <p className="text-base text-gray-700 mt-4 font-semibold">
          Come together. Play together. Grow stronger.
        </p>
        <p
          className="text-base text-gray-600 mt-1 leading-snug overflow-hidden text-ellipsis"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            height: '60px',
          }}
        >
          {description}
        </p>
        <div className="mt-6">
          <Button
            text="Register Now"
            onClick={() =>
              navigate('/register', {
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

export default UpcomingEventHorizontalCard;
