import React from "react";
import ProjectCard from "./ProjectCard";

interface Props {
  title: string;
  projectData: {
    title: string;
    shortDescription: string;
    githubUrl?: string | undefined;
    documentationUrl?: string | undefined;
    id?: number | undefined;
    Summary?: string | undefined;
    project_type?: string | undefined;
    contributors?: string[] | undefined;
    project_goal?: string | undefined;
    target_users?: string | undefined;
    risk?: string | undefined;
  }[];
}

export default function ProjectGrid({ title, projectData }: Props) {
  return (
    <section className='mt-20' id='all-projects'>
      <h2 className='tracking-wider text-3xl font-medium capitalize text-mindfire-text-black  text-center'>
        {title}
      </h2>
      <div className='mt-12 px-4 grid gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3'>
        {projectData.map(
          (
            {
              title: projectTitle,
              shortDescription,
              githubUrl,
              documentationUrl,
            },
            index
          ) => {
            return (
              <ProjectCard
                key={index}
                title={projectTitle}
                parentTitle={title}
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
