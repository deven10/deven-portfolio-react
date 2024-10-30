import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SocialLinks = () => {
  const links = [
    {
      link: "https://github.com/deven10/",
      component: <FaGithub />,
      type: "Github",
    },
    {
      link: "https://www.linkedin.com/in/umraniadeven/",
      component: <FaLinkedin />,
      type: "LinkedIn",
    },
    {
      link: "https://x.com/dumrania2000",
      component: <FaTwitter />,
      type: "Twitter",
    },
  ];
  return (
    <div className="icons flex gap-[25px] pr-6">
      {links.map((link, index) => (
        <Link
          key={index}
          className="cursor-pointer h-4 w-4"
          to={link.link}
          target="_blank"
          title={link.type}
        >
          {link.component}
        </Link>
      ))}
    </div>
  );
};
