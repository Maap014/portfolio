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
    image: ecom,
    projectTitle: "eCommerce",
    url: "https://ecom-mini.vercel.app/",
    description:
      "An eCommerce platform dedicated to selling sneakers, allowing users to browse, add, and remove items from the cart. Built with React and Tailwind CSS, the site uses useState and React Context for efficient state management, delivering a seamless and dynamic user experience.",
  },
  {
    image: space,
    projectTitle: "Space Tourisim",
    url: "https://space-tourism-one-amber.vercel.app/",
    description:
      "Built with React and vanilla CSS, the project uses a custom hook for efficient local API calls and dynamic data fetching. State for active tabs and navigation is managed with React hooks, ensuring a seamless user experience. Explore destinations like the Moon, Mars, Europa, and Titan, meet the crew making it possible, and discover cutting-edge technology for space travel.. ",
  },
  {
    image: dashboard,
    projectTitle: "Basic Dashboard",
    url: "https://admin-dashboard-nine-phi-30.vercel.app/",
    description:
      "Built with React and CSS, this dashboard displays a table of team members, with data fetched from an external API using the fetch method. The dashboard includes functionalities for deleting, editing, and searching members, with pagination implemented for easy navigation. State management is handled using React's useState, and the table is powered by React Table for an efficient and dynamic user interface.",
  },
];
