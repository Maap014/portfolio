"use client";

import { NavItems } from "@/app/types/types";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { Home, Projects, Tools, WriteMe } from "../svg/svg";

const Navigation = () => {
  const navItems: NavItems[] = [
    { title: "Home", icon: <Home />, value: "/" },
    { title: "Projects", icon: <Projects />, value: "projects" },
    { title: "Tools", icon: <Tools />, value: "about" },
    { title: "Write me", icon: <WriteMe />, value: "contact" },
  ];
  const [isActive, setIsActive] = useState(navItems[0]);
  return (
    <>
      <nav className="flex items-center justify-between gap-6 bg-primary-black fixed top-7 inset-1/2 transform -translate-x-1/2 px-[20px] w-fit h-12 rounded-full border-secondary-opaqueWhite border-4">
        {navItems?.map((item, i) => {
          return (
            <div
              key={i}
              className="relative group flex justify-center items-center p-2 cursor-pointer"
            >
              <Link onClick={() => setIsActive(item)} href={`#${item.value}`}>
                {React.cloneElement(item.icon, {
                  stroke: isActive.value === item.value ? "#bbebbe" : "#fff",
                })}
              </Link>
              <p
                className={clsx(
                  "absolute bottom-[-20px] text-nowrap bg-primary-black border-x-secondary-mintGreen border-x-2 py-[0.5px] px-2 rounded-full transform transition-all ease-in-out duration-500 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-[20px] group-hover:visible pointer-events-none text-sm"
                )}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
