import { CGLEvent, parseProperties, queryDatabase } from '@/api/notion';
import Card from '@/components/Card';

import Navbar from '@/components/Navbar';
import { getPastEvents, getUpcomingEvents, sortEvents } from '@/utils/dateUtils';
import { contents } from 'contents';
import { NextPage } from 'next';
import Head from 'next/head'

type EventProps = {
  events: CGLEvent[];
};

const Events: NextPage<EventProps> = ({events}) => {
  const definedEvents = events.filter(({title}) => title.trim() !== '');
  const sortedEvents = sortEvents(definedEvents)
  const pastEvents = getPastEvents(sortedEvents)
  const upcomingEvents = getUpcomingEvents(sortedEvents)
  return (
    <>
      <Head>
        <title>{contents.events.title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar />
        <div className='flex pt-8 justify-center items-center px-8 flex-col breakpoint:w-full breakpoint:items-center'>
          <div className='flex w-4/5 h-44 p-4 flex-col breakpoint:w-full breakpoint:h-28'>
            <h1>{contents.events.title}</h1>
          </div>
          <h3 className='flex pb-4 text-xl w-4/5 px-4 breakpoint:w-full'>{contents.events.upcoming}</h3>
            {upcomingEvents.length === 0 && <span className='flex pb-4 w-4/5 px-4 breakpoint:w-full'>{contents.events.defaultUpcoming}</span>}
            {upcomingEvents.length > 0 &&
              <div className='flex flex-wrap pb-8 w-full justify-center'>
                {upcomingEvents.map(({ title, description, link, date, location }, index) => (
                <Card title={title} description={description} link={link} id={index.toString()} date={date} location={location}/>
              ))}
              </div>
            }
            <h3 className='flex pb-4 pt-8 text-xl w-4/5 px-4 breakpoint:w-full'>{contents.events.past}</h3>
            <div className='flex flex-wrap pb-8 w-full justify-center'>
              {pastEvents.map(({ title, description, link, date, location }, index) => (
                <Card title={title} description={description} link={link} id={index.toString()} date={date} location={location}/>
              ))}
            </div>
        </div>
    </>
  );
};

export default Events

export async function getStaticProps() {
  const database = await queryDatabase();
  const events = parseProperties(database);

  return {
    props: {
      events,
    },
  };
}