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

const cookieData : SectionData[] = [
  {
    title: "Why Do We Use Cookies?",
    description: `Cookies serve several essential purposes for our website. First,
            they enhance security by identifying and mitigating potential
            threats, thus ensuring a safer user experience. Additionally,
            cookies optimize the website's performance by efficiently
            routing traffic between servers and adapting to individual
            preferences, resulting in faster loading times and a personalized
            feel. Furthermore, they enable seamless integration with third-party
            services, like GitHub, enhancing functionality and enriching the
            user experience. Finally, cookies gather valuable data through tools
            such as Google Analytics, providing insights into user behavior and
            preferences, which we use to continually improve and tailor our
            website to your needs.`,
  },
  {
    title: "How Can You Control Our Website's Use of Cookies?",
    description: `You may have the option to refuse or disable cookies by adjusting
            your web browser settings or by visiting a relevant website. The
            process for doing this can vary depending on your specific web
            browser, and instructions are typically available in the
            browser's "help" section. Please be aware that if you
            choose to refuse, disable, or delete these technologies, some
            functionality of the Website may not be available to you.`,
  },
  {
    title: "How Often Will We Update This Cookie Policy?",
    description: `We may periodically update this Cookie Policy to reflect changes in
            the cookies and related technologies we use, or for other
            operational, legal, or regulatory reasons. Each time you use our
            Website, the current version of the Cookie Policy will apply.
            Therefore, we recommend checking the date of this Cookie Policy at
            the top of the document and reviewing any changes since the last
            version.`,
  },
  {
    title: "",
    description: "",
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

export { navigations, missonSectionData, whyOpenSourceSectionData,cookieData };
