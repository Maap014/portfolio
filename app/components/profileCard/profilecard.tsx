import React from "react";
import profileImage from "../../assets/profileImage/itachi.png";
import Image from "next/image";
import { Email, GitHub, LinkedIn, Twitter } from "../svg/svg";
import Link from "next/link";

const Profilecard = () => {
  const socials = [
    { link: "", icon: <Twitter /> },
    { link: "", icon: <GitHub /> },
    { link: "", icon: <LinkedIn /> },
    { link: "", icon: <Email /> },
  ];

  return (
    <div className="bg-primary-white 1024:fixed w-full 1024:w-[340px] rounded-2xl py-7 px-5 flex flex-col items-center gap-6">
      <div className=" block 560:flex items-center justify-center 1024:block ">
        <div className=" relative w-full h-[210px] 360:w-[240px] 880:h-[280px] overflow-hidden rounded-xl mx-0 560:mx-10 1024:mx-0">
          <Image
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
      <div className="flex flex-col justify-between gap-4 1024:gap-[110px]">
        <h1 className=" text-[29px] 425:text-nowrap text-primary-black font-extrabold text-center leading-8 ">
          MAYAKI AUGUSTINE
        </h1>
        <p className="text-primary-grey-200 font-semibold text-lg text-center leading-[110%] 560:pb-2 1024:pb-0 max-w-[300px]">
          A front-end developer with a passion for web design and development
        </p>
      </div>
      <div className="flex items-center gap-[22px] 560:hidden 880:flex">
        {socials.map((social, i) => (
          <div key={i} className="p-1 rounded-md hover:bg-primary-grey-300 ">
            <Link href={social.link}>{social.icon}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profilecard;
