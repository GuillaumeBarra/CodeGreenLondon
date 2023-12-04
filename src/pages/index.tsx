import AleiosLink from '@/components/AleiosLink';
import TheodoLink from '@/components/TheodoLink';
import Navbar from '@/components/Navbar';
import Head from 'next/head'
import { contents } from 'contents';

export default function Home() {
  return (
    <>
      <Head>
        <title>{contents.homepage.title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar />
        <div className='flex pt-8 items-center justify-center px-4 space-x-8 breakpoint:flex-col-reverse breakpoint:space-x-0'>
          <div className='flex w-1/2 h-80 p-4 flex-col breakpoint:items-start breakpoint:w-full'>
            <h1 className='pb-4'>{contents.homepage.title}</h1>
            <span className='pl-1 text-lg'>{contents.homepage.description}</span>
            <span className='py-8'>{contents.homepage.about.paragraph1}</span>
            <span className='pb-8'>{contents.homepage.about.paragraph2}</span>
          <div className='flex flex-row -ml-7'>
            {contents.homepage.showTheodo && <TheodoLink />}
            {contents.homepage.showAleios &&<AleiosLink />}
          </div>
          </div>
          </div>
    </>
  );
};
