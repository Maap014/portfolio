"use client";
import { useEffect, useState } from "react";

type WindowSize = (width: number) => boolean;

export const useWindowSize: WindowSize = (width) => {
  const [size, setSize] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth <= width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
