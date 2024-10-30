import { SocialLinks } from "./SocialLinks";

export const Header = () => {
  return (
    <nav className="flex justify-between items items-center z-20">
      <p className="m-0 text-[18px] cursor-default tracking-wider">
        umraniadeven
      </p>
      <SocialLinks />
    </nav>
  );
};
