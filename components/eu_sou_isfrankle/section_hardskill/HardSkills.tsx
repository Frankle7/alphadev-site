import React from "react";
import "./HardSkills.css";

const skills = [
  { name: "HTML", src: "assets/logos/html.png" },
  { name: "CSS", src: "assets/logos/css3.png" },
  { name: "JavaScript", src: "assets/logos/javascript.png" },
  { name: "Git", src: "assets/logos/git.png" },
  { name: "UI/UX", src: "assets/logos/figma.png" },
  { name: "ReactJS", src: "assets/logos/react.jpg" },
  { name: "Flutter", src: "assets/logos/flutter.png" },
  { name: "Kotlin", src: "assets/logos/kotlin.png" },
  { name: "Cybersecurity", src: "assets/logos/cyber.png" }
];

const HardSkills = () => {
  return (
    <section className="hardskills-container">
      <h1>Hard Skills</h1>
      <div className="skills-scroll">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.src} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HardSkills;
