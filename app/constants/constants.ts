import profileImage from "../assets/profileImage/itachi.png";
import { ProjectType, ToolType } from "../types/types";

export const analytics = [
  { value: 6, description: " MONTHS OF EXPERIENCE" },
  { value: 3, description: "PROJECTS COMPLETED" },
  { value: 1, description: "NATIONWIDE CLIENT" },
];

export const recentProjects: ProjectType[] = [
  {
    image: profileImage,
    projectTitle: "Airpeace1",
    url: "",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem animi dolorum maxime dolores, sint ut aspernatur itaque quos et dicta consequatur odio laborum magnam porro in voluptate quis neque officiis.",
  },
  {
    image: profileImage,
    projectTitle: "Airpeace2",
    url: "",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem animi dolorum maxime dolores, sint ut aspernatur itaque quos et dicta consequatur odio laborum magnam porro in voluptate quis neque officiis.  orem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem animi dolorum maxime dolores, sint ut aspernatur itaque quos et dicta consequatur odio laborum magnam porro in voluptate quis neque officiis",
  },

  {
    image: profileImage,
    projectTitle: "Airpeace3",
    url: "",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem animi dolorum maxime dolores, sint ut aspernatur itaque quos et ",
  },
];

export const tools: ToolType[] = [
  {
    logo: profileImage,
    alt: "framework logo",
    toolName: "Next Js",
    subDescription: "React Framework",
  },
  {
    logo: profileImage,
    alt: "framework logo",
    toolName: "HTML",
    subDescription: "React Framework",
  },
  {
    logo: profileImage,
    alt: "framework logo",
    toolName: "Vallina CSS",
    subDescription: "React Framework",
  },
  {
    logo: profileImage,
    alt: "framework logo",
    toolName: "Tailwind CSS",
    subDescription: "React Framework",
  },
  {
    logo: profileImage,
    alt: "framework logo",
    toolName: "JavaScript",
    subDescription: "React Framework",
  },
  {
    logo: profileImage,
    alt: "framework logo",
    toolName: "TypeScript",
    subDescription: "React Framework",
  },
];
