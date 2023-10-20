import { StaticImageData } from "next/image";
import redirectIcon from "../../public/images/social-media/maximize.png";
interface Navigation {
  name: string;
  path: string;
  target?: string;
  icon?: string | StaticImageData;
  iconAlt?: string;
}

interface SectionData {
  title: string;
  description: string;
}

const navigations: Navigation[] = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "GitHub",
    path: "https://github.com/mindfiredigital",
    target: "_blank",
    icon: redirectIcon,
    iconAlt: "redirect_icon",
  },
];

const missonSectionData: SectionData[] = [
  {
    title: "collaborative creativity",
    description:
      " Fostering a culture of collaboration and creativity where diverse minds come together to innovate.",
  },
  {
    title: "knowledge sharing",
    description:
      "Sharing knowledge openly and freely, enabling continuous learning and growth within our community.",
  },
  {
    title: "positive global impact",
    description:
      "Building open-source solutions that address real-world challenges and bring about positive change on a global scale",
  },
];

const whyOpenSourceSectionData: SectionData[] = [
  {
    title: "Collaboration",
    description:
      "Embracing the power of collective effort to drive progress and create better solutions",
  },
  {
    title: "Transparency",
    description:
      "Promoting openness and clarity, ensuring trust and shared understanding in our work",
  },
  {
    title: "Innovation",
    description:
      "Sparking creativity and new ideas, pushing boundaries, and evolving through shared knowledge and learning",
  },
];

const joinUsGetStartSectionData: SectionData[] = [
  {
    title: "Create a GitHub account",
    description:
      "Projects are hosted on GitHub, requiring a GitHub account for contributions through issue submissions and pull requests.",
  },
  {
    title: "Find a project",
    description:
      "From web and mobile to AI and machine learning, we have diverse projects. Please visit our Projects page to explore.",
  },
  {
    title: "Read the docs",
    description:
      "GitHub repos include README with project info and optional website links. Some projects use Docusaurus for docs.",
  },
  {
    title: "Submit your first pull request",
    description:
      "You're all set to begin contributing! Explore this GitHub guide to understand pull requests, a way to notify others about your repository changes.",
  },
];

export {
  navigations,
  missonSectionData,
  whyOpenSourceSectionData,
  joinUsGetStartSectionData,
};
