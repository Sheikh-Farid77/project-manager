import { useState } from "react";
import AddItem from "./projectBoard/AddItem";
import Done from "./projectBoard/Done";
import Progress from "./projectBoard/Progress";
import Revise from "./projectBoard/Revise";
import ToDo from "./projectBoard/ToDo";

export default function Board() {
  const [projects, setProjects] = useState([]);
  console.log(projects);

  const handleAddProject = (project) => {
    setProjects([...projects, project]);
  };
  return (
    <div className="mx-auto max-w-7xl p-6">
      <AddItem onAddProject={handleAddProject} />
      <div className="-mx-2 mb-6 flex flex-wrap">
        <ToDo projects={projects} />
        <Progress projects={projects} />
        <Done projects={projects} />
        <Revise projects={projects} />
      </div>
    </div>
  );
}
