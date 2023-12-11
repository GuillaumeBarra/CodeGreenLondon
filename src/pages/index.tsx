import { contents } from 'config';
import Head from 'next/head';

import AleiosLink from '@/components/AleiosLink';
import Navbar from '@/components/Navbar';
import TheodoLink from '@/components/TheodoLink';

export default function Home() {
  return (
    <>
      <Head>
        <title>{contents.homepage.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex items-center justify-center space-x-8 px-4 pt-8 breakpoint:flex-col-reverse breakpoint:space-x-0">
        <div className="flex h-80 w-1/2 flex-col p-4 breakpoint:w-full breakpoint:items-start">
          <h1 className="pb-4">{contents.homepage.title}</h1>
          <span className="pl-1 text-lg">{contents.homepage.description}</span>
          <span className="py-8">{contents.homepage.about.paragraph1}</span>
          <span className="pb-8">{contents.homepage.about.paragraph2}</span>
          <div className="-ml-7 flex flex-row">
            {contents.homepage.showTheodo && <TheodoLink />}
            {contents.homepage.showAleios && <AleiosLink />}
          </div>
        </div>
      </div>
    </>
  );
}
