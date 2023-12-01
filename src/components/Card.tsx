import { CGLEvent } from '@/api/notion';
import { formatDate } from '@/utils/dateUtils';
import React from 'react';

const Card = ({title, description, link, date, location}: CGLEvent) => {
  console.log("description", description)
  return (
    <a className="flex flex-col justify-between w-1/4 min-h-[24rem] rounded-lg border-2 overflow-hidden m-4 p-4 breakpoint:w-full breakpoint:h-[10rem] breakpoint:min-h-0"
    href={link}
    target="_blank">

      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="breakpoint:hidden">{description}</p>
      </div>
      <div>
          <p>{formatDate(date)}</p>
          <p>{location}</p>
      </div>
    </a>
  );
};

export default Card;