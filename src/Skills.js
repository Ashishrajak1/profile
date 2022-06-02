import React from "react";
import "./Skills.css";

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
    title: "ReactJS",
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
    title: "Bootstrap",
    width: "85%",
    percentage: "60%",
  },
];

function Skills() {
 
  return (
    <div className="top-skills"> <h1 className="skills-name">My Skills</h1> 
    <div className="skills-main">
     
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
