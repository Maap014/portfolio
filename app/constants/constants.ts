import profileImage from "../assets/profileImage/itachi.png";
import ecom from "../assets/projectImages/ecom.png";
import space from "../assets/projectImages/space-web.png";
import dashboard from "../assets/projectImages/basic-dashboard.png";
import { ProjectType } from "../types/types";

export const analytics = [
  { value: 6, description: " MONTHS OF EXPERIENCE" },
  { value: 3, description: "PROJECTS COMPLETED" },
  { value: 1, description: "NATIONWIDE CLIENT" },
];

export const recentProjects: ProjectType[] = [
  {
    image: space,
    projectTitle: "Space Tourisim",
    url: "https://space-tourism-one-amber.vercel.app/",
    description:
      "Built with React and vanilla CSS, the project uses a custom hook for efficient local API calls and dynamic data fetching. State for active tabs and navigation is managed with React hooks, ensuring a seamless user experience. Explore destinations like the Moon, Mars, Europa, and Titan, meet the crew making it possible, and discover cutting-edge technology for space travel.. ",
  },
  {
    image: ecom,
    projectTitle: "Ecommerce",
    url: "https://ecom-mini.vercel.app/",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem animi dolorum maxime dolores, sint ut aspernatur itaque quos et dicta consequatur odio laborum magnam porro in voluptate quis neque officiis.  orem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem animi dolorum maxime dolores, sint ut aspernatur itaque quos et dicta consequatur odio laborum magnam porro in voluptate quis neque officiis",
  },

  {
    image: dashboard,
    projectTitle: "Basic Dashboard",
    url: "https://admin-dashboard-nine-phi-30.vercel.app/",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem animi dolorum maxime dolores, sint ut aspernatur itaque quos et ",
  },
];
