import { Fragment } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

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
    {
      link: "https://api.whatsapp.com/send/?phone=%2B918355916480&text&type=phone_number&app_absent=0",
      component: <IoLogoWhatsapp />,
      type: "Whatsapp",
    },
  ];
  return (
    <div className="icons flex gap-[25px] pr-6">
      {links.map((link) => (
        <Fragment key={link.type}>
          <Link
            className="cursor-pointer h-4 w-4"
            to={link.link}
            target="_blank"
            data-tooltip-id={link.type}
            data-tooltip-content={link.type}
          >
            {link.component}
          </Link>
          <Tooltip id={link.type} />
        </Fragment>
      ))}
    </div>
  );
};
