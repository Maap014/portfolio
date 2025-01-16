import profileImage from "../../assets/profileImage/miii.png";
import Image from "next/image";
import { GitHub, LinkedIn, Twitter, Whatsapp } from "../svg/svg";
import Link from "next/link";
import Lottie from "lottie-react";
import IdeaBulb from "./../animatingIcon/ideaBulb.json";

const Profilecard = () => {
  const socials = [
    { link: "https://x.com/AugustineMayaki", icon: <Twitter /> },
    { link: "https://github.com/Maap014", icon: <GitHub /> },
    {
      link: "https://www.linkedin.com/in/augustine-mayaki-b500341b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: <LinkedIn />,
    },
    { link: "https://wa.me/+2347062986206", icon: <Whatsapp /> },
  ];

  return (
    <div className="float-down bg-primary-profileBg 1024:fixed w-full 1024:w-[345px] rounded-2xl py-7 px-5 flex flex-col items-center gap-6">
      <div className=" block 560:flex items-center justify-center 1024:block ">
        <div className=" relative w-full h-[210px] 360:w-[240px] 880:h-[280px] overflow-hidden rounded-xl mx-0 560:mx-10 1024:mx-0">
          <Image
            priority={true}
            src={profileImage}
            alt="Profile image"
            className="object-cover object-right w-full h-full"
          />
        </div>
        <div className=" gap-[20px] hidden 560:flex items-center flex-col 880:hidden">
          {socials.map((social, i) => (
            <div key={i} className="p-1 rounded-md hover:bg-primary-grey-300 ">
              <Link href={social.link}>{social.icon}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex flex-col justify-between gap-4 1024:gap-[110px]">
        <h1 className=" text-[29px] 425:text-nowrap text-primary-profileName font-extrabold text-center leading-8 ">
          MAYAKI AUGUSTINE
        </h1>
        <div className=" hidden absolute 1024:flex items-center justify-center inset-0 w-[100px] h-[100px] left-[90px] top-[38px] ">
          <Lottie animationData={IdeaBulb} />
        </div>
        <p className="text-primary-grey-200 font-semibold text-lg text-center leading-[110%] 560:pb-2 1024:pb-0 max-w-[300px]">
          A software developer passionate about dynamic web design and
          innovation.
        </p>
      </div>

      <div className="flex items-center gap-[22px] 560:hidden 880:flex">
        {socials.map((social, i) => (
          <div
            key={i}
            className="p-2 rounded-md hover:bg-primary-hoverOnIcon hover:!duration-[300ms] hover:transition-colors hover:ease-in-out"
          >
            <Link href={social.link}>{social.icon}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profilecard;
