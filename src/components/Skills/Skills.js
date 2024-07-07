// src/components/Skills/Skills.js
import React from 'react';
import './Skills.css'; // Import the CSS file for Skills component
import { FaCode, FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaPhp,FaServer, FaFileCode ,FaCogs,FaFileAlt } from 'react-icons/fa';
const Skills = () => {
  const programmingLanguages = [
    { name: "C", icon: <FaCode/> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> }
  ];

  const webTools = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React Js", icon: <FaReact /> }
  ];

  const techTools = [
    { name: "Java", icon: <FaJava /> },
    { name: "XML", icon:<FaFileAlt/> /* Add XML icon component here */ },
    { name: "Android studio", icon: <FaFileCode />/* Add Android Studio icon component here */ }
  ];

  const webback = [
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "ExpressJs", icon: <FaServer/>/* Add ExpressJs icon component here */ },
    { name: "Mysql", icon: <FaDatabase/>/* Add MySQL icon component here */ },
    { name: "MongoDB", icon:<FaCogs/> /* Add MongoDB icon component here */ },
    { name: "PHP", icon: <FaPhp /> }
  ];

  return (
    <section id="skills">
      <h1 className='h-skills'>Skills</h1>
      <p>Here are some skills I have familiarized over the past three years:</p>
      <div className="skills-container">
        <div className="box">
          <h2>Programming Languages</h2>
          <ul className='skills-ul'>
            {programmingLanguages.map((language, index) => (
              <li key={index} className='skills-list'>
                {language.icon} {language.name}
              </li>
            ))}
          </ul>
          <h2>Android development</h2>
          <ul className='skills-ul'>
            {techTools.map((tool, index) => (
              <li key={index} className='skills-list'>
                {tool.icon} {tool.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <h2>Web dev tools - Frontend </h2>
          <ul className='skills-ul'>
            {webTools.map((language, index) => (
              <li key={index} className='skills-list'>
                {language.icon} {language.name}
              </li>
            ))}
          </ul>
          <h2>Web dev tools - Backend </h2>
          <ul className='skills-ul'>
            {webback.map((language, index) => (
              <li key={index} className='skills-list'>
                {language.icon} {language.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
