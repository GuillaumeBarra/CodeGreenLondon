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
    infoParagraph1: string;
    infoParagraph2: string;
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
  'codegreenlondon' = 'codegreenlondon',
  'reactnativelondon' = 'reactnativelondon',
  'default' = 'defaultContent',
}
