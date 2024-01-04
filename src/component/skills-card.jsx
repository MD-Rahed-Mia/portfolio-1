import React from "react";

export default function SkillCard(props) {
  console.log(props.list);

  const { id, title, type, desc, icon } = props.item;
  return (
    <div className="skills-card" key={id}>
      <img src={icon} alt="" />
      <h1>{title}</h1>
      <h2>{type}</h2>
      <p>{desc}</p>
    </div>
  );
}
