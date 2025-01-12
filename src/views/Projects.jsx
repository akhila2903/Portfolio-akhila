import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/akhila2903/repos");
        const data = await response.json();

        // Filter out duplicate projects
        const uniqueRepos = data.filter(
          (repo, index, self) => index === self.findIndex((r) => r.id === repo.id)
        );

        setRepos(uniqueRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div id="projects" className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold text-center">Projects</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">What I Built</h4>
        <div className="mt-8 flex flex-wrap justify-between items-stretch">
          {repos.map((repo) => (
            <Card
              key={repo.id} // Ensures each project is unique
              title={repo.name}
              description={repo.description || "No description available"}
              link={repo.html_url}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <a
            href="https://github.com/akhila2903?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show More
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
