import { Link } from "react-router-dom";
import image1 from "../assets/deven-111.png";

export const Intro = () => {
  return (
    <div className="flex justify-between z-10">
      <div className="flex flex-col items-start pt-28">
        <p className="mb-7 text-[62px] text-left leading-none">
          Nice to meet you! <br /> I&apos;m{" "}
          <span className="glowing-underline">Deven Umrania</span>.
        </p>
        <p className="mb-16 text-left text-[15px] leading-snug text-wrap tracking-widest">
          Based in India, I&apos;m a front-end developer <br /> passionate about
          building accessible web apps <br /> that users love.
        </p>
        <Link className="tracking-widest text-[15px] glowing-underline">
          CONTACT ME
        </Link>
      </div>
      <div className="bg-[#242424] profile-img">
        <img src={image1} alt="profile" width="350" />
      </div>
    </div>
  );
};
