import image2 from "../assets/deven_blk-white.png";
// import resume from "../files/Deven Umrania - Resume.pdf";
import resume from "../files/Deven Resume.pdf";

export const Intro = () => {
  return (
    <div className="flex justify-between z-10 pb-28 intro-main">
      <div className="flex flex-col items-start pt-28 intro-content">
        <p className="mb-7 leading-none headline">
          {/* text-[62px] */}
          Nice to meet you! <br /> I&apos;m{" "}
          <span className="glowing-underline">Deven Umrania</span>.
        </p>
        <p className="mb-16 text-[15px] leading-relaxed tagline text-[#cdcdcd] text-wrap tracking-widest">
          {/*  w-[50%] */}
          Based in India, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>

        <a
          className="tracking-widest text-[14px] glowing-underline"
          href={resume}
          download
          // target="_blank"
          // rel="noreferrer"
        >
          DOWNLOAD RESUME
        </a>
      </div>
      <div className="items-end flex profile-img">
        <img src={image2} alt="profile" width={375} height={375} />
      </div>
    </div>
  );
};
