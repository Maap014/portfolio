"use client";
import clsx from "clsx";
import Navigation from "./components/navigation/navigation";
import Profilecard from "./components/profileCard/profilecard";
import { Moon, Sun } from "./components/svg/svg";
import { useTheme } from "./context/useTheme";
import { Toaster } from "sonner";

export const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <body>
        <Toaster richColors duration={3000} position="top-right" />
        <div className=" transition-mode bg-primary-bg pt-[120px] pb-[105px] flex justify-center items-center">
          <Navigation />
          <div className="flex justify-center w-full max-w-[830px] 1024:max-w-[1150px] px-6 560:px-8 1240:px-0 ">
            <div className="relative w-[340px] hidden 1024:block">
              <Profilecard />
            </div>
            <div className="1024:w-[calc(100%-340px)] 1024:pl-[50px] 1400:pl-[90px]">
              <button
                className={clsx(
                  theme === "light" ? "bg-[#151312]" : "bg-[#ffff]",
                  "w-10 h-10 rounded-full shadow-lg overflow-hidden fixed bottom-[2.5rem] right-[2.5rem] 880:right-[6.5rem] 1500:right-[10rem] z-[999]"
                )}
                onClick={() => toggleTheme()}
              >
                <div
                  className={`absolute inset-0 flex justify-center items-center transition-transform duration-700 ${
                    theme === "dark" ? "translate-y-0" : "translate-y-[100%]"
                  }`}
                >
                  <Sun />
                </div>
                <div
                  className={`absolute inset-0 flex justify-center items-center transition-transform duration-700 ${
                    theme === "dark" ? "translate-y-[-100%]" : "translate-y-0"
                  }`}
                >
                  <Moon />
                </div>
              </button>
              {children}
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
