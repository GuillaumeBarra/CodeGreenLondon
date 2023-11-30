import AleiosLink from '@/assets/AleiosLink';
import TheodoLink from '@/assets/TheodoLink';
import Navbar from '@/components/Navbar';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Green London</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar />
        <div className='flex pt-8 items-center justify-center px-4 space-x-8 breakpoint:flex-col-reverse breakpoint:space-x-0'>
          <div className='flex w-1/2 h-80 p-4 flex-col breakpoint:items-start breakpoint:w-full'>
            <h1 className='pb-4'>Code Green London</h1>
            <span className='pl-1 text-lg'>London based meetup for sustainable tech enthusiasts.</span>
            <span className='py-8'> Code Green London is a new event which aims to build the primary green tech community in London. You will have great networking opportunities with green tech innovators.

At Code Green London, you will have the opportunity to network with green tech innovators, thought leaders, and experts from various fields. Our event is designed to foster meaningful connections and collaborations that can lead to further developments in green tech, and new partnerships with innovators in the field!

Whether you're a seasoned green tech professional, an entrepreneur looking to launch a new venture, or simply interested in learning more about the latest developments in sustainability and technology, Code Green London is the place to be.</span>
          <div className='flex flex-row -ml-7'>
            <TheodoLink />
            <AleiosLink />
          </div>
          </div>
          </div>
    </>
  );
};
