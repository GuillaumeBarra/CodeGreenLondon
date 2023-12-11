const allContent = {
  codegreenlondon: {
    homepage: {
      title: 'Code Green London',
      description: 'London based meetup for sustainable tech enthusiasts.',
      about: {
        paragraph1:
          'Code Green London is a new event which aims to build the primary green tech community in London. You will have great networking opportunities with green tech innovators. At Code Green London, you will have the opportunity to network with green tech innovators, thought leaders, and experts from various fields.',
        paragraph2:
          "Our event is designed to foster meaningful connections and collaborations that can lead to further developments in green tech, and new partnerships with innovators in the field! Whether you're a seasoned green tech professional, an entrepreneur looking to launch a new venture, or simply interested in learning more about the latest developments in sustainability and technology, Code Green London is the place to be.",
      },
      showTheodo: true,
      showAleios: true,
    },
    events: {
      title: 'Events',
      upcoming: 'Upcoming',
      defaultUpcoming:
        'We are working hard to schedule an event, check back soon!',
      past: 'Past Events',
    },
  },
  reactnativelondon: {
    homepage: {
      title: 'React Native London',
      description:
        'The fastest way to learn, share and meet React Native experts..',
      about: {
        paragraph1:
          'React Native is changing the way we build Native apps. Whether you’re a veteran developer looking to up your game, or a newcomer wanting to learn more about this awesome technology, join us...',
        paragraph2: '',
      },
      showTheodo: true,
      showAleios: false,
    },
    events: {
      title: 'Events',
      upcoming: 'Upcoming',
      defaultUpcoming:
        'We are working hard to schedule an event, check back soon!',
      past: 'Past Events',
    },
  },
};

const getSiteContent = (meetup: string) => {
  console.log('meetup', meetup);
  if (meetup === 'codegreenlondon') return allContent.codegreenlondon;
  return allContent.reactnativelondon;
};
export const contents = getSiteContent(process.env.MEETUP_NAME ?? '');
