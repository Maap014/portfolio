import clsx from "clsx";

interface InputProps
  extends Omit<JSX.IntrinsicElements["input"], "placeholder" | "label"> {
  placeHolder?: string;
  label?: string;
  isCurved?: boolean;
  className?: string;
}
export const Input = ({
  placeHolder,
  isCurved,
  label,
  className,
  ...rest
}: InputProps) => {
  return (
    <div className="relative ">
      <p className="text-primary-titleText1 pb-[6px] text-sm">{label}</p>
      <div>
        <input
          className={clsx(
            isCurved && "rounded-[8px]",
            "h-[40px] bg-primary-inputBg text-sm 425:text-base py-[10px] px-[12px] placeholder:text-sm  focus:ring-0 focus:border-primary-inputFocus focus:border-[1px] focus:outline-none transition-none  hover:border-[#bbebbe]  hover:border-[1px] w-full text-primary-white ",

            className
          )}
          {...rest}
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
};
