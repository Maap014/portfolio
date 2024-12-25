import { tools } from "@/app/constants/constants";
import Image from "next/image";
import React from "react";

export const Tools = () => {
  return (
    <div>
      <div className="  flex items-center 1024:items-start justify-center flex-col gap-[10px] text-center 1024:text-start">
        <h1 className="text-primary-titleText1 text-[52px] 768:text-[86px] 1300:text-[94px] font-bold leading-[45px] 655:leading-[80px]">
          PREMIUM
          <span className="text-primary-titleText2"> TOOLS</span>
        </h1>
      </div>

      <div className="mt-[30px] grid grid-cols-[1fr] 560:grid-cols-[2fr_2fr] 768:grid-cols-[2fr_2fr_2fr] 1024:grid-cols-[2fr_2fr] 560:gap-2">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="flex gap-3 655:gap-5 items-center justify-start p-[16px] rounded-2xl hover:bg-primary-hoverMode hover:!duration-[400ms] hover:transition-colors hover:ease-in-out cursor-default"
          >
            <div className="relative flex items-center justify-center bg-primary-white shadow-lg flex-shrink-0 w-[60px] h-[60px] overflow-hidden rounded-lg">
              <Image
                src={tool.logo}
                alt={tool.alt}
                className="object-cover object-right w-[40px] h-[40px]"
              />
            </div>
            <div>
              <p className="text-primary-titleText1 text-base 560:text-lg 768:text-xl 1300:text-[26px] font-bold 1024:font-semibold">
                {tool.toolName}
              </p>
              <p className="text-primary-grey-200 text-sm 425:text-base">
                {tool.subDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
