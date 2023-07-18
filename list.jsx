import React from "react";
function Name() {
  const person = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 31,
      skill: "angular",
    },
    {
      id: 3,
      name: "Smith",
      age: 32,
      skill: "python",
    },
  ];
  const personlist = person.map((p) => (
    <h3 key={p.id}>
      I am {p.name} my age is {p.age} and my skill is {p.skill}
    </h3>
  ));
  return <div>{personlist}</div>;
}
export default Name;
