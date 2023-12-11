export type Meetup = {
  homepage: {
    title: string;
    description: string;
    about: {
      paragraph1: string;
      paragraph2: string;
    };
    showTheodo: boolean;
    showAleios: boolean;
  };
  events: {
    title: string;
    upcoming: string;
    defaultUpcoming: string;
    past: string;
  };
};
