"use client";
import { useContact } from "@/app/context/useContact";
import { Input } from "../../input/input";
import { useState } from "react";
import clsx from "clsx";

export const WriteMe = () => {
  const { clientName, setClientName, email, setEmail, message, setMessage } =
    useContact();
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [validateEmail, setValidateEmail] = useState<boolean>(false);

  return (
    <div>
      <div className="  flex items-center 1024:items-start justify-center flex-col gap-[10px] text-center 1024:text-start">
        <h1 className="text-primary-titleText1 text-[52px] 768:text-[86px] 1300:text-[94px] font-bold leading-[45px] 655:leading-[80px]">
          LET <span>&apos</span>S WORK
          <span className="text-primary-titleText2"> TOGETHER</span>
        </h1>
      </div>

      <form className="grid gap-3 768:gap-5 mt-[40px] " onSubmit={() => {}}>
        <div className="flex items-center gap-3 ">
          <div className="w-full">
            <Input
              value={clientName}
              required
              label="Name"
              isCurved
              placeHolder="Name"
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              value={email.toLocaleLowerCase()}
              required
              label="Email"
              isCurved
              placeHolder="Email"
              onChange={(e) => {
                setValidateEmail(emailRegex.test(e.target.value));
                setEmail(e.target.value);
              }}
              className={clsx(
                !validateEmail && email && "!text-[#87868a] !border-red-400"
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-primary-titleText1 pb-[6px] text-sm">Message</p>
          <textarea
            required
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-primary-inputBg rounded-lg p-[12px] focus:ring-0 focus:border-primary-inputFocus focus:border-[1px] focus:outline-none  transition-none custom-scrollbar min-h-[100px] max-h-[250px] placeholder:text-sm hover:border-[#bbebbe]  hover:border-[1px]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg text-primary-white font-semibold bg-primary-submitBtn p-[10px] text-center hover:scale-[0.98] hover:duration-500 hover:transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
