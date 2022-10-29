import { ISolution } from './../interfaces/ISolution';
import {
  checkIcon,
  codeIcon,
  likeIcon,
  linkIcon,
  settingsIcon,
  tableIcon,
} from './icons';
export const solutions: ISolution[] = [
  {
    name: 'Mobile Apps',
    longDesc:
      'Here at Decentree we are developing mobile apps with passion. We are using the most modern technologies and design patterns to ensure fast loading time, high performance and great UI/UX. We never stop learning and exploring the posibilities on both iOS and Android platform.',
    imgPath: 'solutions/mobileapps',
    steps: [
      { label: 'Wireframing', icon: tableIcon },
      { label: 'UI/UX', icon: likeIcon },
      { label: 'Development', icon: codeIcon },
      { label: 'Testing', icon: settingsIcon },
    ],
    tags: ['Android', 'iOS', 'React Native'],
    images: [
      {
        title: 'ESL',
        label: 'Design, iOS,  Android, QA',
        link: '/projects/esl',
        src: '/images/esl_mobile.png',
      },
      {
        title: 'Luftio',
        label: 'PM, IoT, iOS, Android',
        link: '/projects/luftio',
        src: '/images/luftio_mobile.png',
      },
    ],
  },
  {
    name: 'Web Apps',
    longDesc:
      'There has been a big progress in web development in recent years. We are trying to move fast in this discipline by using best practises and great tools that helps us build awesome web apps. We are always thinking mobile first, so apps look great on both mobile devices as well as on desktops and tablets too.',
    imgPath: 'solutions/webapps',
    tags: ['React', 'Next.js', 'GraphQL', 'Cypress', 'CSS-in-JS'],
    steps: [
      { label: 'Wireframing', icon: tableIcon },
      { label: 'UI/UX', icon: likeIcon },
      { label: 'Development', icon: codeIcon },
      { label: 'Testing', icon: settingsIcon },
    ],
    images: [
      {
        title: 'ESL',
        label: 'Design, Frontend, QA',
        link: '/projects/esl',
        src: '/images/esl_web.png',
      },
      {
        title: 'Luftio',
        label: 'PM, Design, Frontend',
        link: '/projects/luftio',
        src: '/images/luftio_web.png',
      },
    ],
  },
  {
    name: 'Smart Contracts',
    longDesc:
      'Smart contracts are computer programs stored on the blockchain. They allow us to convert traditional contracts into digital parallels. Typically a smart contract is then used by some frontend to allow users to interact with it.',
    imgPath: 'solutions/blockchain',
    tags: ['Solidity', 'Rust', 'Foundry', 'OpenZeppelin', 'Chainlink'],
    steps: [
      { label: 'Specifications', icon: tableIcon },

      { label: 'Development', icon: codeIcon },
      { label: 'Testing', icon: settingsIcon },
      { label: 'External audit', icon: checkIcon },
    ],
  },
  {
    name: 'dApps',
    longDesc:
      'Decentralized applications, also called dapps are smart contract-powered versions of apps that run on the blockchain. They are mix of a classic Web2 software developement and Web3 software development.',
    imgPath: 'solutions/defi',
    tags: ['React', 'Next.js', 'Moralis', 'Alchemy', 'Web3Auth', 'Metaplex'],
    steps: [
      { label: 'Design', icon: tableIcon },
      { label: 'Blockchain', icon: linkIcon },
      { label: 'Frontend', icon: codeIcon },
      { label: 'Testing', icon: settingsIcon },
    ],
    images: [
      {
        title: 'IOItrusßt',
        label: 'Blockchain, QA, Design, Frontend',
        src: '/images/ioitrust.png',
        link: '/projects/oiotrust',
      },
    ],
  },
];
