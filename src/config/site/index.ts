import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

export const siteConfig = {
  footer: [
    {
      Pages: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Comics", link: "/comics" },
        { name: "Light Novel", link: "/novel" },
        { name: "Games", link: "/games" },
        { name: "Gallery", link: "#" },
        { name: "Teams", link: "#" },
      ],
    },
    {
      Resources: [
        { name: "Technical Support", link: "#" },
        { name: "Licensing", link: "#" },
        { name: "Community", link: "#" },
        { name: "Knowledge Base", link: "#" },
        { name: "Marketplace", link: "#" },
        { name: "My Account", link: "#" },
        { name: "Support Ticket", link: "#" },
      ],
    },
    {
      Learn: [
        { name: "Certification", link: "#" },
        { name: "Partners", link: "#" },
        { name: "Documentation", link: "#" },
        { name: "Developer Resources", link: "#" },
        { name: "Purchasing FAQ", link: "#" },
        { name: "Enterprise services", link: "#" },
      ],
    },
    {
      AboutUs: [
        { name: "Company", link: "#" },
        { name: "Careers", link: "#" },
        { name: "Events", link: "#" },
        { name: "Blogs", link: "#" },
        { name: "Contact", link: "#" },
        { name: "Security", link: "#" },
        { name: "Privacy", link: "#" },
      ],
    },
  ],
  socialLinks: [
    {
      name: "Twitter",
      icon: FaSquareXTwitter,
      link: "https://twitter.com/jashezan",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://linkedin.com/in/jashezan",
    },
    {
      name: "GitHub",
      icon: FaSquareGithub,
      link: "https://github.com/jashezan",
    },
  ],
};
