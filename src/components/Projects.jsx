import { FaGlobe, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      name: "Loot Bazaar 🚀",
      tech: ["React JS", "Redux Toolkit", "Axios", "MUI"],
      website: "https://loot-baazar.vercel.app/",
      code: "https://github.com/deven10/loot_baazar_project_one",
    },
    {
      name: "Bazaar News",
      tech: ["React JS", "Axios", "MUI"],
      website: "https://bazaar-news.vercel.app/home",
      code: "https://github.com/deven10/bazaar_news",
    },
    {
      name: "Email Client App",
      tech: ["React JS", "Redux Toolkit", "Axios", "Tailwind CSS"],
      website: "https://email-client-app-alpha.vercel.app/",
      code: "https://github.com/deven10/email-client-app",
    },
    {
      name: "Dil Foods",
      tech: ["React JS", "Bootstrap"],
      website: "https://deven-dil-foods.vercel.app/",
      code: "https://github.com/deven10/Dil-Foods",
    },
    {
      name: "IMDB Movies",
      tech: ["React JS"],
      website: "https://mcr-eleven.vercel.app/",
      code: "https://github.com/deven10/mcr-eleven",
    },
    {
      name: "Inventory Management",
      tech: ["React JS"],
      website: "https://mcr-ten.vercel.app/",
      code: "https://github.com/deven10/mcr-ten",
    },
    {
      name: "Videos Suggestion App",
      tech: ["React JS"],
      website: "https://mcr-nine.vercel.app/",
      code: "https://github.com/deven10/mcr-nine",
    },
    {
      name: "Food Ordering App",
      tech: ["React JS"],
      website: "https://mcr-six.vercel.app/",
      code: "https://github.com/deven10/mcr-six",
    },
    {
      name: "Volunteer Management Application",
      tech: ["React JS", "Redux Toolkit", "React Table", "Axios", "Bootstrap"],
      website: "https://deven-neog-assignment-22-frontend.vercel.app/",
      code: "https://github.com/deven10/neog-assignment-22-frontend",
    },
    {
      name: "Patient Management Application",
      tech: ["React JS", "Redux Toolkit", "React Table", "Axios", "Bootstrap"],
      website: "https://deven-neog-assignment-21-frontend.vercel.app/",
      code: "https://github.com/deven10/neog-assignment-21-frontend",
    },
    {
      name: "School Management Application",
      tech: ["React JS", "Redux Toolkit", "React Table", "Axios", "Bootstrap"],
      website: "https://deven-neog-assignment-20-frontend.vercel.app/",
      code: "https://github.com/deven10/neog-assignment-20-frontend",
    },
    {
      name: "Bootstrap Website",
      tech: ["HTML", "Bootstrap"],
      website: "https://deven-bootstrap-website.netlify.app/",
      code: "https://github.com/deven10/Bootstrap_Website",
    },
    // {
    //   name: "Netflix Clone",
    //   tech: ["React JS", "Axios", "Bootstrap"],
    //   website: "", // Broken Link
    //   code: "https://github.com/deven10/netflix-clone",
    // },
  ];
  return (
    <div className="pb-32">
      <div className="flex gap-5 mb-3 flex-wrap justify-between items-center">
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
      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <div key={project.name} className="project-card flex gap-5">
            <div>
              <p className="text-[20px] text-[#fff] tracking-wider mb-1">
                {project.name}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((tech) => (
                  <span
                    className="text-[16px] tracking-wide text-[#CDCDCD]"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-5 mt-1.5">
              <Link
                to={project.website}
                target="_blank"
                title="Website"
                className="max-h-4"
              >
                <FaGlobe />
              </Link>
              <Link
                to={project.code}
                target="_blank"
                title="Code"
                className="max-h-4"
              >
                <FaCode />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
