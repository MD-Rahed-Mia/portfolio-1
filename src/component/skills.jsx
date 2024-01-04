import React from "react";
import "./css/skills.css";
import SkillCard from "./skills-card";
import ReactIcon from "./../../public/images/react.png";
import JS from './../../public/images/js.png';
import HTML from './../../public/images/html.png';
import PHP from './../../public/images/php.png';


const skillData = [
  {
    id: 1,
    title: "React",
    type: "master in react",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero maiores exercitationem soluta a in!",
    icon: ReactIcon,
  },
  {
    id: 2,
    title: "JavaScript",
    type: "Specialist in Js",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero maiores exercitationem soluta a in!",
    icon: JS,
  },
  {
    id: 3,
    title: "HTML5",
    type: "Core pandamental in HTML5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero maiores exercitationem soluta a in!",
    icon: HTML,
  },
  {
    id: 3,
    title: "PHP",
    type: "Backend solutin with PHP",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero maiores exercitationem soluta a in!",
    icon: PHP,
  },
];

export default function Skills() {
  return (
    <>
      <div id="skills" className="skills">
        <h1 className="skills-heading">My key skills</h1>
        <p className="p">Skills are the key pandamental's for creating efficient web application.</p>
        <div className="skills-cards">
          {skillData.map((ele) => {
            return <SkillCard item={ele}/>
          })}
        </div>
      </div>
    </>
  );
}
