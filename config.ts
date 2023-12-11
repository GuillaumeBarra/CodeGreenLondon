import type { Meetup } from 'types';
import { meetups } from 'types';

const codegreenlondon: Meetup = {
  homepage: {
    title: 'Code Green London',
    description: 'London based meetup for sustainable tech enthusiasts.',
    nextEvent: 'Our next event:',
    isTheodoSponsor: true,
    isAleiosSponsor: true,
  },
  about: {
    title: 'About us',
    infoParagraph1:
      'Code Green London is a new event which aims to build the primary green tech community in London. You will have great networking opportunities with green tech innovators. At Code Green London, you will have the opportunity to network with green tech innovators, thought leaders, and experts from various fields.',
    infoParagraph2:
      "Our event is designed to foster meaningful connections and collaborations that can lead to further developments in green tech, and new partnerships with innovators in the field! Whether you're a seasoned green tech professional, an entrepreneur looking to launch a new venture, or simply interested in learning more about the latest developments in sustainability and technology, Code Green London is the place to be.",
  },
  events: {
    title: 'Events',
    upcoming: 'Upcoming',
    defaultUpcoming:
      'We are working hard to schedule an event, check back soon!',
    past: 'Past Events',
  },
};
const reactnativelondon: Meetup = {
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
    infoParagraph1:
      'React Native is changing the way we build Native apps. Whether you’re a veteran developer looking to up your game, or a newcomer wanting to learn more about this awesome technology, join us...',
    infoParagraph2: '',
  },
  events: {
    title: 'Events',
    upcoming: 'Upcoming',
    defaultUpcoming:
      'We are working hard to schedule an event, check back soon!',
    past: 'Past Events',
  },
};

const defaultContent: Meetup = {
  homepage: {
    title: 'No Meetup',
    description: 'No meetup information was found, unable to load content',
    nextEvent: '',
    isTheodoSponsor: false,
    isAleiosSponsor: false,
  },
  about: {
    title: '',
    infoParagraph1: '',
    infoParagraph2: '',
  },
  events: {
    title: '',
    upcoming: '',
    defaultUpcoming: '',
    past: '',
  },
};

const getSiteContent = (meetup: meetups): Meetup => {
  if (meetup === 'codegreenlondon') return codegreenlondon;
  if (meetup === 'reactnativelondon') return reactnativelondon;
  return defaultContent;
};

const getMeetupFromString = (meetup: string): meetups => {
  if (meetup === 'codegreenlondon') return meetups.codegreenlondon;
  if (meetup === 'reactnativelondon') return meetups.reactnativelondon;
  return meetups.default;
};

const meetup = getMeetupFromString(process.env.MEETUP_NAME ?? 'default');
export const contents = getSiteContent(meetup);
