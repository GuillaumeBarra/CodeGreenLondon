import { CGLEvent } from '@/api/notion';
import { formatDate } from '@/utils/dateUtils';
import React from 'react';

const Card = ({title, description, link, date, location}: CGLEvent) => {
  console.log("description", description)
  return (
    <a className="w-1/4 h-[23rem] rounded-lg border-2 overflow-hidden m-4 breakpoint:w-full"
    href={link}
    target="_blank">

      <div className="relative p-4 bg-transparent h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className=" breakpoint:hidden">{description}</p>
        <div className='absolute inset-x-0 bottom-0 p-4'>
          <p>{formatDate(date)}</p>
          <p className=" breakpoint:hidden">{location}</p>
        </div>
        <p className=" invisible breakpoint:visible">Read more...</p>
      </div>
    </a>
  );
};

export default Card;