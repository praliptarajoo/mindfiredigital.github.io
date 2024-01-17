// updateProjects.js
const fs = require("fs");
const path = require("path");

async function getCurrentProjects() {
  const query = `query getCurrentProjects {
      foss_projects(filter: {project_type: { _eq: "current" }}) {
        id,
        title,
        short_description,
        github_repository_link,
        documentation_link,
        project_type,
        date_created,
        date_updated,
        status,
      }
    }`;

  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const response = await fetch("https://directus.ourgoalplan.co.in/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query,
      }),
    });

    if (response.ok) {
      const { data } = await response.json();
      data.foss_projects.forEach((entry) => {
        entry.id = parseInt(entry.id);
        entry.shortDescription = entry.short_description;
        entry.githubUrl = entry.github_repository_link;
        entry.documentationUrl = entry.documentation_link;

        delete entry.short_description;
        delete entry.github_repository_link;
        delete entry.documentation_link;
      });

      const projectsJsonPath = path.join(
        __dirname,
        "src/app/projects/assets/projects.json"
      );

      fs.writeFileSync(
        projectsJsonPath,
        JSON.stringify(data.foss_projects, null, 2)
      );

      console.log("Projects updated successfully.");
    } else {
      console.log("API is not available. Using existing JSON.");
    }
  } catch (error) {
    console.log(error);
  }
}

async function getUpcomingProjects() {
  const query = `query getUpcomingProjects {
        foss_projects(filter: {project_type: { _eq: "upcoming" }}) {
          id,
          title,
          short_description,
          github_repository_link,
          documentation_link,
          project_type,
          date_created,
          date_updated,
          status,
        }
      }`;

  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const response = await fetch("https://directus.ourgoalplan.co.in/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query,
      }),
    });

    if (response.ok) {
      const { data } = await response.json();
      data.foss_projects.forEach((entry) => {
        entry.id = parseInt(entry.id);
        entry.shortDescription = entry.short_description;
        entry.githubUrl = entry.github_repository_link;
        entry.documentationUrl = entry.documentation_link;

        delete entry.short_description;
        delete entry.github_repository_link;
        delete entry.documentation_link;
      });

      const projectsJsonPath = path.join(
        __dirname,
        "src/app/projects/assets/upcomingProjects.json"
      );

      fs.writeFileSync(
        projectsJsonPath,
        JSON.stringify(data.foss_projects, null, 2)
      );

      console.log("Upcoming projects updated successfully.");
    } else {
      console.log("API is not available. Using existing JSON.");
    }
  } catch (error) {
    console.log(error);
  }
}

getCurrentProjects();
getUpcomingProjects();
