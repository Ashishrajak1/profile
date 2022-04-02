import React from "react";
import css from "./Skills.css";

const MySkills = [
  {
    title: "Html",
    width: "85%",
    percentage: "80%",
  },
  {
    title: "Css",
    width: "85%",
    percentage: "75%",
  },
  {
    title: "Javascript",
    width: "85%",
    percentage: "85%",
  },
  {
    title: "React",
    width: "85%",
    percentage: "70%",
  },
];
const MysecSkills = [
  {
    title: "C",
    width: "85%",
    percentage: "80%",
  },
  {
    title: "C++",
    width: "75%",
    percentage: "85%",
  },
  {
    title: "bootstrap",
    width: "85%",
    percentage: "50%",
  },
];

function Skills() {
  return (
    <div className="skills-main">
      <h1 className="skills-name">My Skills</h1>
      <div className="skills">
        <div className="my-skills-left">
          {MySkills.map((item, index) => (
            <SkillsItem
              key={index}
              title={item.title}
              percentage={item.percentage}
            />
          ))}
        </div>
        <div className="my-skills-right">
          {MysecSkills.map((item, index) => (
            <SkillsItem
              key={index}
              title={item.title}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const SkillsItem = ({ title, percentage }) => {
  return (
    <div className="skills-data">
      <div className="skills-title">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>
      <div className="skills-bar">
        <span
          className="skills-bar-percentage"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};

export default Skills;
