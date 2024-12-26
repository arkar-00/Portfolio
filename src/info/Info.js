import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Arkar',
  lastName: 'Oo',
  nickname: 'Kar Oo',
  initials: 'js', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Mobile Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'based in the Myanmar',
    },
    {
      emoji: '💼',
      text: 'Mobile Developer at Modus Operandi',
    },
    {
      emoji: '📧',
      text: 'akoucsmub@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://www.facebook.com/profile.php?id=100071835817206',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://www.instagram.com/akoucsmub',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/arkar-00',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://gitlab.com/arkar-00',
      icon: 'fa fa-gitlab',
      label: 'gitlab',
    },
    {
      link: 'https://www.linkedin.com/in/arkar-oo-0265b4278',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    // {
    //   link: 'https://twitter.com',
    //   icon: 'fa fa-twitter',
    //   label: 'twitter',
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Arkar Oo. I'm a mobile developer for Modus Operandi. I studied CompSci at University of Computer Studies, Maubin. I'm a self-taught developer with a solid background in React Native application development. Highly motivated and eager to enchance my skills, continuously seek opportunities to learn and adapt to new technologies. As a quick learner, I can easily pick up new tools and frameworks. I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'react',
      'react native',
      'javascript',
      'typescript',
      'tailwind css',
      'redux/toolkit',
      'zustand',
      'react-query',
      'react-hook-form',
      'zod',
      'rest api',
      'websockets',
      'firebase',
      'git',
      'github',
      'gitlab',
    ],
    exposedTo: [
      'nodejs',
      'express',
      'mongodb',
      'postgresql',
      'app center',
      'fastlane',
      'expo',
      'github actions',
      'app store connect',
      'google play console',
    ],
  },

  experiences: [
    {
      title: 'Mobile Developer',
      company: 'Modus Operandi',
      date: '2023 - Present',
      descriptions: [
        'Developed and maintained mobile applications for financial portfolio management, allowing users to track investments and analyze financial data securely.',
        'Implemented two-factor authentication (2FA) and biometric authentication features to enhance user account security.',
        'Collaborated with backend developers to design and optimize APIs for retrieving and updating financial data securely.',
      ],
    },
    {
      title: 'Mobile Developer',
      company: 'Ultimate Solutions Myanmar',
      date: '2020 - 2022',
      descriptions: [
        'Attendance & Student Management System: Designed and developed a comprehensive system to track student performance, attendance, and manage student data efficiently.',
        'Delivery Management System: Developed a delivery management system that allows users to track their orders and delivery status in real-time.',
        'Point of Sale (POS) System: Developed a POS system that allows users to manage their inventory, sales, and customer data.',
      ],
    },
    {
      title: 'Mobile Developer',
      company: 'Freelance',
      date: '2023 - Present',
      descriptions: [
        'Comic Book App: Developed a comic reading app with local storage for offline access and integrated in-app purchases for a monetized experience.',
        'Real-time Chat App: Implemented a secure chat app using WebSocket with end-to-end encryption to ensure user communication privacy.',
        'Astrology App: Developed an astrology app that provides daily horoscopes, zodiac compatibility, and personalized readings based on user input.',
      ],
    },
  ],
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Wun Zinn Comics',
      // playStore: 'https://play.google.com/store/apps/details?id=com.wunzinncomics',
      appStore: 'https://apps.apple.com/tr/app/wun-zinn-comics/id6670696610',
      image: mock1,
    },
    {
      title: 'GESC Student',
      playStore: 'https://play.google.com/store/apps/details?id=com.gesc.memberapp',
      appStore: 'https://apps.apple.com/mm/app/gesc-student/id1669661006',
      image: mock2,
    },
    {
      title: 'Royal Express Member',
      playStore: 'https://play.google.com/store/apps/details?id=com.royalexpress.memberapp',
      appStore: 'https://apps.apple.com/us/app/royal-express-member/id1538284560',
      image: mock3,
    },
  ],
};

