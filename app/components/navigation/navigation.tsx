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
    { title: "Tools", icon: <Tools />, value: "tools" },
    { title: "Write me", icon: <WriteMe />, value: "contact" },
  ];
  const [isActive, setIsActive] = useState(navItems[0]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = window.innerWidth <= 768 ? 100 : 140;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between gap-6 bg-primary-black fixed top-7 inset-1/2 transform -translate-x-1/2 px-[20px] w-fit h-12 rounded-full border-secondary-opaqueWhite border-4 z-[999]">
        {navItems?.map((item, i) => {
          return (
            <div
              key={i}
              className="relative group flex justify-center items-center p-2 cursor-pointer"
            >
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setIsActive(item);
                  scrollToSection(item.value);
                }}
                href={`#${item.value}`}
              >
                {React.cloneElement(item.icon, {
                  stroke: isActive.value === item.value ? "#bbebbe" : "#fff",
                })}
              </Link>
              <p
                className={clsx(
                  "absolute bottom-[-20px]  text-primary-white text-nowrap bg-primary-black border-x-secondary-mintGreen border-x-2 py-[0.5px] px-2 rounded-full transform transition-all ease-in-out duration-500 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-[20px] group-hover:visible pointer-events-none text-sm"
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
