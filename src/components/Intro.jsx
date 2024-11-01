import { Link } from "react-router-dom";
// import image1 from "../assets/deven-111.png";
import image2 from "../assets/deven_blk-white.png";

export const Intro = () => {
  return (
    <div className="flex justify-between z-10 pb-28">
      <div className="flex flex-col items-start pt-28">
        <p className="mb-7 text-[62px] leading-none">
          Nice to meet you! <br /> I&apos;m{" "}
          <span className="glowing-underline">Deven Umrania</span>.
        </p>
        <p className="mb-16 text-[15px] leading-relaxed text-[#cdcdcd] text-wrap tracking-widest w-[50%]">
          Based in India, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Link className="tracking-widest text-[15px] glowing-underline">
          CONTACT ME
        </Link>
      </div>
      <div className="items-end flex">
        <img src={image2} alt="profile" width={375} height={375} />
      </div>
    </div>
  );
};
