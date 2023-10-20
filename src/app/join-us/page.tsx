import { joinUsGetStartSectionData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import joinUsPage from "../../../public/images/join-us.webp";
import JoinUsSegmentSection from "./components/JoinUsSegmentSection";

const JoinUs = () => {
  return (
    <>
      <section className="bg-slate-50">
        <div className="flex flex-col lg:flex-row justify-between lg:p-6 lg:px-10">
          <div className="px-8 lg:basis-2/5 py-16 lg:pl-0">
            <h1 className="text-4xl leading-10 md:text-5xl max-w-lg md:!leading-[3.5rem] tracking-wide text-mindfire-text-black">
              Eager to Contribute to Open Source Ecosystems
            </h1>
            <p className="mt-6 text-xl text-mf-light-grey tracking-wide">
              Explore projects and start working, or discover our
              beginner-friendly open source checklist to learn more.
            </p>
            <div className="flex flex-wrap items-start gap-6 mt-10">
              <Link
                href="/projects"
                className="bg-mf-red text-center text-white tracking-widest capitalize rounded-full px-8 py-3"
              >
                explore projects
              </Link>
            </div>
          </div>
          <Image
            src={joinUsPage}
            alt="Join Us"
            className="max-lg:w-full object-contain"
            height="500"
            width="600"
            priority
          />
        </div>
      </section>
      <JoinUsSegmentSection
        title="getting started with"
        description="Here's a simple guide to help you navigate your way."
        data={joinUsGetStartSectionData}
        className="mb-24"
      />
    </>
  );
};

export default JoinUs;
