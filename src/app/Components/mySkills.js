"use client";

// import img from "next/img";
import "./Skills.css"; 

export const Skills = () => {
    const skills = [
        { name: "Python", logo: "/assets/img/skills/Python.png" },
        { name: "C++", logo: "/assets/img/skills/c++.png" },
        { name: "Java", logo: "/assets/img/skills/java.png" },
        { name: "Tensorflow", logo: "/assets/img/skills/tensorflow.png" },
        { name: "Pytorch", logo: "/assets/img/skills/pytorch.png" },
        { name: "Sci-Kit Learn", logo: "/assets/img/skills/sklearn.png" },
        { name: "HuggingFace", logo: "/assets/img/skills/huggingface.png" },
        { name: "LangChain", logo: "/assets/img/skills/langchain.png" },
        { name: "LangGraph", logo: "/assets/img/skills/langgraph.png" },
        { name: "NextJS", logo: "/assets/img/skills/nextjs.png" },
        { name: "Node.js", logo: "/assets/img/skills/nodejs.png" },
        { name: "Tailwind", logo: "/assets/img/skills/tailwind.png" },
        { name: "Flutter", logo: "/assets/img/skills/flutter.png" },
        { name: "Docker", logo: "/assets/img/skills/docker.png" },
        { name: "Git", logo: "/assets/img/skills/git.png" },
        { name: "Arduino Uno", logo: "/assets/img/skills/arduino.png" },
        { name: "MS SQL", logo: "/assets/img/skills/mssql.png" },
      ];
      

  return (
    <section className="skill marquee-section" id="skills">
      <h2>Skills</h2>
      <p>
        Here are some tools and technologies I work with — constantly growing and evolving.
      </p>
      <div className="marquee-wrapper">
        <div className="marquee">
          {skills.map((skill, index) => (
            <div className="skill-logo-box" key={index}>
              <img src={skill.logo} alt={skill.name} style={{height:100}} />
              <span>{skill.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {skills.map((skill, index) => (
            <div className="skill-logo-box" key={`dup-${index}`}>
              <img src={skill.logo} alt={skill.name} style={{height:100}} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
