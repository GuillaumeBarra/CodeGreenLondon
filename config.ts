import type { Meetup } from './types';
import { meetups } from './types';

export const codeGreenLondon: Meetup = {
  homepage: {
    title: 'Code Green London',
    description: 'London based meetup for sustainable tech enthusiasts.',
    nextEvent: 'Our next event:',
    isTheodoSponsor: true,
    isAleiosSponsor: true,
  },
  about: {
    title: 'About us',
    aboutText:
      "Code Green London is a new event which aims to build the primary green tech community in London. You will have great networking opportunities with green tech innovators. At Code Green London, you will have the opportunity to network with green tech innovators, thought leaders, and experts from various fields. \n\nOur event is designed to foster meaningful connections and collaborations that can lead to further developments in green tech, and new partnerships with innovators in the field! Whether you're a seasoned green tech professional, an entrepreneur looking to launch a new venture, or simply interested in learning more about the latest developments in sustainability and technology, Code Green London is the place to be.",
  },
  events: {
    title: 'Events',
    upcoming: 'Upcoming',
    defaultUpcoming:
      'We are working hard to schedule an event, check back soon!',
    past: 'Past Events',
  },
};
export const reactNativeLondon: Meetup = {
  homepage: {
    title: 'React Native London',
    description:
      'The fastest way to learn, share and meet React Native experts.',
    nextEvent: 'Our next event:',
    isTheodoSponsor: true,
    isAleiosSponsor: false,
  },
  about: {
    title: 'About us',
    aboutText:
      'React Native is changing the way we build Native apps. Whether you’re a veteran developer looking to up your game, or a newcomer wanting to learn more about this awesome technology, join us...',
  },
  events: {
    title: 'Events',
    upcoming: 'Upcoming',
    defaultUpcoming:
      'We are working hard to schedule an event, check back soon!',
    past: 'Past Events',
  },
};

export const emptyMeetup: Meetup = {
  homepage: {
    title: 'No Meetup',
    description: 'No meetup information was found, unable to load content',
    nextEvent: '',
    isTheodoSponsor: false,
    isAleiosSponsor: false,
  },
  about: {
    title: '',
    aboutText: '',
  },
  events: {
    title: '',
    upcoming: '',
    defaultUpcoming: '',
    past: '',
  },
};

export const getSiteContent = (meetup: meetups): Meetup => {
  if (meetup === meetups.CGL) return codeGreenLondon;
  if (meetup === meetups.RNL) return reactNativeLondon;
  return emptyMeetup;
};

export const isMeetupString = (meetup: string): meetup is meetups => {
  return Object.values(meetups).includes(meetup as meetups);
};

export const getMeetupFromString = (meetup: string | undefined): meetups => {
  if (meetup && isMeetupString(meetup)) return meetup;
  return meetups.ERROR;
};

const meetup = getMeetupFromString(process.env.MEETUP_NAME);
export const contents = getSiteContent(meetup);
