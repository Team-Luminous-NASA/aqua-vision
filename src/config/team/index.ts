import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export interface ITeamMember {
  name?: string;
  role?: string;
  imageUrl?: string;
  bgClassName?: string;
  socialLinks?: {
    name?: string;
    icon?: any;
    link?: string;
  }[];
}

// Team Leader:
// Md. Jobayer Hossain
// 01767366049
// jobayerhossain1202@gmail.com

// Team Member 1:
// Kazi Asma Ul Hosna
// 01577194656
// asma234.kazi@gmail.com

// Team Member 2:
// Sadman Shafique
// 01975538823
// sadmanshafiqueamiyo@gmail.com

// Team Member 3:
// Fahmida Akter Tanni
// 01781213701
// fahmidtanni@gmail.com

// Team Member 4:
// M. M. Jubyer Ahmed Shezan
// 01623766425
// jashezan@gmail.com

// Team member 5:
// Moinur Rahman Naeem
// 01701-545200

export const TeamMembers: ITeamMember[] = [
  {
    name: "Md. Jobayer Hossain",
    role: "Team Leader",
    imageUrl: "/team/jobayer.png",
    bgClassName: "bgJobayer",
    socialLinks: [
      {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://linkedin.com/in/jobayer-hossain-164895288",
      },
      { name: "Mail", icon: IoMdMail, link: "jobayerhossain1202@gmail.com" },
    ],
  },
  {
    name: "Kazi Asma Ul Hosna",
    role: "Artist",
    imageUrl: "/team/asma.jpg",
    bgClassName: "bgAsma",
    socialLinks: [
      {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://linkedin.com/in/kazi-asma-ul-hosna-48ab90317wxyz",
      },
      { name: "Mail", icon: IoMdMail, link: "asma234.kazi@gmail.com " },
    ],
  },
  {
    name: "Sadman Shafique",
    role: "Researcher",
    imageUrl: "/components/earth.jpg",
    bgClassName: "bgSadman",
    socialLinks: [
      { name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com" },
      { name: "Mail", icon: IoMdMail, link: "sadmanshafiqueamiyo@gmail.com" },
    ],
  },
  {
    name: "Fahmida Akter Tanni",
    role: "Designer",
    imageUrl: "/team/fahmida.jpg",
    bgClassName: "bgTanni",
    socialLinks: [
      { name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com" },
      { name: "Mail", icon: IoMdMail, link: "fahmidtanni@gmail.com" },
    ],
  },
  {
    name: "M. M. Jubyer Ahmed Shezan",
    role: "Developer",
    imageUrl: "/team/shezan.jpg",
    bgClassName: "bgShezan",
    socialLinks: [
      {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://linkedin.com/in/jashezan",
      },
      { name: "Mail", icon: IoMdMail, link: "jashezan@gmail.com" },
    ],
  },
  {
    name: "Moinur Rahman Naeem",
    role: "Designer",
    imageUrl: "/team/naim.jpg",
    bgClassName: "bgNaim",
    socialLinks: [
      {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/moinurrahmannaeem/",
      },
      { name: "Mail", icon: IoMdMail, link: "moinurrahmannaeem@gmail.com" },
    ],
  },
];
