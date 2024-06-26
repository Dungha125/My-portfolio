import {
  chromecast,
  disc02,
  discordBlack,
  facebook,
  figma,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  photoshop,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  facebook1,
  email,
  behance,
  gihub,
  image1,
  reactlogo,
  nextlogo,
  illutrator,
  premiere,
  tailwind,
  jslogo,
} from "../../src/assets";

export const navigation = [
  {
    id: "0",
    title: "Information",
    url: "main",
  },
  {
    id: "1",
    title: "Education",
    url: "Education",
  },
  {
    id: "2",
    title: "Skills",
    url: "Skills",
  },
  {
    id: "3",
    title: "Project",
    url: "Project",
  },
  {
    id: "4",
    title: "Contact to me",
    url: "Contact",
  },
  {
    id: "5",
    title: "I'm Dungha",
    url: "main",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  {
    logo: facebook1,
    index: "0",
    title: "Facebook",
    link: "https://www.facebook.com/Dungg12ha",
  },
  {
    logo: email,
    index: "1",
    title: "Instagram",
    link: "https://www.instagram.com/dunggha_a/",
  },
  {
    logo: gihub,
    index: "2",
    title: "Github",
    link: "https://github.com/Dungha125",
  },
  {
    logo: behance,
    index: "3",
    title: "Behance",
    link: "https://www.behance.net/dngh32",
  },
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText = "Part-time at HA HUYEN Shoes (2024)";

export const collabContent = [
  {
    id: "0",
    title: "Frond-end",
  },
  {
    id: "1",
    title: "Graphic Design",
    text: collabText,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "React",
    icon: reactlogo,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "NextJS",
    icon: nextlogo,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Tailwind",
    icon: tailwind,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Illutrator",
    icon: illutrator,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Premiere",
    icon: premiere,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Javascript",
    icon: jslogo,
    width: 28,
    height: 28,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Weather City",
    text: "Website to look up weather information for cities around the world.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: reactlogo,
    imageUrl: image1,
    light: true,
    link: "https://github.com/Dungha125/weather",
  },
  {
    id: "1",
    title: "Task_List",
    text: "The website records notes in work, study, and life.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: reactlogo,
    imageUrl: image1,
    light: true,
    link: "https://github.com/Dungha125/Task_List",
  },
  {
    id: "2",
    title: "Lango - Languages Learning App",
    text: "This is the website I cloned from Duolingo. This is a website that supports learning foreign languages.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: nextlogo,
    imageUrl: image1,
    light: true,
    link: "https://github.com/Dungha125/Lango---Languages-Learning-App",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
