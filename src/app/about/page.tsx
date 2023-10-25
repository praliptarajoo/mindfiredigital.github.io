import Image from "next/image";
import Link from "next/link";
import AboutSegmentSection from "./components/AboutSegmentSection";
import { missonSectionData, whyOpenSourceSectionData } from "@/constants";
import aboutUs from "../../../public/images/about-us.webp";

const About = () => {
  return (
    <>
      <section className="bg-slate-50">
        <div className="flex flex-col lg:flex-row justify-between lg:p-6 lg:px-10">
          <div className="px-8 lg:basis-2/5 py-16 lg:pl-0">
            <h1 className="text-4xl leading-10 md:text-5xl max-w-lg md:!leading-[3.5rem] tracking-wide text-mindfire-text-black">
              Where Innovation Knows no Boundaries.
            </h1>
            <p className="mt-6 text-xl text-mf-light-grey tracking-wide">
              We code, we collaborate, and together we create open source
              wonders.
            </p>
            <div className="flex flex-wrap items-start gap-6 mt-10">
              <Link
                href="/projects"
                className="bg-mf-red text-center text-white tracking-widest capitalize rounded-full px-8 py-3"
              >
                explore projects
              </Link>
              <Link
                target="_blank"
                href="https://www.mindfiresolutions.com/contact-us/"
                className="bg-mf-red text-center text-white tracking-widest capitalize rounded-full px-8 py-3"
              >
                contact us
              </Link>
            </div>
          </div>
          <Image
            src={aboutUs}
            alt="women-standing-beside-corkboard"
            className="max-lg:w-full object-contain"
            height="500"
            width="600"
            priority
          />
        </div>
      </section>
      <AboutSegmentSection
        title="our mission"
        description="Our mission is to collaborate with the open source community, ignite creativity, share knowledge, and develop solutions that drive positive global change."
        data={missonSectionData}
      />
      <AboutSegmentSection
        title="why open source?"
        description="Open source fuels collaboration, transparency, and perpetual
          advancement, inspiring innovation and fostering a culture of shared
          knowledge and growth."
        data={whyOpenSourceSectionData}
        className="mt-28"
      />
      <AboutSegmentSection
        title="Our Contributions"
        description="Explore our growing list of open source projects, ranging from software libraries and frameworks to tools and utilities. We are committed to actively contributing to these projects and maintaining a strong presence in the open source ecosystem."
        className="mb-24"
      >
        <div className="text-center">
          <Link
            href="/projects#all-projects"
            className="bg-mf-red tracking-wider text-white rounded-full px-5 py-3"
          >
            Explore projects
          </Link>
        </div>
      </AboutSegmentSection>
    </>
  );
};

export default About;
