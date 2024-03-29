import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Lost and Found Website', description: 'The Lost and Found website is developed by me to tackle real world challenges through innovative solutions that integrate my theoretical knowledge gained in the course with practical application. A lost and found application is a website that helps people report and find lost items. It can be used by individuals, organizations, and businesses.."Lost and Found" website, designed to help individuals for reporting lost items, locating found items, reconnect with their lost belongings.' },
  { id: 2, title: 'Smart Knee braces', description: 'This project was created by me for our engineering clinics which monitors the deformations and movements of the knee and sends an alert to the user. This project was built as a college project with a team of 6 people where my responsibility was to manage and build the circuit with all connections set to proper and develop an application.' },
  { id: 3, title: 'Task Pilot', description: 'Task Pilot is a task management application built on the MERN stack This project was created by a team of 5 people during an MERN stack internship My responsibilities include utilizing ReactJs for UI, handling API calls, and managing routing.' }

  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I worked on</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
   
  );
  
};


export default Projects;
