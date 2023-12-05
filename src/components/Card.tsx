import React from 'react';

import { CGLEvent } from '@/api/notion';
import { formatDate } from '@/utils/dateUtils';

const Card = ({ title, description, link, date, location }: CGLEvent) => {
  return (
    <a
      className="m-4 flex min-h-[24rem] w-[30%] flex-col justify-between overflow-hidden rounded-lg border-2 p-4 shadow-2xl transition duration-200 hover:scale-105 breakpoint:h-[10rem] breakpoint:min-h-0 breakpoint:w-full"
      href={link}
      target="_blank"
    >
      <div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="breakpoint:hidden">{description}</p>
      </div>
      <div className="">
        <p>{formatDate(date)}</p>
        <p>{location}</p>
      </div>
    </a>
  );
};

export default Card;
