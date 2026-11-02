import { FaGlobe, FaCode } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const featuredProjects = [
  {
    name: "Zeb Aroma",
    type: "Live E-commerce Platform · Freelance",
    description:
      "A full-stack perfume store with product variants, persistent cart, wishlist, customer accounts and order tracking. Razorpay payments with verification, refunds/returns, email notifications, and an admin panel for products, inventory and orders.",
    tech: ["Next.js", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Razorpay"],
    website: "https://zebaroma.com",
  },
  {
    name: "Urban Travel Partner",
    type: "Live Client Website · Freelance",
    description:
      "A responsive travel website with animated sections and interactive UI. Lead capture with Firebase Firestore, an admin dashboard to manage enquiries, and email notifications for every new lead.",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    website: "https://urbantravelpartner.com",
  },
];

const otherProjects = [
  {
    name: "Loot Bazaar",
    tech: ["React JS", "Redux Toolkit", "Axios", "MUI"],
    website: "https://loot-baazar.vercel.app/",
    code: "https://github.com/deven10/loot_baazar_project_one",
  },
  {
    name: "Email Client App",
    tech: ["React JS", "Redux Toolkit", "Axios", "Tailwind CSS"],
    website: "https://email-client-app-alpha.vercel.app/",
    code: "https://github.com/deven10/email-client-app",
  },
  {
    name: "Bazaar News",
    tech: ["React JS", "Axios", "MUI"],
    website: "https://bazaar-news.vercel.app/home",
    code: "https://github.com/deven10/bazaar_news",
  },
  {
    name: "Dil Foods",
    tech: ["React JS", "Bootstrap"],
    website: "https://deven-dil-foods.vercel.app/",
    code: "https://github.com/deven10/Dil-Foods",
  },
];

export const Projects = () => {
  return (
    <div className="pb-32 projects-main">
      <div className="flex gap-5 mb-3 flex-wrap justify-between items-start">
        <h2 className="mb-7 headline text-left leading-none max-w-min">
          Projects
        </h2>
        <Link
          to="https://github.com/deven10?tab=repositories"
          className="tracking-widest text-[15px] glowing-underline"
          target="_blank"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mb-16">
        {featuredProjects.map((project) => (
          <a
            key={project.name}
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="featured-card group"
          >
            <div className="flex justify-between items-start gap-4 mb-1">
              <p className="text-24min-32max text-[#fff] leading-tight">
                {project.name}
              </p>
              <FiArrowUpRight className="featured-arrow" size={28} />
            </div>
            <p className="mb-5 text-[13px] tracking-[0.2em] uppercase text-[#4de39c]">
              {project.type}
            </p>
            <p className="mb-6 text-14min-16max leading-relaxed text-[#cdcdcd]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <p className="mb-6 text-[13px] tracking-[0.25em] uppercase text-[#cdcdcd]">
        Side Projects
      </p>
      <div className="flex flex-wrap gap-6 projects-wrapper">
        {otherProjects.map((project) => (
          <div key={project.name} className="project-card flex gap-5">
            <div>
              <p className="project-name text-16min-18max text-[#fff] tracking-wider mb-1">
                {project.name}
              </p>
              <div className="flex flex-wrap gap-4 tech-wrapper">
                {project.tech.map((tech) => (
                  <span
                    className="text-14min-16max tracking-wide text-[#CDCDCD]"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-5 mt-1.5 project-links">
              <Link
                to={project.website}
                target="_blank"
                className="max-h-4"
                data-tooltip-id={project.website}
                data-tooltip-content={"Website"}
              >
                <FaGlobe />
              </Link>
              <Tooltip
                id={project.website}
                style={{ backgroundColor: "#151515" }}
              />
              <Link
                to={project.code}
                target="_blank"
                className="max-h-4"
                data-tooltip-id={project.code}
                data-tooltip-content={"Code"}
              >
                <FaCode />
              </Link>
              <Tooltip
                id={project.code}
                style={{ backgroundColor: "#151515" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
