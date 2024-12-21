import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface NavItems {
  title: string;
  value: string;
  icon: ReactElement;
}

export interface ProjectType {
  image: string | StaticImageData;
  projectTitle: string;
  url: string;
  description: string;
}

export interface ToolType {
  logo: string | StaticImageData;
  alt: string;
  toolName: string;
  subDescription: string;
}
