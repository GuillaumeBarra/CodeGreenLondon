export type Meetup = {
  homepage: {
    title: string;
    description: string;
    nextEvent: string;
    isTheodoSponsor: boolean;
    isAleiosSponsor: boolean;
  };
  about: {
    title: string;
    aboutText: string;
  };
  events: {
    title: string;
    upcoming: string;
    defaultUpcoming: string;
    past: string;
  };
};

export type MeetupEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  link: string;
};

export enum meetups {
  'CGL' = 'codegreenlondon',
  'RNL' = 'reactnativelondon',
  'ERROR' = 'emptymeetup',
}
