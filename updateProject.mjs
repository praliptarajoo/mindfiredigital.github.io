// updateProjects.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

//get list of contributors from github repo
async function getContributorsList() {
  const githubApiUrl = "https://api.github.com/users/mindfiredigital/repos";
  const githubToken = process.env.GITHUB_TOKEN;
  console.log("my github token", githubToken);

  try {
    const github_response = await fetch(githubApiUrl, {
      method: "GET",
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!github_response.ok) {
      throw new Error(
        `Failed to fetch repositories. Status: ${github_response.status}`
      );
    }
    const repositories = await github_response.json();
    const repoNames = repositories.map((repo) => repo.name);

    const contributorsObject = {};
    for (const repoName of repoNames) {
      const repoContributorsUrl = `https://api.github.com/repos/mindfiredigital/${repoName}/contributors`;

      const contributorsResponse = await fetch(repoContributorsUrl, {
        method: "GET",
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!contributorsResponse.ok) {
        console.error(
          `Failed to fetch contributors for ${repoName}. Status: ${contributorsResponse.status}`
        );
        continue;
      }

      const contributors = await contributorsResponse.json();
      contributorsObject[repoName] = contributors;
    }
    let contributionsMap = {};

    for (let repo in contributorsObject) {
      contributorsObject[repo].forEach((contributor) => {
        const { login, contributions, id, avatar_url, html_url } = contributor;
        if (contributionsMap.hasOwnProperty(login)) {
          contributionsMap[login].contributions += contributions;
        } else {
          contributionsMap[login] = {
            id,
            contributions,
            html_url,
            avatar_url,
            login,
          };
        }
      });
    }
    let sortedContributions = Object.fromEntries(
      Object.entries(contributionsMap).sort(
        ([, a], [, b]) => b.contributions - a.contributions
      )
    );

    const projectsJsonPath = path.join(
      __dirname,
      "src/app/projects/assets/contributors.json"
    );

    fs.writeFileSync(
      projectsJsonPath,
      JSON.stringify(sortedContributions, null, 2)
    );
  } catch (error) {
    console.log(error);
  }
}

getCurrentProjects();
getUpcomingProjects();
getContributorsList();
