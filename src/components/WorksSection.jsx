import styled from "styled-components";
import { MainTitle } from ".";
import { projectsData } from "../utils/projects";
import Work from "./Work";
import { useRef, useState } from "react";

const WorksSection = () => {
  // Flatten the projects array
  const projects = projectsData.flatMap((item) => item.projects);

  // State management
  const [projectsIndex, setProjectsIndex] = useState(6);
  const [newProjects, setNewProjects] = useState(
    projects.slice(0, projectsIndex)
  );
  const [isLoad, setIsLoad] = useState(true);
  const [activeBtn, setActiveBtn] = useState("All");
  const loadRef = useRef(null);

  // Handle filtering projects
  const handleWorks = (e) => {
    const value = e.target.dataset.value;
    setActiveBtn(value);

    if (value === "All") {
      setNewProjects(projects.slice(0, 6));
      setIsLoad(true);
    } else {
      const filteredProjects = projects.filter(
        (item) => item.program.toUpperCase() === value
      );
      setNewProjects(filteredProjects);
      setIsLoad(false);
    }
  };

  // Handle loading more or showing less
  const handleLoad = () => {
    if (isLoad) {
      const newIndex = Math.min(projectsIndex + 3, projects.length);
      setProjectsIndex(newIndex);
      setNewProjects(projects.slice(0, newIndex));

      if (newIndex === projects.length) setIsLoad(false);
    } else {
      setProjectsIndex(6);
      setNewProjects(projects.slice(0, 6));
      setIsLoad(true);
    }
  };

  return (
    <Wrapper id="WORKS">
      <div className="section-center">
        <MainTitle mainTitle="My works" sectionTitle="Works" />

        <div className="works-container">
          {newProjects.map((item, index) => (
            <Work key={index} {...item} />
          ))}
        </div>

        {projects.length > 6 && (
          <button
            className="btn btn-2 load-btn"
            onClick={handleLoad}
            ref={loadRef}
          >
            {isLoad ? "Load More" : "Show Less"}
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  background: #06022c33;
  position: relative;

  .works-container {
    display: grid;
    justify-items: center;
    gap: 1.3rem;
    margin-top: 2rem;
  }

  .load-btn {
    margin: 0 auto;
    margin-top: 2rem;
    font-weight: normal;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 700px) {
    min-height: 100vh;

    .works-container {
      grid-template-columns: 1fr 1fr;
    }

    .load-btn {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1100px) {
    .works-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default WorksSection;
