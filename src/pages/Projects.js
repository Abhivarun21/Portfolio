import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectData = [
    {
      title: "Green Commute Planner",
      description: "A web app that suggests eco-friendly travel options and optimizes routes for sustainable urban mobility.",
      techStack: ["HTML", "CSS", "JS", "Nodejs", "Expressjs", "Postgre"],
      githubLink: "https://github.com/Abhivarun21/Green-Commute-Planner"
    },
    {
      title: "Task Manager",
      description: "A full-stack task management application featuring a clean UI for CRUD operations and productivity tracking.",
      techStack: ["HTML", "CSS", "JS"],
      githubLink: "https://github.com/Abhivarun21/Task-Manager"
    },
    {
      title: "Simon Game",
      description: "A classic memory-based game built with vanilla JavaScript to demonstrate DOM manipulation and logic flow.",
      techStack: ["HTML", "CSS", "JS"],
      githubLink: "https://github.com/Abhivarun21/Simon-Game"
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="neon-text" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
        Featured Projects
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px' 
      }}>
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;