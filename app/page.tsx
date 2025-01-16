"use client";
import Profilecard from "./components/profileCard/profilecard";
import { RecentProject } from "./components/sections/recentProject/section";
import { Tools } from "./components/sections/tools/section";
import { WriteMe } from "./components/sections/writeMe/section";
import { analytics } from "./constants/constants";
import { ContactProvider } from "./context/useContact";

export default function Home() {
  const handleViewCv = () => {
    if (typeof window !== "undefined") {
      window.open("/cv/AUGUSTINE-MAYAKI-FE-CV.pdf", "_blank");
    }
  };
  return (
    <ContactProvider>
      <section id="/" className="float-down">
        <div className="1024:hidden">
          <Profilecard />
        </div>
        <div className="flex items-center 1024:items-start justify-center flex-col gap-[10px] text-center 1024:text-start mt-[30px] 1024:mt-0">
          <h1 className="text-primary-titleText1 text-[52px] 768:text-[90px] 1300:text-[100px] font-bold leading-[45px] 655:leading-[80px] ">
            SOFTWARE
            <span className="text-primary-titleText2"> DEVELOPER</span>
          </h1>
          <p className=" w-full max-w-[480px] text-primary-grey-100 text-base 1300:text-lg">
            Passionate about designing responsive, high-quality websites and
            crafting intuitive user experiences that seamlessly transform ideas
            into beautifully executed products.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center 1024:justify-start text-center mt-[30px]">
          {analytics.map((item, i) => {
            const lastOf = i === analytics.length - 1;
            return (
              <div key={i} className="max-w-[131px]">
                <p className="text-primary-titleText1 text-[50px] 768:text-[61px] 1300:text-[70px] font-bold leading-[70px]">
                  <span className="text-primary-plusSign">
                    {!lastOf && "+"}
                  </span>
                  {item.value}
                </p>
                <p className="text-primary-grey-200 ">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center 1024:block mt-[40px]">
          <button
            className="bg-[#272829] hover:bg-primary-submitBtn shadow-xl border-none px-7 py-4 rounded-lg"
            onClick={handleViewCv}
          >
            View Resume
          </button>
        </div>
      </section>
      <section
        className="mt-[100px] 768:mt-[140px] hidden-section"
        id="projects"
      >
        <RecentProject />
      </section>
      <section className="mt-[100px] 768:mt-[140px] hidden-section" id="tools">
        <Tools />
      </section>
      <section
        className="mt-[100px] 768:mt-[140px] hidden-section"
        id="writeme"
      >
        <WriteMe />
      </section>
    </ContactProvider>
  );
}
