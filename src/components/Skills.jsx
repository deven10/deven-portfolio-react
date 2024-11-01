export const Skills = () => {
  const skills = [
    {
      count: "2.5",
      skill: "HTML",
    },
    {
      count: "2.5",
      skill: "CSS",
    },
    {
      count: "2.5",
      skill: "Javascript",
    },
    {
      count: "2",
      skill: "React JS",
    },
    {
      count: "2",
      skill: "Redux Toolkit",
    },
    {
      count: "1",
      skill: "Typescript",
    },
    {
      count: "1",
      skill: "Node JS",
    },
    {
      count: "2",
      skill: "Git & GitHub",
    },
    {
      count: "1",
      skill: "Mongo DB",
    },
    {
      count: "1",
      skill: "Express JS",
    },
  ];
  return (
    <div className="pt-14 pb-32 grid gap-10 grid-cols-5">
      {skills.map((skill) => (
        <div key={skill.skill} className="">
          <p className="mb-2 text-[32px] text-[#fff]">{skill.skill}</p>
          <p className="m-0 text-[16px] text-[#cdcdcd]">
            {skill.count}+ Years of Experience
          </p>
        </div>
      ))}
    </div>
  );
};
