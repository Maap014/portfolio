"use client";
import { useContact } from "@/app/context/useContact";
import { Input } from "../../input/input";
import { useRef, useState } from "react";
import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Spinner } from "../../loader/spinner";

export const WriteMe = () => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [validateEmail, setValidateEmail] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { clientName, setClientName, email, setEmail, message, setMessage } =
    useContact();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setIsLoading(true);
    emailjs
      .sendForm("service_0nhwqdd", "write_me_form", form.current, {
        publicKey: "n1rtYOOBQc8EEuSTg",
      })
      .then(
        () => {
          toast.success("Message successfully sent!");
          setClientName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
        },
        (error) => {
          toast.error("Falied...", error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div>
      <div className="  flex items-center 1024:items-start justify-center flex-col gap-[10px] text-center 1024:text-start">
        <h1 className="text-primary-titleText1 text-[52px] 768:text-[86px] 1300:text-[94px] font-bold leading-[45px] 655:leading-[80px]">
          LET&apos;S WORK
          <span className="text-primary-titleText2"> TOGETHER</span>
        </h1>
      </div>

      <form
        ref={form}
        className="grid gap-3 768:gap-5 mt-[40px]"
        onSubmit={sendEmail}
      >
        <div className="flex items-center gap-3 ">
          <div className="w-full">
            <Input
              value={clientName}
              name="from_name"
              autoComplete="off"
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
              name="from_email"
              autoComplete="off"
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
            name="message"
            required
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-primary-inputBg rounded-lg p-[12px] focus:ring-0 focus:border-primary-inputFocus focus:border-[1px] focus:outline-none  transition-none custom-scrollbar min-h-[100px] max-h-[250px] placeholder:text-sm hover:border-[#bbebbe] hover:border-[1px]"
          ></textarea>
        </div>
        <button
          disabled={
            !clientName || !message || !email || (email && !validateEmail)
              ? true
              : false
          }
          type="submit"
          className={clsx(
            !clientName.trim() || !validateEmail || !message
              ? "hover:scale-[1] hover:!duration-0 hover:transition-none cursor-not-allowed bg-[#478c5280]"
              : "bg-primary-submitBtn  hover:scale-[0.98] hover:!duration-500 hover:transition-all cursor-pointer",
            "text-primary-white w-full p-[10px] rounded-lg font-semibold flex justify-center items-center"
          )}
        >
          {isLoading ? (
            <Spinner className="text-white  w-5 h-5 768:w-7 768:h-7" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};
