"use client";
import Image from "next/image";
import React, { useState } from "react";
import { VisitArrow } from "../../svg/svg";
import { useTheme } from "@/app/context/useTheme";
import Link from "next/link";
import clsx from "clsx";
import { recentProjects } from "@/app/constants/constants";

export const RecentProject = () => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const onMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const arrow = e.currentTarget.querySelector("#arrow");
    if (arrow) {
      arrow.classList.add("translate-forwards");
      setIsHovered(index);
    }
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const arrow = e.currentTarget.querySelector("#arrow");
    if (arrow) {
      arrow.classList.add("translate-backwards");
      setIsHovered(null);
      setTimeout(() => {
        arrow.classList.remove("translate-backwards");
        arrow.classList.remove("translate-forwards");
      }, 300);
    }
  };

  return (
    <div className="">
      <div className="flex items-center 1024:items-start justify-center flex-col gap-[10px] text-center 1024:text-start">
        <h1 className="text-primary-titleText1 text-[52px] 768:text-[86px] 1300:text-[94px] font-bold leading-[45px] 655:leading-[80px] ">
          RECENT
          <span className="text-primary-titleText2"> PROJECTS</span>
        </h1>
      </div>
      <div className="mt-4">
        {recentProjects.map((project, i) => {
          return (
            <Link
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                onMouseEnter(e, i)
              }
              onMouseLeave={onMouseLeave}
              href={project.url}
              key={i}
              className="flex gap-3 655:gap-5 items-center justify-start  py-[16px] px-[16px] 768:py-[20px] 768:px-[20px] rounded-2xl hover:bg-primary-hoverMode hover:!duration-[400ms] hover:transition-colors hover:ease-in-out "
            >
              <div className="relative flex-shrink-0 w-[90px] h-[94px] 768:w-[130px] 768:h-[135px] overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt="project image"
                  className="object-cover object-right w-full h-full"
                />
              </div>
              <div className=" relative w-full flex items-center justify-between 655:h-[140px] gap-3">
                <div className=" w-full 768:max-w-[420px] grid gap-[2px]">
                  <h3 className="text-primary-titleText1 text-lg 768:text-xl 1300:text-[26px] font-bold 1024:font-semibold">
                    {project.projectTitle}
                  </h3>
                  <p
                    className={clsx(
                      isHovered === i
                        ? " max-h-[100px] overflow-y-scroll transition-all duration-700 z-50"
                        : "max-h-[78px] 560:max-h-[90px] overflow-y-hidden",
                      "h-full text-primary-grey-200 custom-scrollbar hide-arrows pr-2 text-sm 390:text-base"
                    )}
                  >
                    {project.description.length > 160 && isHovered !== i
                      ? `${project.description.slice(0, 160)}....`
                      : project.description}
                  </p>
                </div>
                <div className="relative w-10 h-full hidden 768:block">
                  <div
                    id="arrow"
                    className=" absolute right-[5px] top-[5px] rotate-[-45deg]"
                  >
                    <VisitArrow fill={`${theme === "dark" && "#bbebbe"}`} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
