import { contents } from 'config';
import { NextPage } from 'next';
import Head from 'next/head';

import { CGLEvent, parseProperties, queryDatabase } from '@/api/notion';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import { getPastEvents, getUpcomingEvents } from '@/utils/dateUtils';

type EventProps = {
  events: CGLEvent[];
};

const Events: NextPage<EventProps> = ({ events }) => {
  const pastEvents = getPastEvents(events);
  const upcomingEvents = getUpcomingEvents(events);
  return (
    <>
      <Head>
        <title>{contents.events.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-8 pt-8 breakpoint:w-full breakpoint:items-center">
        <div className="flex h-44 w-4/5 flex-col p-4 breakpoint:h-28 breakpoint:w-full">
          <h1>{contents.events.title}</h1>
        </div>
        <h3 className="flex w-4/5 px-4 pb-4 text-xl breakpoint:w-full">
          {contents.events.upcoming}
        </h3>
        {upcomingEvents.length === 0 && (
          <span className="flex w-4/5 px-4 breakpoint:w-full">
            {contents.events.defaultUpcoming}
          </span>
        )}
        {upcomingEvents.length > 0 && (
          <div className="flex w-4/5 flex-wrap justify-start pb-8">
            {upcomingEvents.map(
              ({ title, description, link, date, location }, index) => (
                <Card
                  key={index}
                  title={title}
                  description={description}
                  link={link}
                  id={index.toString()}
                  date={date}
                  location={location}
                />
              ),
            )}
          </div>
        )}
        <h3 className="flex w-4/5 px-4 pb-4 pt-8 text-xl breakpoint:w-full">
          {contents.events.past}
        </h3>
        <div className="flex w-4/5 flex-wrap justify-start pb-8">
          {pastEvents.map(
            ({ title, description, link, date, location }, index) => (
              <Card
                key={index}
                title={title}
                description={description}
                link={link}
                id={index.toString()}
                date={date}
                location={location}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Events;

export async function getStaticProps() {
  const database = await queryDatabase();
  const events = parseProperties(database);

  return {
    props: {
      events,
    },
  };
}
