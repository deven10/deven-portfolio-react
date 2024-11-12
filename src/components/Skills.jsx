import { getExperience } from "../utils,js";

export const Skills = () => {
  const skills = [
    {
      count: "2.5",
      skill: "HTML",
      startedFrom: "2021-12-01",
    },
    {
      count: "2.5",
      skill: "CSS",
      startedFrom: "2021-12-01",
    },
    {
      count: "2.5",
      skill: "Javascript",
      startedFrom: "2021-12-01",
    },
    {
      count: "2",
      skill: "React JS",
      startedFrom: "2022-02-01",
    },
    {
      count: "2",
      skill: "Redux Toolkit",
      startedFrom: "2022-05-01",
    },
    {
      count: "1",
      skill: "Typescript",
      startedFrom: "2023-08-01",
    },
    {
      count: "1",
      skill: "Node JS",
      startedFrom: "2023-09-01",
    },
    {
      count: "2",
      skill: "Git & GitHub",
      startedFrom: "2022-01-01",
    },
    {
      count: "1",
      skill: "Mongo DB",
      startedFrom: "2023-09-01",
    },
    {
      count: "1",
      skill: "Express JS",
      startedFrom: "2023-09-01",
    },
  ];
  return (
    <div className="wrapper">
      {skills.map((skill, index) => (
        <div key={skill.skill} className={`item item${index + 1}`}>
          <p className="mb-2 text-[32px] text-[#fff]">{skill.skill}</p>
          <p className="m-0 text-[16px] text-[#cdcdcd]">
            {getExperience(skill.startedFrom)}
          </p>
        </div>
      ))}
    </div>
  );
};
