import React from "react";
import ProjectCard from "./ProjectCard";

interface Props {
  title: string;
  projectData: any[];
}

export default function ProjectGrid({ title, projectData }: Props) {
  return (
    <section className='mt-20' id='all-projects'>
      <h2 className='tracking-wider text-3xl font-medium capitalize text-mindfire-text-black  text-center'>
        {title}
      </h2>
      <div className='mt-12 px-4 grid gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3'>
        {projectData.map(
          ({ title, shortDescription, githubUrl, documentationUrl }, index) => {
            return (
              <ProjectCard
                key={index}
                title={title}
                shortDescription={shortDescription}
                githubUrl={githubUrl}
                documentationUrl={documentationUrl}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
